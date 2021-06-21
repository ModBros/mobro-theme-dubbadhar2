import mobro from "mobro";

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
                    widgetPadding: {
                        type: "numeric"
                    },

                    widgetFontSize: {
                        type: "numeric"
                    },

                    widgetFontFamily: {
                        type: "font"
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
