import React from "react";

// highcharts setup
import more from "highcharts/highcharts-more";
import solidGauge from "highcharts/modules/solid-gauge"
import Highcharts from "highcharts";
more(Highcharts);
solidGauge(Highcharts);

// styles
import "theme/styles/theme.scss";

// hooks
import "theme/hooks/global-config";
import "theme/hooks/global-edit-modificator";
import "theme/hooks/component/entry";
import "theme/hooks/component/base-component";
import "theme/hooks/widgets";
