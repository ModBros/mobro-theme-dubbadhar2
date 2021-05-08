import {useState, useRef, useEffect} from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import {colorToRgba} from "theme/utils/color";

const AlignCenter = mobro.hooks.getComponent("shared.layout.align-center");
const LoadingIndicator = mobro.hooks.getComponent("shared.loading-indicator");

const defaultFrontColor = "rgb(0 255 255)";
const defaultBackColor = "rgba(100, 100, 100, 0.5)";
const defaultFontColor = "white";

function basicTextFontColor(configRef, layoutConfigRef) {
    return colorToRgba(configRef.current.widgetFontColor, colorToRgba(layoutConfigRef.current.widgetFontColor, defaultFontColor));
}

function frontColor(configRef) {
    return colorToRgba(configRef.current.frontColor, defaultFrontColor);
}

function backColor(configRef) {
    return colorToRgba(configRef.current.backColor, defaultBackColor);
}

function maxValue(configRef, channelData) {
    if (configRef.current.maxValue) {
        return parseInt(configRef.current.maxValue)
    }

    if (mobro.utils.channelData.isPercentageData(channelData.current)) {
        return 100;
    }

    if (channelData.current) {
        return mobro.utils.channelData.extractRawMaxValue(channelData.current)
    }

    return 100;
}

function load(configRef, layoutConfigRef) {
    return function () {
        this.widgetLabel = this.renderer.text("")
            .attr({
                align: "center",
                zIndex: 1
            })
            .css({
                color: basicTextFontColor(configRef, layoutConfigRef)
            })
            .add()

        this.widgetValue = this.renderer.text("")
            .attr({
                align: "center",
                zIndex: 2
            })
            .css({
                color: frontColor(configRef)
            })
            .add();

        this.widgetUnit = this.renderer.text("")
            .attr({
                align: "center",
                zIndex: 1
            })
            .css({
                color: basicTextFontColor(configRef, layoutConfigRef)
            })
            .add()
    }
}

function redraw(configRef, layoutConfigRef, channelData) {
    return function () {
        if (!channelData.current) {
            return;
        }

        const centerX = this.plotWidth / 2 + this.plotLeft;
        const centerY = this.plotHeight / 2 + this.plotTop;
        const valueFontSize = this.plotWidth / 6
        const labelFontSize = valueFontSize / 2.5;

        this.widgetLabel
            .attr({
                text: configRef.current.label ?? channelData.current?.label,
                x: centerX,
                y: centerY - (this.plotHeight / 6)
            })
            .css({
                color: basicTextFontColor(configRef, layoutConfigRef),
                fontSize: `${labelFontSize}px`
            });

        this.widgetValue
            .attr({
                text: mobro.utils.channelData.extractValue(channelData.current),
                x: centerX,
                y: centerY + (valueFontSize / 3)
            })
            .css({
                color: frontColor(configRef),
                fontSize: `${valueFontSize}px`
            });

        this.widgetUnit
            .attr({
                text: mobro.utils.channelData.extractRawUnit(channelData.current),
                x: centerX,
                y: centerY + (valueFontSize / 3) + (this.plotHeight / 6)
            })
            .css({
                color: basicTextFontColor(configRef, layoutConfigRef),
                fontSize: `${labelFontSize}px`
            });
    }
}

function createOptions(config, layoutConfig, channelData) {
    return {
        chart: {
            type: 'solidgauge',
            backgroundColor: "rgba(0, 0, 0, 0)",
            margin: [0, 0, 0, 0],
            spacing: [0, 0, 0, 0],
            events: {
                load: load(config, layoutConfig),
                redraw: redraw(config, layoutConfig, channelData)
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
            text: ""
        },
        pane: {
            center: ["50%", "50%"],
            size: "100%",
            startAngle: -145,
            endAngle: 145,
            background: {
                backgroundColor: backColor(config),
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
            max: maxValue(config, channelData),
            visible: false,
        },
        yAxis: {
            stops: [
                [0.5, 'green'], // green
                [0.6, 'yellow'], // yellow
                [0.9, '#DF5353'] // red
            ],
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
                {thickness: 5, from: 0, to: 60, color: 'green'},
                {thickness: 5, from: 60, to: 80, color: 'yellow'},
                {thickness: 5, from: 80, to: 100, color: 'red'}
            ]
        },
        plotOptions: {
            solidgauge: {
                innerRadius: "70%",
                radius: "90%",
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
        series: [
            {
                data: [80]
            }
        ]
    }
}

function GaugeWidget(props) {
    const {
        config,
        layoutConfig
    } = props;

    const channelData = useRef(null);
    const configRef = useRef(config);
    const layoutConfigRef = useRef(config);
    const [options, setOptions] = useState(createOptions(configRef, layoutConfigRef, channelData));
    const optionsRef = useRef(options);

    useEffect(() => {
        configRef.current = config;
        optionsRef.current.yAxis.max = maxValue(configRef, channelData);
        optionsRef.current.pane.background.backgroundColor = backColor(configRef);
        optionsRef.current.colors = [frontColor(configRef)];

        setOptions({...optionsRef.current});
    }, [config?.maxValue, config?.widgetFontColor, config?.frontColor, config?.backColor])

    useEffect(() => {
        layoutConfigRef.current = layoutConfig;
    }, [])

    mobro.utils.component.useChannelListener(config?.channel, (data) => {
        channelData.current = data;
        optionsRef.current.series[0].data = [parseFloat(mobro.utils.channelData.extractValue(data))];

        setOptions({...optionsRef.current});
    });

    return (
        <HighchartsReact
            highcharts={Highcharts}
            options={options}
            containerProps={{style: {width: "100%", height: "100%"}}}
        />
    );
}

export default GaugeWidget;
