import Chart from './charts/Chart.container'
import {backColor, frontColor, maxValue, minValue} from '../utils/charts'

function createOptions(configRef, layoutConfigRef, channelDataRef, settings, optionsRef) {
    const max = maxValue(configRef, channelDataRef.current, 'max');

    return {
        colors: [backColor(configRef), frontColor(configRef)],
        chart: {
            type: 'bar',
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
            visible: false
        },
        yAxis: {
            visible: false
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
                'min',
                'max',
                'width',
                'height',
                'frontColor',
                'backColor'
            ]}
            writeDataToSeries={(channelDataRef, optionsRef, configRef, layoutConfigRef, chartRef) => {
                optionsRef.current.series[0].data = [Math.max(0, optionsRef.current.yAxis.max - parseFloat(mobro.utils.channelData.extractValue(channelDataRef.current)))]
                optionsRef.current.series[1].data = [parseFloat(mobro.utils.channelData.extractValue(channelDataRef.current))];
            }}
            adaptOptions={(channelDataRef, optionsRef, configRef) => {
                optionsRef.current.yAxis.min = minValue(configRef, 'min', null);
                optionsRef.current.yAxis.max = maxValue(configRef, channelDataRef.current, 'max');
            }}
        />
    )
}

export default BarChartWidget;