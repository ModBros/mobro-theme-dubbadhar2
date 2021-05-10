import {backColor, frontColor, loadDoughnutOrGauge, maxValue, redrawDoughnutOrGauge} from '../utils/charts'
import DoughnutOrGauge from './charts/DoughnutOrGauge'

function createOptions(config, layoutConfig, channelData) {
    return {
        colors: [frontColor(config)],
        chart: {
            type: 'column',
            inverted: true,
            polar: true,
            backgroundColor: 'rgba(0, 0, 0, 0)',
            margin: [0, 0, 0, 0],
            spacing: [0, 0, 0, 0],
            events: {
                load: loadDoughnutOrGauge(config, layoutConfig),
                redraw: redrawDoughnutOrGauge(config, layoutConfig, channelData)
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
            background: {
                outerRadius: '100%',
                innerRadius: '76%',
                borderWidth: 0,
                backgroundColor: backColor(config)
            }
        },
        legend: {
            // no legend
            enabled: false
        },
        tooltip: {
            // no tooltip on hover
            enabled: false
        },
        xAxis: {
            // no borders, ticks what so ever
            visible: false
        },
        yAxis: {
            max: maxValue(config, channelData, 'maxValue'),
            // no borders, ticks what so ever
            visible: false
        },
        plotOptions: {
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

function DoughnutWidget(props) {
    return (
        <DoughnutOrGauge
            {...props}
            createOptions={(...args) => createOptions(...args)}
            extractMaxValue={(...args) => maxValue(...args, 'maxValue')}
        />
    );
}

export default DoughnutWidget;
