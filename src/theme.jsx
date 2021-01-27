import React from "react";
import mobro from "mobro";
import {configureChartJS} from "theme/utils/charts";
import LineChart from "theme/components/LineChart";
import LineChartIcon from "theme/icons/chart_line.svg";
import GaugeChartIcon from "theme/icons/chart_gauge.svg";
import HardwareTitle from "theme/components/HardwareTitle";
import Fraction from "theme/components/Fraction";
import "theme/styles/theme.scss";
import Gauge from "theme/components/Gauge";
import DoughnutWidget from "theme/components/DoughnutWidget";
import Draggable from "react-draggable";

const BaseComponent = mobro.hooks.getComponent("widget.base-component");

mobro.hooks.globalConfig((event) => {
    event.setEditConfig({
        tabs: {
            type: "tabs",
            children: [{
                label: "General",
                children: event.getEditConfig() // original edit config in general tab
            }, {
                label: "Widgets",
                children: {
                    widgetFontSize: {
                        type: "numeric"
                    },
                    widgetPadding: {
                        type: "numeric"
                    },
                    widgetFontColor: {
                        type: "color"
                    },
                    widgetBackgroundColor: {
                        type: "color"
                    },
                    disableWidgetBorder: {
                        type: "checkbox"
                    }
                }
            }]
        }
    });
});

mobro.hooks.addGlobalEditModificator((config) => ({
    tabs: {
        type: "tabs",
        children: [{
            label: "General",
            children: {
                positioning: {
                    type: "fieldset",
                    label: "Positioning",
                    children: {
                        coordinates: {
                            type: "coordinates"
                        },

                        widthAndHeight: {
                            type: "field-container",
                            children: [{
                                width: 6,
                                children: {
                                    width: {
                                        type: "numeric",
                                        min: 0
                                    }
                                }
                            }, {
                                width: 6,
                                children: {
                                    height: {
                                        type: "numeric",
                                        min: 0
                                    }
                                }
                            }]
                        }
                    }
                },

                ...config
            }
        }, {
            label: "Styling",
            children: {
                widgetFontSize: {
                    type: "numeric"
                },

                widgetPadding: {
                    type: "numeric"
                },

                widgetFontColor: {
                    type: "color"
                },

                widgetBackgroundColor: {
                    type: "color"
                }
            }
        }]
    }
}));

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

// map the layoutConfig prop from the redux store to the base component that surrounds every widget
mobro.hooks.redux.mapStateToProps("widget.base-component", (event) => {
    event.mergeMapStateToProps({
        layoutConfig: mobro.reducers.layout.getLayoutConfig(event.getState())
    });
});

// override the base component to add the background color and border option from the global config
mobro.hooks.component("widget.base-component", () => (props) => {
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
    const baseClassNames = !renderConfig?.ignoreBaseClassNames ? "component card" : "";

    let defaultClasses = "";
    let doSelectComponent = mobro.utils.helper.noop;
    let toggleEditSidebar = mobro.utils.helper.noop;

    if (mobro.utils.layout.isEditMode(layoutMode)) {
        defaultClasses = "clickable";
        doSelectComponent = () => selectComponent(path);
        toggleEditSidebar = mobro.utils.component.withEditSidebar({path, type, config});
    }

    const style = {};
    const widgetBackgroundColor = config?.widgetBackgroundColor || layoutConfig?.widgetBackgroundColor;
    const widgetFontSize = config?.widgetFontSize
    const widgetFontColor = config?.widgetFontColor || layoutConfig?.widgetFontColor;
    const widgetPadding = config?.widgetPadding || layoutConfig?.widgetPadding;

    if (widgetBackgroundColor) {
        style.backgroundColor = `rgba(${widgetBackgroundColor?.r}, ${widgetBackgroundColor?.g}, ${widgetBackgroundColor?.b}, ${widgetBackgroundColor?.a})`
    }

    if (widgetFontColor) {
        style.color = `rgba(${widgetFontColor?.r}, ${widgetFontColor?.g}, ${widgetFontColor?.b}, ${widgetFontColor?.a})`
    }

    if (widgetFontSize) {
        style.fontSize = `${widgetFontSize}px`;
    }

    if (layoutConfig?.disableWidgetBorder) {
        defaultClasses += " border-0";
    }

    if (widgetPadding) {
        style.padding = `${widgetPadding}px`;
    }

    return (
        <div
            className={`${defaultClasses} ${baseClassNames} ${renderConfig?.baseClassNames} ${selectedComponent === path ? "selection-indicator" : ""}`}
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

mobro.hooks.addWidget({
    name: "hardware-title",
    label: "Hardware Title",
    icon: "widget.text",
    component: HardwareTitle,
    config: {
        channel: {
            info: "Choose the first data value of the hardware, which's name you want to display",
            type: "channel"
        }
    }
});

mobro.utils.icons.addIcon("widget.line_chart", LineChartIcon);
mobro.hooks.addWidget({
    name: "line-chart",
    label: "Line Chart",
    icon: "widget.line_chart",
    component: LineChart,
    config: {
        label: {
            type: "input",
        },
        channel: {
            type: "channel"
        },
        limits: {
            type: "fieldset",
            label: "Limits",
            collapsible: true,
            collapsed: true,
            children: {
                minAndMax: {
                    type: "field-container",
                    children: [{
                        width: 6,
                        children: {
                            min: {
                                type: "numeric"
                            }
                        }
                    }, {
                        width: 6,
                        children: {
                            max: {
                                type: "numeric"
                            }
                        }
                    }]
                }
            }
        },
        lineColor: {
            type: "color"
        }
    }
});

mobro.utils.icons.addIcon("widget.gauge", GaugeChartIcon);
mobro.hooks.addWidget({
    name: "gauge",
    label: "Gauge",
    icon: "widget.gauge",
    component: Gauge,
    config: {
        label: {
            type: "input"
        },
        channel: {
            type: "channel"
        },
        limits: {
            type: "fieldset",
            label: "Limits",
            collapsible: true,
            collapsed: true,
            children: {
                baseColor: {
                    type: "color"
                },
                warning: {
                    type: "numeric",
                    info: "Threshold for yellow (warning)."
                },
                warningColor: {
                    type: "color"
                },
                danger: {
                    type: "numeric",
                    info: "Threshold for red (danger)."
                },
                dangerColor: {
                    type: "color"
                },
                max: {
                    type: "numeric",
                    info: "Override maximum value"
                }
            }
        },
        backColor: {
            type: "color"
        }
    }
});

mobro.hooks.addWidget({
    name: "doughnut",
    label: "Doughnut",
    icon: "widget.gauge",
    component: DoughnutWidget,
    config: {
        label: {
            type: "input"
        },
        channel: {
            type: "channel"
        },
        maxValue: {
            type: "numeric"
        },
        colors: {
            type: "fieldset",
            label: "Colors",
            children: {
                frontColor: {
                    type: "color"
                },
                backColor: {
                    type: "color"
                }
            }
        }
    }
});


mobro.hooks.addWidget({
    name: "fraction",
    label: "Fraction (x / y)",
    icon: "widget.data_value",
    component: Fraction,
    config: {
        dividend: {
            info: "Symbolizes the used amount (x / 14Gb)",
            type: "channel",
        },
        divisor: {
            info: "Symolizes the maximum value which can be achieved (4 / xGb)",
            type: "channel",
        },
        divisorManual: {
            info: "If you don't have a value for divisor, you can use this to set the value manually",
            type: "input"
        }
    }
});

configureChartJS();
