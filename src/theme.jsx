import React from "react";
import mobro from "mobro";
import {configureChartJS} from "theme/utils/charts";
import LineChart from "theme/components/LineChart";
import LineChartIcon from "theme/icons/chart_line.svg";
import GaugeChartIcon from "theme/icons/chart_gauge.svg";
import HardwareTitle from "theme/components/HardwareTitle";
import Fraction from "theme/components/Fraction";
import "theme/styles/theme.scss";
import Gauge from "theme/components/Gauge";
import DoughnutWidget from "theme/components/DoughnutWidget";

mobro.hooks.component("container", (Component) => (props) => {
    let style = props.style || {};

    if (props.config?.width < 600) {
        style.fontSize = "12px";
    }

    if (props.config?.width < 500) {
        style.fontSize = "10px";
    }

    if (props.config?.width < 400) {
        style.fontSize = "8px";
    }

    return (
        <Component {...props} style={style}/>
    )
});

mobro.hooks.addDataComponent({
    name: "hardware-title",
    label: "Hardware Title",
    icon: "widget.text",
    component: HardwareTitle,
    config: {
        channel: {
            info: "Choose the first data value of the hardware, which's name you want to display",
            type: "channel"
        }
    }
});

mobro.utils.icons.addIcon("widget.line_chart", LineChartIcon);
mobro.hooks.addDataComponent({
    name: "line-chart",
    label: "Line Chart",
    icon: "widget.line_chart",
    component: LineChart,
    config: {
        label: {
            type: "input",
        },
        channel: {
            type: "channel"
        }
    }
});

mobro.utils.icons.addIcon("widget.gauge", GaugeChartIcon);
mobro.hooks.addDataComponent({
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
        }
    }
});

mobro.hooks.addDataComponent({
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
        }
    }
});


mobro.hooks.addDataComponent({
    name: "fraction",
    label: "Fraction (x / y)",
    icon: "widget.data_value",
    component: Fraction,
    config: {
        dividend: {
            info: "Symbolizes the used amount (x / 14Gb)",
            type: "channel",
        },
        divisor: {
            info: "Symolizes the maximum value which can be achieved (4 / xGb)",
            type: "channel",
        },
        divisorManual: {
            info: "If you don't have a value for divisor, you can use this to set the value manually",
            type: "input"
        }
    }
});

configureChartJS();
