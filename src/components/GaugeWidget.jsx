import {backColor, basicTextColor, loadDoughnutOrGauge, maxValue, redrawDoughnutOrGauge} from '../utils/charts'
import DoughnutOrGauge from './charts/DoughnutOrGauge'
import {colorToRgba} from '../utils/color'

const colorGreen = '#00ff1e';
const colorYellow = '#ffff1e';
const colorRed = '#ff0000';
const defaultMinMaxSettings = {
    min: 0,
    warning: 65,
    critical: 80,
    max: 100
}

function findMinMaxSettings(channelData, settings) {
    let minMaxSettings = defaultMinMaxSettings;

    if (mobro.enum.channelData.SENSOR_TYPE_TEMPERATURE !== channelData?.sensortype) {
        return minMaxSettings;
    }

    settings?.hardware?.temperature?.forEach((item) => {
        if (item.hardwaretype === channelData?._hardware?.hardwaretype) {
            minMaxSettings = item;
        }
    });

    return minMaxSettings;
}

function getColorForCurrentValue(channelDataRef, configRef, settings) {
    const value = parseFloat(mobro.utils.channelData.extractValue(channelDataRef.current));
    const minMaxSettings = findMinMaxSettings(channelDataRef.current, settings);

    let color = colorToRgba(configRef.current.baseColor, colorGreen);

    if (!value) {
        return color
    }

    const warning = parseInt(configRef.current.warning || minMaxSettings.warning);
    const danger = parseInt(configRef.current.danger || minMaxSettings.critical);

    if (value >= danger) {
        color = colorToRgba(configRef.current.dangerColor, colorRed);
    } else if (value >= warning) {
        color = colorToRgba(configRef.current.warningColor, colorYellow);
    }

    return color;
}

function createOptions(configRef, layoutConfigRef, channelDataRef, settings) {
    const max = maxValue(configRef, channelDataRef, 'max');
    const minMaxSettings = findMinMaxSettings(channelDataRef.current, settings);

    return {
        colors: [colorGreen],
        chart: {
            type: 'solidgauge',
            backgroundColor: 'rgba(0, 0, 0, 0)',
            margin: [0, 0, 0, 0],
            spacing: [0, 0, 0, 0],
            events: {
                load: loadDoughnutOrGauge(configRef, layoutConfigRef, basicTextColor, () => {
                    return getColorForCurrentValue(channelDataRef, configRef, settings);
                }),
                redraw: redrawDoughnutOrGauge(configRef, layoutConfigRef, channelDataRef, basicTextColor, () => {
                    return getColorForCurrentValue(channelDataRef, configRef, settings);
                })
            },
            animation: {
                duration: 500
            }
        },
        title: {
            text: ''
        },
        credits: {
            enabled: false
        },
        exporting: {
            enabled: false
        },
        subtitle: {
            text: ''
        },
        pane: {
            center: ['50%', '50%'],
            size: '100%',
            startAngle: -145,
            endAngle: 145,
            background: {
                backgroundColor: backColor(configRef),
                innerRadius: '70%',
                outerRadius: '90%',
                borderWidth: 0,
                shape: 'arc'
            }
        },
        tooltip: {
            enabled: false
        },
        xAxis: {
            max: max,
            visible: false,
            endOnTick: false
        },
        yAxis: {
            length: 5,
            lineWidth: 0,
            minorTickInterval: null,
            tickAmount: 2,
            tickLength: 0,
            labels: {
                enabled: false
            },
            endOnTick: false,
            min: 0,
            max: max,
            plotBands: [
                {
                    thickness: 5,
                    from: 0.0,
                    to: parseFloat(configRef.current.warning || minMaxSettings.warning),
                    color: colorToRgba(configRef.current.baseColor, colorGreen)
                },
                {
                    thickness: 5,
                    from: parseFloat(configRef.current.warning || minMaxSettings.warning),
                    to: parseFloat(configRef.current.danger || minMaxSettings.critical),
                    color: colorToRgba(configRef.current.warningColor, colorYellow)
                },
                {
                    zIndex: 10,
                    thickness: 5,
                    from: parseFloat(configRef.current.danger || minMaxSettings.critical),
                    // kinda ugly but parseFloat(max) kinda doesn't work all the time :(
                    to: Number.MAX_VALUE,
                    color: colorToRgba(configRef.current.dangerColor, colorRed)
                }
            ]
        },
        plotOptions: {
            solidgauge: {
                innerRadius: '70%',
                radius: '90%',
                dataLabels: {
                    y: 5,
                    borderWidth: 0,
                    useHTML: true
                },
                series: {
                    animation: {
                        duration: 200
                    }
                }
            },
            series: {
                // necessary so that the start animation won't cause weird re-renderings
                // due to unfinished animations
                animation: false
            },
            column: {
                // remove border from bar
                borderWidth: 0
            }
        },
        series: [{
            data: [0]
        }]
    }
}

function GaugeWidget(props) {
    return (
        <DoughnutOrGauge
            {...props}
            createOptions={(...args) => createOptions(...args, props.settings)}
            extractMaxValue={(...args) => maxValue(...args, 'max')}
            writeDataToSeries={(channelDataRef, optionsRef, configRef) => {
                optionsRef.current.colors = [getColorForCurrentValue(channelDataRef, configRef, props.settings)];
            }}
        />
    );
}

export default GaugeWidget;
