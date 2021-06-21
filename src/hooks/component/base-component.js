import mobro from 'mobro';
import {colorToRgba} from '../../utils/color'
import {
    getWidgetBackgroundColor,
    getWidgetFontColor,
    getWidgetFontFamily,
    getWidgetFontSize,
    getWidgetPadding
} from '../../utils/widget'

// map the layoutConfig prop from the redux store to the base component that surrounds every widget
mobro.hooks.redux.mapStateToProps('widget.base-component', (event) => {
    event.mergeMapStateToProps({
        layoutConfig: mobro.reducers.layout.getLayoutConfig(event.getState())
    });
});

// override the base component to add the background color and border option from the global config
mobro.hooks.component('widget.base-component', () => (props) => {
    const {
        type,
        path,
        config,
        Component,
        layoutMode,
        layoutConfig,
        selectedComponent,
        selectComponent = noop
    } = props;

    const renderConfig = mobro.hooks.getWidgetRenderConfig(type);
    const baseClassNames = !renderConfig?.ignoreBaseClassNames ? 'component card' : '';

    let defaultClasses = '';
    let doSelectComponent = mobro.utils.helper.noop;
    let toggleEditSidebar = mobro.utils.helper.noop;

    if (mobro.utils.layout.isEditMode(layoutMode)) {
        defaultClasses = 'clickable';
        doSelectComponent = () => selectComponent(path);
        toggleEditSidebar = mobro.utils.component.withEditSidebar({path, type, config});
    }

    const style = {};
    const widgetBackgroundColor = getWidgetBackgroundColor(config, layoutConfig);
    const widgetFontSize = getWidgetFontSize(config, layoutConfig)
    const widgetFontColor = getWidgetFontColor(config, layoutConfig);
    const widgetPadding = getWidgetPadding(config, layoutConfig);
    const widgetFontFamily = getWidgetFontFamily(config, layoutConfig);

    if (widgetBackgroundColor) {
        style.backgroundColor = colorToRgba(widgetBackgroundColor);
    }

    if (widgetFontColor) {
        style.color = colorToRgba(widgetFontColor);
    }

    if (widgetFontSize) {
        style.fontSize = `${widgetFontSize}px`;
    }

    if (widgetFontFamily) {
        style.fontFamily = widgetFontFamily;
    }

    if (layoutConfig?.disableWidgetBorder) {
        defaultClasses += ' border-0';
    }

    if (widgetPadding) {
        style.padding = `${widgetPadding}px`;
    }

    return (
        <div
            className={`${defaultClasses} ${baseClassNames} ${renderConfig?.baseClassNames} ${selectedComponent === path ? 'selection-indicator' : ''}`}
            onClick={doSelectComponent}
            onDoubleClick={toggleEditSidebar}
            style={style}
        >
            <div className="component-body card-body position-relative">
                <Component path={path} config={config}/>
            </div>
        </div>
    );
});
