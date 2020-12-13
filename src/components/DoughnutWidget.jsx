import {Doughnut} from "react-chartjs-2";

const AlignCenter = mobro.hooks.getComponent("shared.layout.align-center");
const LoadingIndicator = mobro.hooks.getComponent("shared.loading-indicator");

function DoughnutWidget(props) {
    const {
        config
    } = props;

    const channelData = mobro.utils.component.useBasicChannelListener(config?.channel);

    if (!channelData) {
        return (<AlignCenter><LoadingIndicator className={"small"}/></AlignCenter>)
    }

    const options = {
        cutoutPercentage: 75
    }

    const label = config?.label ? config.label : channelData.label;
    const max = mobro.utils.channelData.isPercentageData(channelData) ?
        100 :
        mobro.utils.channelData.extractValue(channelData, true, mobro.utils.channelData.extractRawMaxValue);

    const data = (canvas) => {
        if (canvas.getAttribute("data-name") !== label) {
            canvas.setAttribute("data-name", label);
        }

        if (canvas.getAttribute("data-unit") !== channelData.unit) {
            canvas.setAttribute("data-unit", channelData.unit);
        }

        return {
            datasets: [{
                data: [
                    mobro.utils.channelData.extractValue(channelData),
                    mobro.utils.channelData.extractValue(channelData) - max
                ],
                backgroundColor: [
                    'rgba(0, 255, 255, 1)',
                    'rgb(80,110,120)',
                ],
                borderWidth: 0
            }]
        }
    }

    return (
        <Doughnut width={"100%"} height={"100%"} options={options} data={data}/>
    );
}

export default DoughnutWidget;
