import mobro from "mobro";
import DoughnutWidget from "theme/components/DoughnutWidget.container";

mobro.hooks.addWidget({
    name: "doughnut",
    label: "Doughnut",
    icon: "widget.gauge",
    component: DoughnutWidget,
    config: {
        label: {
            type: "input"
        },
        channel: {
            type: "channel"
        },
        maxValue: {
            type: "numeric"
        },
        colors: {
            type: "fieldset",
            label: "Colors",
            children: {
                frontColor: {
                    type: "color"
                },
                backColor: {
                    type: "color"
                }
            }
        }
    }
});
