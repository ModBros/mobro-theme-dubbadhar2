import {backColor, maxValue} from '../../utils/charts'
import Chart from './Chart.container'

function DoughnutOrGauge(props) {
    const {
        extractMaxValue = maxValue,
        writeDataToSeries = (channelDataRef, optionsRef, configRef) => {},
        ...chartProps
    } = props;

    return (
        <Chart
            {...chartProps}
            configKeyToListen={[
                'label',
                'maxValue',
                'max',
                'warning',
                'danger',
                'widgetFontColor',
                'backColor',
                'baseColor',
                'warningColor',
                'dangerColor',
                'widgetFontFamily'
            ]}
            writeDataToSeries={(channelDataRef, optionsRef, configRef) => {
                optionsRef.current.series[0].data = [parseFloat(mobro.utils.channelData.extractValue(channelDataRef.current))];

                writeDataToSeries(channelDataRef, optionsRef, configRef);
            }}
            adaptOptions={(channelDataRef, optionsRef, configRef) => {
                optionsRef.current.yAxis.max = extractMaxValue(configRef, channelDataRef);
                optionsRef.current.pane.background.backgroundColor = backColor(configRef);
            }}
        />
    );
}

export default DoughnutOrGauge;