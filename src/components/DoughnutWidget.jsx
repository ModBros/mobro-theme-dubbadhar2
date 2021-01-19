import {Doughnut} from "react-chartjs-2";

const AlignCenter = mobro.hooks.getComponent("shared.layout.align-center");
const LoadingIndicator = mobro.hooks.getComponent("shared.loading-indicator");

function DoughnutWidget(props) {
    const {
        config,
        layoutConfig
    } = props;

    const channelData = mobro.utils.component.useBasicChannelListener(config?.channel);

    if (!channelData) {
        return (<AlignCenter><LoadingIndicator className={"small"}/></AlignCenter>)
    }

    const options = {
        cutoutPercentage: 75
    }

    const label = config?.label ? config.label : channelData.label;
    let max = mobro.utils.channelData.isPercentageData(channelData) ?
        100 :
        mobro.utils.channelData.extractValue(channelData, true, mobro.utils.channelData.extractRawMaxValue);

    if (config?.maxValue) {
        max = config?.maxValue;
    }

    const widgetFontColor = config?.widgetFontColor || layoutConfig?.widgetFontColor;

    const frontColor = !config?.frontColor ? 'rgba(0, 255, 255, 1)' : `rgba(${config.frontColor.r}, ${config.frontColor.g}, ${config.frontColor.b}, ${config.frontColor.a})`;
    const backColor = !config?.backColor ? 'rgb(80,110,120)' : `rgba(${config.backColor.r}, ${config.backColor.g}, ${config.backColor.b}, ${config.backColor.a})`;
    const labelColor = !widgetFontColor ? "#FFF" : `rgba(${widgetFontColor.r}, ${widgetFontColor.g}, ${widgetFontColor.b}, ${widgetFontColor.a})`;

    const data = (canvas) => {
        if (canvas.getAttribute("data-name") !== label) {
            canvas.setAttribute("data-name", label);
        }

        if (canvas.getAttribute("data-unit") !== channelData.unit) {
            canvas.setAttribute("data-unit", channelData.unit);
        }

        if (canvas.getAttribute("data-label-color") !== labelColor) {
            canvas.setAttribute("data-label-color", labelColor);
        }

        return {
            datasets: [{
                data: [
                    mobro.utils.channelData.extractValue(channelData),
                    mobro.utils.channelData.extractValue(channelData) - max
                ],
                backgroundColor: [
                    frontColor,
                    backColor,
                ],
                borderWidth: 0
            }]
        }
    }

    return (
        <Doughnut width={"100%"} height={"100%"} options={options} data={data}/>
    );
}

const mapStateToProps = (state) => ({
    layoutConfig: mobro.reducers.layout.getLayoutConfig(state)
});

export default mobro.lib.component.container.create("theme.widget.doughnut", DoughnutWidget)
    .connect(mapStateToProps)
    .generate();
