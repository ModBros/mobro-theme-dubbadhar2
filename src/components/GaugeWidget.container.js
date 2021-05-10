import GaugeWidget from "theme/components/GaugeWidget";

const mapStateToProps = (state) => ({
    layoutConfig: mobro.reducers.layout.getLayoutConfig(state),
    settings: mobro.reducers.settings.getSettings(state)
});

export default mobro.lib.component.container.create("theme.widget.doughnut", GaugeWidget)
    .connect(mapStateToProps)
    .generate();
