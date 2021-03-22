import {useState, useRef} from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const AlignCenter = mobro.hooks.getComponent("shared.layout.align-center");
const LoadingIndicator = mobro.hooks.getComponent("shared.loading-indicator");

function load() {
    return function() {
        this.widgetLabel = this.renderer.text("")
            .attr({
                align: "center",
                zIndex: 1
            })
            .css({
                color: "white"
            })
            .add()

        this.widgetValue = this.renderer.text("")
            .attr({
                align: "center",
                zIndex: 2
            })
            .css({
                color: "red"
            })
            .add();

        this.widgetUnit = this.renderer.text("")
            .attr({
                align: "center",
                zIndex: 1
            })
            .css({
                color: "white"
            })
            .add()
    }
}

function redraw(config, channelData) {
    return function() {
        if (!channelData.current) {
            return;
        }

        const centerX = this.plotWidth / 2 + this.plotLeft;
        const centerY = this.plotHeight / 2 + this.plotTop;
        const valueFontSize = this.plotWidth / 6
        const labelFontSize = valueFontSize / 2.5;

        this.widgetLabel
            .attr({
                text: config.label ?? channelData.current?.label,
                x: centerX,
                y: centerY - (this.plotHeight / 6)
            })
            .css({
                fontSize: `${labelFontSize}px`
            });

        this.widgetValue
            .attr({
                text: mobro.utils.channelData.extractValue(channelData.current),
                x: centerX,
                y: centerY + (valueFontSize / 3)
            })
            .css({
                fontSize: `${valueFontSize}px`
            });

        this.widgetUnit
            .attr({
                text: mobro.utils.channelData.extractRawUnit(channelData.current),
                x: centerX,
                y: centerY + (valueFontSize / 3) + (this.plotHeight / 6)
            })
            .css({
                fontSize: `${labelFontSize}px`
            });
    }
}

function DoughnutWidget(props) {
    const {
        config,
        layoutConfig
    } = props;

    const channelData = useRef(null);
    const [options, setOptions] = useState({
        chart: {
            type: "column",
            inverted: true,
            polar: true,
            backgroundColor: "rgba(0, 0, 0, 0)",
            margin: 0,
            events: {
                load: load(),
                redraw: redraw(config, channelData)
            }
        },
        title: {
            text: ""
        },
        credits: {
            enabled: false
        },
        exporting: {
            enabled: false
        },
        subtitle: {
            text: ""
        },
        pane: {
            center: ["50%", "50%"],
            background: {
                outerRadius: "100%",
                innerRadius: "76%",
                borderWidth: 0
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
            // todo change based on settings
            max: 100,
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
    });

    mobro.utils.component.useChannelListener(config?.channel, (data) => {
        channelData.current = data;
        setOptions({
            ...options,
            series: [{
                data: [parseFloat(mobro.utils.channelData.extractValue(data))]
            }]
        })
    });

    return (
        <HighchartsReact
            highcharts={Highcharts}
            options={options}
            containerProps={{style: {width: "100%", height: "100%"}}}
        />
    );
}

export default DoughnutWidget;
