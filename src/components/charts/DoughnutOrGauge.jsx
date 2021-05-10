import {useEffect, useRef, useState} from 'react';
import {backColor, maxValue} from '../../utils/charts'
import HighchartsReact from 'highcharts-react-official'
import Highcharts from 'highcharts'

function DoughnutOrGauge(props) {
    const {
        config,
        layoutConfig,
        createOptions = () => {},
        extractMaxValue = maxValue
    } = props;

    const channelData = useRef(null);
    const configRef = useRef(config);
    const layoutConfigRef = useRef(config);
    const [options, setOptions] = useState(null);
    const optionsRef = useRef(options);

    useEffect(() => {
        optionsRef.current = createOptions(configRef, layoutConfigRef, channelData);
        layoutConfigRef.current = layoutConfig;

        configRef.current = config;
        optionsRef.current.yAxis.max = extractMaxValue(configRef, channelData);
        optionsRef.current.pane.background.backgroundColor = backColor(configRef);

        setOptions({...optionsRef.current});
    }, [
        config?.label,
        config?.maxValue,
        config?.max,
        config?.warning,
        config?.danger,
        config?.widgetFontColor,
        config?.backColor,
        config?.baseColor,
        config?.warningColor,
        config?.dangerColor,
    ])

    mobro.utils.component.useChannelListener(config?.channel, (data) => {
        channelData.current = data;
        optionsRef.current.series[0].data = [parseFloat(mobro.utils.channelData.extractValue(data))];

        setOptions({...optionsRef.current});
    });

    return (
        <HighchartsReact
            highcharts={Highcharts}
            options={options}
            containerProps={{style: {width: '100%', height: '100%'}}}
        />
    );
}

export default DoughnutOrGauge;