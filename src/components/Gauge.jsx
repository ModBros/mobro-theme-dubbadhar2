import {Doughnut} from "react-chartjs-2";

const AlignCenter = mobro.hooks.getComponent("shared.layout.align-center");
const LoadingIndicator = mobro.hooks.getComponent("shared.loading-indicator");

const mapStateToProps = (state) => ({
    settings: mobro.reducers.settings.getSettings(state)
});

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
        settings = {}
    } = props;

    const channelData = mobro.utils.component.useBasicChannelListener(config?.channel);

    if (!channelData) {
        return (<AlignCenter><LoadingIndicator className={"small"}/></AlignCenter>)
    }

    const minMaxSettings = findMinMaxSettings(channelData, settings);
    const max = Math.max(mobro.utils.channelData.extractValue(channelData, true, mobro.utils.channelData.extractRawMaxValue), minMaxSettings.max, defaultSettings.max);

    const options = {
        responsive: true,
        cutoutPercentage: 75,
        circumference: 1.6 * Math.PI,
        rotation: -(1.3 * Math.PI),
        breakpoints: {
            min: minMaxSettings.min,
            orange: minMaxSettings.warning,
            red: minMaxSettings.critical,
            max: max
        }
    }

    const label = config?.label ? config.label : channelData.label;

    const data = (canvas) => {
        if (canvas.getAttribute("data-name") !== label) {
            canvas.setAttribute("data-name", label);
        }

        if (canvas.getAttribute("data-unit") !== channelData.unit) {
            canvas.setAttribute("data-unit", channelData.unit);
        }

        if (!canvas.getAttribute("data-border")) {
            canvas.setAttribute("data-border", "margins");
        }

        return {
            datasets: [{
                data: [
                    mobro.utils.channelData.extractValue(channelData),
                    mobro.utils.channelData.extractValue(channelData) - max
                ],
                backgroundColor: [
                    'rgba(0, 255, 30, 1)',
                    'rgb(80,110,120)',
                ],
                borderWidth: 0
            }]
        }
    };

    return (
        <Doughnut width={"100%"} height={"70%"} data={data} options={options}/>
    );
}

export default mobro.lib.component.container.create("theme.gauge", Gauge)
    .connect(mapStateToProps)
    .generate();
