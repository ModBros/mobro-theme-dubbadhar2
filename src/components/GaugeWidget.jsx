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

    settings.hardware.temperature.forEach((item) => {
        if (item.hardwaretype === channelData?._hardware?.hardwaretype) {
            minMaxSettings = item;
        }
    });

    return minMaxSettings;
}

function createOptions(configRef, layoutConfigRef, channelDataRef, settings) {
    const max = maxValue(configRef, channelDataRef, "max");
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
                    return colorGreen;
                }),
                redraw: redrawDoughnutOrGauge(configRef, layoutConfigRef, channelDataRef, basicTextColor, () => {
                    return colorGreen;
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
            min: 0,
            max: 100,
            plotBands: [
                {thickness: 5, from: 0, to: parseInt(configRef.current.warning || minMaxSettings.warning), color: colorToRgba(configRef.current.baseColor, colorGreen)},
                {thickness: 5, from: parseInt(configRef.current.warning || minMaxSettings.warning), to: parseInt(configRef.current.danger || minMaxSettings.critical), color: colorToRgba(configRef.current.warningColor, colorYellow)},
                {thickness: 5, from:  parseInt(configRef.current.danger || minMaxSettings.critical), to: parseInt(max), color: colorToRgba(configRef.current.dangerColor, colorRed)}
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
            data: [80]
        }]
    }
}

function GaugeWidget(props) {
    return (
        <DoughnutOrGauge
            {...props}
            createOptions={(...args) => createOptions(...args, props.settings)}
            extractMaxValue={(...args) => maxValue(...args, 'max')}
        />
    );
}

export default GaugeWidget;
