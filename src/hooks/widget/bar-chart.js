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
                min: {
                    type: 'numeric'
                },
                warning: {
                    type: 'numeric',
                    info: 'Threshold for yellow (warning).'
                },
                warningColor: {
                    type: 'color'
                },
                danger: {
                    type: 'numeric',
                    info: 'Threshold for red (danger).'
                },
                dangerColor: {
                    type: 'color'
                },
                max: {
                    type: 'numeric',
                    info: 'Override maximum value'
                }
            }
        },
        colors: {
            type: 'fieldset',
            label: 'Colors',
            children: {
                frontColor: {
                    type: 'color'
                },
                backColor: {
                    type: 'color'
                }
            }
        }
    }
});
