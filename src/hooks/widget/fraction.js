import mobro from "mobro";
import Fraction from "theme/components/Fraction";

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
            info: "Symbolizes the maximum value which can be achieved (4 / xGb)",
            type: "channel",
        },
        divisorManual: {
            info: "If you don't have a value for divisor, you can use this to set the value manually",
            type: "input"
        }
    }
});
