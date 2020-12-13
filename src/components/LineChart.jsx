import {useState} from "react";
import {Line} from "react-chartjs-2";

const AlignCenter = mobro.hooks.getComponent("shared.layout.align-center");
const LoadingIndicator = mobro.hooks.getComponent("shared.loading-indicator");

function LineChart(props) {
    const {
        config
    } = props;

    const limit = 14;
    const [channelData, setChannelData] = useState(null);
    const [historyData, setHistoryData] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    const [labels, setLabels] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]);

    mobro.utils.component.useChannelListener(config?.channel, (data) => {
        historyData.push(mobro.utils.channelData.extractValue(data));
        labels.push(+ new Date());

        if(historyData.length > limit) {
            historyData.shift();
            labels.shift();
        }

        setChannelData(data);
        setHistoryData([...historyData]);
        setLabels([...labels]);
    });

    if (mobro.utils.helper.empty(historyData) || historyData.length < 3 || !channelData) {
        return (<AlignCenter><LoadingIndicator className={"small"}/></AlignCenter>)
    }

    const label = config?.label ? config.label : channelData.label;

    const animation = {
        duration: 750,
        easing: 'linear'
    };

    const options = {
        maintainAspectRatio: false,
        tooltips: {enabled: false},
        hover: {mode: null},
        animation: animation,
        cubicInterpolationMode: false,
        responsive: true,
        scales: {
            xAxes: [{
                display: false, // mandatory
                scaleLabel: {
                    display: true, // mandatory
                    labelString: 'Your label' // optional
                },
            }],
            yAxes: [{
                display: true,
                gridLines: {
                    display: false,
                    drawBorder: false
                },
                ticks: {
                    mirror: true,
                }
            }]
        }
    };

    const data = () => {
        return {
            labels: labels,
            datasets: [{
                lineTension: 0,
                data: historyData,
                borderColor: 'rgba(15, 150, 200, 1)',
                borderWidth: 2,
                pointRadius: '0',
                fill: false
            }]
        };
    };

    return (
        <div className={"d-flex flex-column w-100"}>
            <div className={"w-100 d-flex align-items-center justify-content-between mb-2"}>
                <span className="text-left d-block">{label} - <span>{mobro.utils.channelData.extractRawUnit(channelData)}</span></span>
                <h3 className="text-right">
                    {mobro.utils.channelData.extractValue(channelData)}
                </h3>
            </div>

            <div className={"d-flex flex-fill position-relative"}>
                <div className={"position-absolute w-100 h-100"}>
                    <Line data={data} options={options}/>
                </div>
            </div>
        </div>
    );
}

export default LineChart;