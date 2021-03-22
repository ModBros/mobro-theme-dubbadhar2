import mobro from "mobro";
import GaugeChartIcon from "theme/icons/chart_gauge.svg";
import Gauge from "theme/components/Gauge";

mobro.utils.icons.addIcon("widget.gauge", GaugeChartIcon);
mobro.hooks.addWidget({
    name: "gauge",
    label: "Gauge",
    icon: "widget.gauge",
    component: Gauge,
    config: {
        label: {
            type: "input"
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
                baseColor: {
                    type: "color"
                },
                warning: {
                    type: "numeric",
                    info: "Threshold for yellow (warning)."
                },
                warningColor: {
                    type: "color"
                },
                danger: {
                    type: "numeric",
                    info: "Threshold for red (danger)."
                },
                dangerColor: {
                    type: "color"
                },
                max: {
                    type: "numeric",
                    info: "Override maximum value"
                }
            }
        },
        backColor: {
            type: "color"
        }
    }
});
