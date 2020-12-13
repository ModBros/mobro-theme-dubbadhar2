const AlignCenter = mobro.hooks.getComponent("shared.layout.align-center");
const LoadingIndicator = mobro.hooks.getComponent("shared.loading-indicator");

function Fraction(props) {
    const {
        config
    } = props;

    const dividend = mobro.utils.component.useBasicChannelListener(config?.dividend);
    const divisor = mobro.utils.component.useBasicChannelListener(config?.divisor);

    if(
        !dividend ||
        (!divisor && ! config?.divisorManual)
    ) {
        return (<AlignCenter><LoadingIndicator className={"small"}/></AlignCenter>)
    }

    const divisorDisplay = config?.divisorManual ?
        config.divisorManual :
        `${mobro.utils.channelData.extractValue(divisor)}${mobro.utils.channelData.extractRawUnit(divisor)}`;

    return (
        <span className={"w-100 d-flex align-items-center justify-content-center"}>
            {mobro.utils.channelData.extractValue(dividend)} / {divisorDisplay}
        </span>
    );
}

export default Fraction;
