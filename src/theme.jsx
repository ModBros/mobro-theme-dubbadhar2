import React from "react";
import {configureChartJS} from "theme/utils/charts";

// highcharts setup
import more from "highcharts/highcharts-more";
import Highcharts from "highcharts";
more(Highcharts);

// styles
import "theme/styles/theme.scss";

// hooks
import "theme/hooks/global-config";
import "theme/hooks/global-edit-modificator";
import "theme/hooks/component/entry";
import "theme/hooks/component/base-component";
import "theme/hooks/widgets";

configureChartJS();
