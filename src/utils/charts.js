import {colorToRgba} from './color'
import {getWidgetFontFamily} from './widget'

export const defaultFontColor = 'white';
export const defaultFrontColor = 'rgb(0 255 255)';
export const defaultBackColor = '#506e78';

export function basicTextColor(configRef, layoutConfigRef) {
    return colorToRgba(configRef.current.widgetFontColor, colorToRgba(layoutConfigRef.current.widgetFontColor, defaultFontColor));
}

export function valueTextColor(configRef) {
    return colorToRgba(configRef.current.frontColor, defaultFrontColor);
}

export function frontColor(configRef) {
    return valueTextColor(configRef);
}

export function backColor(configRef) {
    return colorToRgba(configRef.current.backColor, defaultBackColor);
}

export function maxValue(configRef, channelData, key = 'max', fallback = 100) {
    if (key && configRef.current?.[key]) {
        return parseInt(configRef.current[key])
    }

    if (channelData?.current) {
        if (mobro.utils.channelData.isPercentageData(channelData.current)) {
            return 100;
        }

        return mobro.utils.channelData.extractRawMaxValue(channelData.current)
    }

    return fallback;
}

export function minValue(configRef, key = 'min', fallback) {
    if (key && configRef.current?.[key]) {
        return parseInt(configRef.current[key])
    }

    return fallback;
}

export function redrawDoughnutOrGauge(
    configRef,
    layoutConfigRef,
    channelData,
    basicTextFontColor = basicTextColor,
    valueTextFontColor = valueTextColor
) {
    return function () {
        if (!channelData.current) {
            return;
        }

        const centerX = this.plotWidth / 2 + this.plotLeft;
        const centerY = this.plotHeight / 2 + this.plotTop;
        const valueFontSize = Math.min(this.plotWidth, this.plotHeight) / 5
        const labelFontSize = valueFontSize / 2.5;

        this.widgetLabel
            .attr({
                text: configRef.current.label ?? channelData.current?.label,
                x: centerX,
                y: centerY - (this.plotHeight / 6)
            })
            .css({
                color: basicTextFontColor(configRef, layoutConfigRef),
                fontSize: `${labelFontSize}px`,
                fontFamily: getWidgetFontFamily(configRef.current, layoutConfigRef.current)
            });

        this.widgetValue
            .attr({
                text: mobro.utils.channelData.extractValue(channelData.current),
                x: centerX,
                y: centerY + (valueFontSize / 3)
            })
            .css({
                color: valueTextFontColor(configRef),
                fontSize: `${valueFontSize}px`,
                fontFamily: getWidgetFontFamily(configRef.current, layoutConfigRef.current)
            });

        this.widgetUnit
            .attr({
                text: mobro.utils.channelData.extractRawUnit(channelData.current),
                x: centerX,
                y: centerY + (valueFontSize / 3) + (this.plotHeight / 6)
            })
            .css({
                color: basicTextFontColor(configRef, layoutConfigRef),
                fontSize: `${labelFontSize}px`,
                fontFamily: getWidgetFontFamily(configRef.current, layoutConfigRef.current)
            });
    }
}

export function loadDoughnutOrGauge(
    configRef,
    layoutConfigRef,
    basicTextFontColor = basicTextColor,
    valueTextFontColor = valueTextColor
) {
    return function () {
        this.widgetLabel = this.renderer.text('')
            .attr({
                align: 'center',
                zIndex: 1
            })
            .css({
                color: basicTextFontColor(configRef, layoutConfigRef),
                fontFamily: getWidgetFontFamily(configRef.current, layoutConfigRef.current)
            })
            .add()

        this.widgetValue = this.renderer.text('')
            .attr({
                align: 'center',
                zIndex: 2
            })
            .css({
                color: valueTextFontColor(configRef),
                fontFamily: getWidgetFontFamily(configRef.current, layoutConfigRef.current)
            })
            .add();

        this.widgetUnit = this.renderer.text('')
            .attr({
                align: 'center',
                zIndex: 1
            })
            .css({
                color: basicTextFontColor(configRef, layoutConfigRef),
                fontFamily: getWidgetFontFamily(configRef.current, layoutConfigRef.current)
            })
            .add()
    }
}

