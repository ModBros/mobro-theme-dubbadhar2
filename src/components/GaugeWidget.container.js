import GaugeWidget from "theme/components/GaugeWidget";

const mapStateToProps = (state) => ({
    layoutConfig: mobro.reducers.layout.getLayoutConfig(state)
});

export default mobro.lib.component.container.create("theme.widget.doughnut", GaugeWidget)
    .connect(mapStateToProps)
    .generate();
