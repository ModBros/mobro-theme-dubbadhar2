import BarChartIcon from 'theme/icons/bar_chart.svg';
import BarChartWidget from '../../components/BarChartWidget'

mobro.utils.icons.addIcon('widget.bar_chart', BarChartIcon);
mobro.hooks.addWidget({
    name: 'bar-chart',
    label: 'Bar Chart',
    icon: 'widget.bar_chart',
    component: BarChartWidget,
    config: {
        channel: {
            type: 'channel'
        },
        limits: {
            type: 'fieldset',
            label: 'Limits',
            collapsible: true,
            collapsed: true,
            children: {
                minAndMax: {
                    type: 'field-container',
                    children: [{
                        width: 6,
                        children: {
                            min: {
                                type: 'numeric'
                            }
                        }
                    }, {
                        width: 6,
                        children: {
                            max: {
                                type: 'numeric'
                            }
                        }
                    }]
                }
            }
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
