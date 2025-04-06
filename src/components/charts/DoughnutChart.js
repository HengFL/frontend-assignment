import React from 'react';
import Chart from "react-apexcharts";

function DoughnutChart({ series = [], labels=[], options = {}, ...others }) {
    return <Chart
        type="donut"
        series={series}
        labels={labels}
        options={options}
        {...others}
    />;
}

export default DoughnutChart;