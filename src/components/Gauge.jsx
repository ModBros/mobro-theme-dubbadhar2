import {Doughnut} from "react-chartjs-2";

const AlignCenter = mobro.hooks.getComponent("shared.layout.align-center");
const LoadingIndicator = mobro.hooks.getComponent("shared.loading-indicator");

const defaultSettings = {
    min: 0,
    warning: 65,
    critical: 80,
    max: 100
};

function findMinMaxSettings(channelData, settings) {
    let minMaxSettings = defaultSettings;

    if (mobro.enum.channelData.SENSOR_TYPE_TEMPERATURE !== channelData.sensortype) {
        return minMaxSettings;
    }

    settings.hardware.temperature.forEach((item) => {
        if (item.hardwaretype === channelData?._hardware?.hardwaretype) {
            minMaxSettings = item;
        }
    });

    return minMaxSettings;
}

function Gauge(props) {
    const {
        config,
        layoutConfig,
        settings = {}
    } = props;

    const channelData = mobro.utils.component.useBasicChannelListener(config?.channel);

    if (!channelData) {
        return (<AlignCenter><LoadingIndicator className={"small"}/></AlignCenter>)
    }

    const minMaxSettings = findMinMaxSettings(channelData, settings);
    const max = config.max || Math.max(mobro.utils.channelData.extractValue(channelData, true, mobro.utils.channelData.extractRawMaxValue), minMaxSettings.max, defaultSettings.max);

    const options = {
        responsive: true,
        cutoutPercentage: 75,
        circumference: 1.6 * Math.PI,
        rotation: -(1.3 * Math.PI),
        breakpoints: {
            min: parseInt(minMaxSettings.min),
            orange: parseInt(config.warning || minMaxSettings.warning),
            red: parseInt(config.danger || minMaxSettings.critical),
            max: parseInt(max)
        }
    }

    const widgetFontColor = config?.widgetFontColor || layoutConfig?.widgetFontColor;

    const label = config?.label ? config.label : channelData.label;
    const labelColor = !widgetFontColor ? "#FFF" : `rgba(${widgetFontColor.r}, ${widgetFontColor.g}, ${widgetFontColor.b}, ${widgetFontColor.a})`;
    const baseColor = !config?.baseColor ? 'rgba(0, 255, 30, 1)' : `rgba(${config.baseColor.r}, ${config.baseColor.g}, ${config.baseColor.b}, ${config.baseColor.a})`;
    const backColor = !config?.backColor ? 'rgb(80,110,120)' : `rgba(${config.backColor.r}, ${config.backColor.g}, ${config.backColor.b}, ${config.backColor.a})`;
    const warningColor = !config?.warningColor ? 'rgba(255, 255, 30, 1)' : `rgba(${config.warningColor.r}, ${config.warningColor.g}, ${config.warningColor.b}, ${config.warningColor.a})`;
    const dangerColor = !config?.dangerColor ? 'rgba(255, 0, 0, 1)' : `rgba(${config.dangerColor.r}, ${config.dangerColor.g}, ${config.dangerColor.b}, ${config.dangerColor.a})`;

    const data = (canvas) => {
        if (canvas.getAttribute("data-name") !== label) {
            canvas.setAttribute("data-name", label);
        }

        if (canvas.getAttribute("data-max") !== max) {
            canvas.setAttribute("data-max", max);
        }

        if (canvas.getAttribute("data-unit") !== channelData.unit) {
            canvas.setAttribute("data-unit", channelData.unit);
        }

        if (!canvas.getAttribute("data-border")) {
            canvas.setAttribute("data-border", "margins");
        }

        if (canvas.getAttribute("data-label-color") !== labelColor) {
            canvas.setAttribute("data-label-color", labelColor);
        }

        const value = mobro.utils.channelData.extractValue(channelData);
        let frontColor = !config?.baseColor ? baseColor : `rgba(${config.baseColor.r}, ${config.baseColor.g}, ${config.baseColor.b}, ${config.baseColor.a})`;

        if (value >= options.breakpoints.orange) {
            frontColor = warningColor;
        }

        if (value > options.breakpoints.red) {
            frontColor = dangerColor;
        }

        options.breakpointColors = {
            base: baseColor,
            warning: warningColor,
            danger: dangerColor
        };

        return {
            datasets: [{
                data: [
                    value,
                    value - max
                ],
                backgroundColor: [
                    frontColor,
                    backColor,
                ],
                borderWidth: 0
            }]
        }
    };

    return (
        <Doughnut width={"100%"} height={"70%"} data={data} options={options}/>
    );
}

const mapStateToProps = (state) => ({
    layoutConfig: mobro.reducers.layout.getLayoutConfig(state),
    settings: mobro.reducers.settings.getSettings(state)
});

export default mobro.lib.component.container.create("theme.widget.doughnut", Gauge)
    .connect(mapStateToProps)
    .generate();
