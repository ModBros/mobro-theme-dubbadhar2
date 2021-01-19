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
                var min = Math.min(...chart.config.data?.datasets[0]?.data);
                var max = Math.max(...chart.config.data?.datasets[0]?.data);

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
                ctx.textBaseline = "middle"

                let textX = Math.round(width / 2),
                    textY = (height + chart.chartArea.top) / 2;

                ctx.font = fontSize / 3 + "px sans-serif";
                ctx.fillStyle = chart.canvas.getAttribute("data-label-color") || "#FFF";

                ctx.textAlign = "center";

                let text_name = chart.canvas.getAttribute('data-name')
                ctx.fillText(text_name, Math.round(width / 2), textY - height / 5)

                let text_unit = chart.canvas.getAttribute('data-unit')
                ctx.fillText(text_unit, Math.round(width / 2), textY + height / 4)

                ctx.font = fontSize + "px sans-serif";
                ctx.fillStyle = chart.config.data?.datasets?.[0]?.backgroundColor[0];
                ctx.textAlign = "center";
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

                const max = parseInt(chart.canvas.getAttribute("data-max")) || 100;

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
                ctx.strokeStyle = "#000"; //red
                ctx.lineWidth = 4
                ctx.beginPath();
                ctx.arc(width / 2, (height / 2) + height / 21.05, chart.chart.controller.outerRadius - lineWidth / 2 - spaceWidth / 1.5, chart.chart.config.options.rotation, chart.chart.config.options.rotation + chart.chart.config.options.circumference);
                ctx.stroke();

                ctx.save();
            }
        }
    });
}
