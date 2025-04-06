import React from 'react';
import Chart from "react-apexcharts";

function ColumnsChart({ series = [], labels=[], options = {}, ...others }) {
    return <Chart
        type="bar"
        series={series}
        labels={labels}
        options={options}
        {...others}
    />;
}

export default ColumnsChart;