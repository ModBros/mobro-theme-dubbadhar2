import {useEffect, useRef, useState} from 'react';
import HighchartsReact from 'highcharts-react-official'
import Highcharts from 'highcharts'

const AlignCenter = mobro.hooks.getComponent("shared.layout.align-center");
const LoadingIndicator = mobro.hooks.getComponent("shared.loading-indicator");

function Chart(props) {
    const {
        config,
        layoutConfig,
        settings,
        createOptions = () => {},
        configKeyToListen = [],
        writeDataToSeries = () => {},
        adaptOptions = () => {}
    } = props;

    const channelData = useRef(null);
    const configRef = useRef(config);
    const layoutConfigRef = useRef(config);
    const [options, setOptions] = useState(null);
    const optionsRef = useRef(options);
    const chartRef = useRef(null);

    const dependencies = configKeyToListen.map(key => config?.[key]);

    useEffect(() => {
        layoutConfigRef.current = layoutConfig;
        configRef.current = config;
        optionsRef.current = createOptions(configRef, layoutConfigRef, channelData, settings, optionsRef);

        chartRef.current?.chart?.reflow();

        adaptOptions(
            channelData,
            optionsRef,
            configRef,
            layoutConfigRef,
            chartRef
        );

        setOptions({...optionsRef.current});
    }, dependencies);

    mobro.utils.component.useChannelListener(config?.channel, (data) => {
        channelData.current = data;

        writeDataToSeries(
            channelData,
            optionsRef,
            configRef,
            layoutConfigRef,
            chartRef
        );

        setOptions({...optionsRef.current});
    });

    if(!options) {
        return (
            <AlignCenter><LoadingIndicator/></AlignCenter>
        );
    }

    return (
        <HighchartsReact
            highcharts={Highcharts}
            ref={chartRef}
            options={options}
            containerProps={{style: {width: '100%', height: '100%'}}}
        />
    );
}

export default Chart;