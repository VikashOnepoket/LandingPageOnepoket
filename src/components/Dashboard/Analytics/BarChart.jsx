import React, { useState } from 'react';
import Chart from 'react-apexcharts';

const ConversionChart = () => {
    const [selectedData, setSelectedData] = useState(null);
    const boxShadowStyle = {
        boxShadow: '0px 1px 4px 0px rgba(0, 0, 0, 0.15)', // X-offset, Y-offset, blur, spread, color
    };

    const series = [
        {
            name: 'Series 1',
            data: [70, 65, 80, 90, 75],
        },
        {
            name: 'Series 2',
            data: [30, 35, 20, 10, 25],
        },
        {
            name: 'Series 3',
            data: [30, 35, 20, 10, 25],
        },
    ];

    const options = {
        chart: {
            type: 'bar',
            height: 350,
            stacked: true,
            toolbar: {
                show: false,
            },
            events: {
                dataPointSelection: (event, chartContext, config) => {
                    const seriesIndex = config.seriesIndex;
                    const dataPointIndex = config.dataPointIndex;
                    const selectedSeries = series[seriesIndex];
                    const selectedValue = selectedSeries.data[dataPointIndex];
                    setSelectedData({
                        series: selectedSeries.name,
                        category: options.xaxis.categories[dataPointIndex],
                        value: selectedValue,
                    });
                },
            },
        },
        colors: ['#7BF1A8', '#FC836E', '#FF7070'],
        plotOptions: {
            bar: {
                horizontal: true,
                barHeight: '20%',
             
            },
        },
        dataLabels: {
            enabled: false,
        },
        xaxis: {
            categories: ['May 29', 'May 22', 'May 15', 'May 8', 'May 1'],
            axisBorder: {
                show: false, // Hide x-axis border
            },
            axisTicks: {
                show: false, // Hide x-axis ticks
            },
        },
        yaxis: {
            axisBorder: {
                show: false, // Hide y-axis border
            },
            axisTicks: {
                show: false, // Hide y-axis ticks
            },
        },
        tooltip: {
            shared: false,
            intersect: true,
            y: {
                formatter: function (val) {
                    return val + ' %';
                },
            },
        },
        legend: {
            position: 'top',
            horizontalAlign: 'right',
        },
        grid: {
            show: false, // Hide grid lines
        },
    };

    return (
        <>
            <div style={boxShadowStyle} className='rounded-lg p-5 '>
                <h2 className='text-[16px] leading-[21px] font-semibold'>Conversion</h2>
                <Chart options={options} series={series} type="bar" height={350} />
                
            </div>
            {/* {selectedData && (
                    <div className='mt-5 p-4 bg-gray-100 rounded'>
                        <h3 className='text-[14px] leading-[18px] font-semibold'>Selected Data</h3>
                        <p><strong>Series:</strong> {selectedData.series}</p>
                        <p><strong>Category:</strong> {selectedData.category}</p>
                        <p><strong>Value:</strong> {selectedData.value} %</p>
                    </div>
                )} */}
        </>
    );
};

export default ConversionChart;
