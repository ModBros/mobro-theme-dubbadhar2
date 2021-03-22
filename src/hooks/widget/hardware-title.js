import mobro from "mobro";
import HardwareTitle from "theme/components/HardwareTitle";

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
