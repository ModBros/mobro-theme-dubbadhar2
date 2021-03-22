import DoughnutWidget from "theme/components/DoughnutWidget";

const mapStateToProps = (state) => ({
    layoutConfig: mobro.reducers.layout.getLayoutConfig(state)
});

export default mobro.lib.component.container.create("theme.widget.doughnut", DoughnutWidget)
    .connect(mapStateToProps)
    .generate();
