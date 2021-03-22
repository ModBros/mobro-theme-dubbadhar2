import mobro from "mobro";
const BaseComponent = mobro.hooks.getComponent("widget.base-component");
import Draggable from "react-draggable";

mobro.hooks.redux.mapStateToProps("entry", (event) => {
    event.mergeMapStateToProps({
        layoutConfig: mobro.reducers.layout.getLayoutConfig(event.getState()),
        layoutMode: mobro.reducers.layout.getLayoutMode(event.getState())
    });
});

mobro.hooks.redux.mapDispatchToProps("entry", (event) => {
    event.mergeMapDispatchToProps({
        layoutEdit: ({path, name, data}) => event.dispatch(mobro.actions.layout.layoutEdit({path, name, data}))
    });
});

mobro.hooks.component("entry", () => (props) => {
    const {
        layout,
        layoutConfig,
        layoutEdit,
        layoutMode
    } = props;

    const style = {};

    if (layoutConfig?.widgetFontSize) {
        style.fontSize = `${layoutConfig?.widgetFontSize}px`;
    }

    return (
        <div className={"position-relative w-100"} style={style}>
            {mobro.utils.component.renderComponents(mobro.utils.component.getComponentsFromConfig(layout), "", ({Component, type, path, config, i}) => {
                const componentStyle = {
                    width: (config?.width || 300) + "px",
                    height: (config?.height || 100) + "px",
                    zIndex: i
                }

                if (!mobro.utils.layout.isEditMode(layoutMode)) {
                    componentStyle.left = config?.coordinates?.x + "px";
                    componentStyle.top = config?.coordinates?.y + "px";
                }

                let content = (
                    <div
                        key={i.toString()}
                        className={"position-absolute d-flex"}
                        style={componentStyle}
                    >
                        <BaseComponent
                            type={type}
                            path={path}
                            config={config}
                            Component={Component}
                        />
                    </div>
                );

                if (mobro.utils.layout.isEditMode(layoutMode)) {
                    content = (
                        <Draggable
                            key={i.toString()}
                            defaultPosition={{x: config?.coordinates?.x || 0, y: config?.coordinates?.y || 0}}
                            position={{x: config?.coordinates?.x || 0, y: config?.coordinates?.y || 0}}
                            onStop={(event, data) => {
                                layoutEdit({path, name: "coordinates", data: {
                                        x: data.x,
                                        y: data.y
                                    }});
                            }}
                        >
                            {content}
                        </Draggable>
                    );
                }

                return content;
            })}
        </div>
    );
});
