import Chart from './charts/Chart.container'
import {backColor, frontColor, maxValue, minValue} from '../utils/charts'
import {colorToRgba} from '../utils/color'

const colorYellow = '#ffff1e';
const colorRed = '#ff0000';

function getColorForCurrentValue(channelDataRef, configRef) {
    const value = parseFloat(mobro.utils.channelData.extractValue(channelDataRef.current));
    let color = frontColor(configRef);

    if (!value) {
        return color
    }

    const warning = parseInt(configRef.current.warning);
    const danger = parseInt(configRef.current.danger);

    if(danger && value >= danger) {
        color = colorToRgba(configRef.current.dangerColor, colorRed);
    } else if(warning && value >= warning) {
        color = colorToRgba(configRef.current.warningColor, colorYellow);
    }

    return color;
}

function createOptions(configRef, layoutConfigRef, channelDataRef, settings, optionsRef) {
    const max = maxValue(configRef, channelDataRef.current, 'max');
    const min = minValue(configRef, 'min', 0);

    return {
        colors: [backColor(configRef), getColorForCurrentValue(channelDataRef, configRef)],
        chart: {
            type: !configRef.current.vertical ? 'bar' : 'column',
            backgroundColor: 'rgba(0, 0, 0, 0)',
            animation: {
                duration: 500
            },
            margin: [0, 0, 0, 0],
            spacing: [0, 0, 0, 0],
        },
        title: {
            text: undefined,
            floating: true
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
        tooltip: {
            enabled: false
        },
        legend: {
            enabled: false
        },
        xAxis: {
            visible: false,
            endOnTick: false
        },
        yAxis: {
            visible: false,
            min: min,
            max: max,
            endOnTick: false
        },
        plotOptions: {
            series: {
                // necessary so that the start animation won't cause weird re-renderings
                // due to unfinished animations
                animation: false,
                stacking: 'normal'
            },
            bar: {
                // remove border from bar
                borderWidth: 0
            },
            column: {
                // remove border from column
                borderWidth: 0
            }
        },
        series: [{
            marker: {
                enabled: false
            },
            enableMouseTracking: false,
            data: [max]
        }, {
            marker: {
                enabled: false
            },
            enableMouseTracking: false,
            data: [0]
        }]
    }
}


function BarChartWidget(props) {
    const {
        ...chartProps
    } = props;

    return (
        <Chart
            {...chartProps}
            createOptions={createOptions}
            configKeyToListen={[
                'vertical',
                'mirror',
                'min',
                'max',
                'width',
                'warning',
                'danger',
                'height',
                'frontColor',
                'backColor',
                'warningColor',
                'dangerColor',
            ]}
            writeDataToSeries={(channelDataRef, optionsRef, configRef, layoutConfigRef, chartRef) => {
                let data = [
                    Math.max(0, optionsRef.current.yAxis.max - parseFloat(mobro.utils.channelData.extractValue(channelDataRef.current))),
                    parseFloat(mobro.utils.channelData.extractValue(channelDataRef.current))
                ];

                let colors = [
                    backColor(configRef),
                    getColorForCurrentValue(channelDataRef, configRef)
                ];

                if(configRef.current.mirror) {
                    data = data.reverse();
                    colors = colors.reverse();
                }

                optionsRef.current.series[0].data = [data[0]]
                optionsRef.current.series[1].data = [data[1]];
                optionsRef.current.colors = colors;
            }}
            adaptOptions={(channelDataRef, optionsRef, configRef) => {
                optionsRef.current.yAxis.min = minValue(configRef, 'min', null);
                optionsRef.current.yAxis.max = maxValue(configRef, channelDataRef.current, 'max');
            }}
        />
    )
}

export default BarChartWidget;