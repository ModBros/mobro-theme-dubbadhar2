import mobro from 'mobro';

mobro.hooks.addGlobalEditModificator((config) => ({
    tabs: {
        type: 'tabs',
        children: [{
            label: 'General',
            children: {
                positioning: {
                    type: 'fieldset',
                    label: 'Positioning',
                    children: {
                        coordinates: {
                            type: 'coordinates'
                        },

                        widthAndHeight: {
                            type: 'field-container',
                            children: [{
                                width: 6,
                                children: {
                                    width: {
                                        type: 'numeric',
                                        min: 0
                                    }
                                }
                            }, {
                                width: 6,
                                children: {
                                    height: {
                                        type: 'numeric',
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
            label: 'Styling',
            children: {
                widgetPadding: {
                    type: 'numeric'
                },

                widgetFontSize: {
                    type: 'numeric'
                },

                widgetFontFamily: {
                    type: 'font'
                },

                widgetFontColor: {
                    type: 'color'
                },

                widgetBackgroundColor: {
                    type: 'color'
                }
            }
        }]
    }
}));
