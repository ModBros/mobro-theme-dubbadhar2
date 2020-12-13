const AlignCenter = mobro.hooks.getComponent("shared.layout.align-center");
const LoadingIndicator = mobro.hooks.getComponent("shared.loading-indicator");

function HardwareTitle(props) {
    const {
        config
    } = props;

    const channelData = mobro.utils.component.useBasicChannelListener(config?.channel);

    if (!channelData) {
        return (<AlignCenter><LoadingIndicator className={"small"}/></AlignCenter>);
    }

    return (
        <span className={"w-100 d-flex align-items-center justify-content-center"}>
            {channelData._hardware.title}
        </span>
    );
}

export default HardwareTitle;
