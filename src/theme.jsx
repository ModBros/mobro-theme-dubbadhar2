import React from "react";
import mobro from "mobro";
import {configureChartJS} from "theme/utils/charts";
import LineChart from "theme/components/LineChart";
import LineChartIcon from "theme/icons/chart_line.svg";
import HardwareTitle from "theme/components/HardwareTitle";
import "theme/styles/theme.scss";

mobro.hooks.component("container", (Component) => (props) => {
    let style = props.style || {};

    if (props.config?.width < 600) {
        style.fontSize = "12px";
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
        channel: {
            type: "channel"
        }
    }
});

configureChartJS();
