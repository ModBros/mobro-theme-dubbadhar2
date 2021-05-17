import LineChartIcon from "theme/icons/chart_line.svg";
import LineChartWidget from "theme/components/LineChartWidget";

mobro.utils.icons.addIcon("widget.line_chart", LineChartIcon);
mobro.hooks.addWidget({
    name: "line-chart",
    label: "Line Chart",
    icon: "widget.line_chart",
    component: LineChartWidget,
    config: {
        label: {
            type: "input",
        },
        channel: {
            type: "channel"
        },
        limits: {
            type: "fieldset",
            label: "Limits",
            collapsible: true,
            collapsed: true,
            children: {
                minAndMax: {
                    type: "field-container",
                    children: [{
                        width: 6,
                        children: {
                            min: {
                                type: "numeric"
                            }
                        }
                    }, {
                        width: 6,
                        children: {
                            max: {
                                type: "numeric"
                            }
                        }
                    }]
                }
            }
        },
        lineColor: {
            type: "color"
        }
    }
});