export function configureChartJS() {

    Chart.defaults.global.legend.display = false;
    Chart.defaults.global.tooltips.enabled = false;
    Chart.defaults.global.hover.mode = null;

    Chart.pluginService.register({
        beforeDraw: function (chart) {
            var width = chart.chart.width,
                height = chart.chart.height,
                ctx = chart.chart.ctx,
                type = chart.config.type;

            if (type == 'line') {
                let min = Math.min(...chart.config.data?.datasets[0]?.data);
                let max = Math.max(...chart.config.data?.datasets[0]?.data);

                if (
                    chart.canvas.getAttribute('data-min') &&
                    chart.canvas.getAttribute('data-min') !== '' &&
                    chart.canvas.getAttribute('data-min') != null &&
                    chart.canvas.getAttribute('data-min') !== 'undefined'
                ) {
                    min = chart.canvas.getAttribute('data-min');
                }

                if (
                    chart.canvas.getAttribute('data-max') &&
                    chart.canvas.getAttribute('data-max') !== '' &&
                    chart.canvas.getAttribute('data-max') != null &&
                    chart.canvas.getAttribute('data-max') !== 'undefined'
                ) {
                    max = chart.canvas.getAttribute('data-max');
                }

                min = parseFloat(min);
                max = parseFloat(max);

                if (max - min >= 1) {
                    chart.config.options.scales.yAxes[0].ticks.stepSize = max;
                    chart.config.options.scales.yAxes[0].ticks.max = max;
                    chart.config.options.scales.yAxes[0].ticks.min = min;
                } else {
                    chart.config.options.scales.yAxes[0].ticks.stepSize = max + 1;
                    chart.config.options.scales.yAxes[0].ticks.max = max + 1;
                    chart.config.options.scales.yAxes[0].ticks.min = Math.max(min, 0);
                }
            }

            if (type == 'doughnut') {
                var oldFill = ctx.fillStyle;
                var fontSize = (height / 4).toFixed(2);

                ctx.restore();
                ctx.textBaseline = 'middle'

                let textX = Math.round(width / 2),
                    textY = (height + chart.chartArea.top) / 2;

                ctx.font = fontSize / 3 + 'px sans-serif';
                ctx.fillStyle = chart.canvas.getAttribute('data-label-color') || '#FFF';

                ctx.textAlign = 'center';

                let text_name = chart.canvas.getAttribute('data-name')
                ctx.fillText(text_name, Math.round(width / 2), textY - height / 5)

                let text_unit = chart.canvas.getAttribute('data-unit')
                ctx.fillText(text_unit, Math.round(width / 2), textY + height / 4)

                ctx.font = fontSize + 'px sans-serif';
                ctx.fillStyle = chart.config.data?.datasets?.[0]?.backgroundColor[0];
                ctx.textAlign = 'center';
                ctx.fillText(chart.config.data?.datasets[0]?.data[0], textX, textY + height / 30);
                ctx.fillStyle = oldFill;

                ctx.save();
            }
        },
        afterDraw: function (chart) {
            var width = chart.chart.width,
                height = chart.chart.height,
                ctx = chart.chart.ctx,
                type = chart.config.type;

            if (type == 'doughnut' && chart.canvas.getAttribute('data-border') === 'margins') {
                let lineWidth = chart.radiusLength / 4;
                ctx.lineWidth = lineWidth;

                const max = parseInt(chart.canvas.getAttribute('data-max')) || 100;

                //green path
                ctx.strokeStyle = chart.chart.config.options.breakpointColors.base;
                ctx.beginPath();
                ctx.arc(width / 2, (height / 2) + height / 21.05, chart.chart.controller.outerRadius - lineWidth / 2, chart.chart.config.options.rotation, chart.chart.config.options.rotation + chart.chart.config.options.circumference * chart.chart.config.options.breakpoints.orange / max);
                ctx.stroke();

                //yellow path
                ctx.strokeStyle = chart.chart.config.options.breakpointColors.warning;
                ctx.beginPath();
                ctx.arc(width / 2, (height / 2) + height / 21.05, chart.chart.controller.outerRadius - lineWidth / 2, chart.chart.config.options.rotation + chart.chart.config.options.circumference * chart.chart.config.options.breakpoints.orange / max, chart.chart.config.options.circumference * 0.10);
                ctx.stroke();

                //red path
                ctx.strokeStyle = chart.chart.config.options.breakpointColors.danger;
                ctx.beginPath();
                ctx.arc(width / 2, (height / 2) + height / 21.05, chart.chart.controller.outerRadius - lineWidth / 2, chart.chart.config.options.rotation + chart.chart.config.options.circumference * chart.chart.config.options.breakpoints.red / max, chart.chart.config.options.rotation + chart.chart.config.options.circumference);
                ctx.stroke();

                let spaceWidth = chart.radiusLength / 6;
                ctx.strokeStyle = '#000'; //red
                ctx.lineWidth = 4
                ctx.beginPath();
                ctx.arc(width / 2, (height / 2) + height / 21.05, chart.chart.controller.outerRadius - lineWidth / 2 - spaceWidth / 1.5, chart.chart.config.options.rotation, chart.chart.config.options.rotation + chart.chart.config.options.circumference);
                ctx.stroke();

                ctx.save();
            }
        }
    });
}
