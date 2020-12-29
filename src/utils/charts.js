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
                // var percent = Math.round((chart.config.data.datasets[0].data[0] * 100) /
                //     (chart.config.data.datasets[0].data[0] +
                //         chart.config.data.datasets[0].data[1]));

                let percent = chart.config.data?.datasets[0]?.data[0]

                var oldFill = ctx.fillStyle;
                var fontSize = (height / 4).toFixed(2);

                ctx.restore();
                ctx.textBaseline = "middle"

                var value = percent;

                let textX = Math.round(width / 2),
                    textY = (height + chart.chartArea.top) / 2;

                ctx.font = fontSize / 3 + "px sans-serif";
                ctx.fillStyle = "#FFF";

                ctx.textAlign = "center";

                let text_name = chart.canvas.getAttribute('data-name')
                ctx.fillText(text_name, Math.round(width / 2), textY - height / 5)

                let text_unit = chart.canvas.getAttribute('data-unit')
                ctx.fillText(text_unit, Math.round(width / 2), textY + height / 4)

                ctx.font = fontSize + "px sans-serif";
                ctx.fillStyle = chart.config.data?.datasets?.[0]?.backgroundColor[0];
                ctx.textAlign = "center";
                ctx.fillText(value, textX, textY + height / 30);
                ctx.fillStyle = oldFill;

                if (chart.canvas.getAttribute('data-border') === 'margins') {
                    if (percent < chart.config.options.breakpoints.orange) {
                        chart.config.data.datasets[0].backgroundColor[0] = 'rgba(0, 255, 30, 1)'
                    }
                    if (percent > chart.config.options.breakpoints.orange) {
                        chart.config.data.datasets[0].backgroundColor[0] = 'rgba(255, 255, 30, 1)'
                    }
                    if (percent > chart.config.options.breakpoints.red) {
                        chart.config.data.datasets[0].backgroundColor[0] = 'rgba(255, 0, 0, 1)'
                    }
                }

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

                //green path
                ctx.strokeStyle = "#00ff1e";
                ctx.beginPath();
                ctx.arc(width / 2, (height / 2) + height / 21.05, chart.chart.controller.outerRadius - lineWidth / 2, chart.chart.config.options.rotation, chart.chart.config.options.rotation + chart.chart.config.options.circumference * chart.chart.config.options.breakpoints.orange / 100);
                ctx.stroke();

                //yellow path
                ctx.strokeStyle = "#FFFF00";
                ctx.beginPath();
                ctx.arc(width / 2, (height / 2) + height / 21.05, chart.chart.controller.outerRadius - lineWidth / 2, chart.chart.config.options.rotation + chart.chart.config.options.circumference * chart.chart.config.options.breakpoints.orange / 100, chart.chart.config.options.circumference * 0.10);
                ctx.stroke();

                //red path
                ctx.strokeStyle = "#FF0000";
                ctx.beginPath();
                ctx.arc(width / 2, (height / 2) + height / 21.05, chart.chart.controller.outerRadius - lineWidth / 2, chart.chart.config.options.rotation + chart.chart.config.options.circumference * chart.chart.config.options.breakpoints.red / 100, chart.chart.config.options.rotation + chart.chart.config.options.circumference);
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
