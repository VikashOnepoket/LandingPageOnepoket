import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import Select from 'react-select';
import { MdOutlineFileDownload } from "react-icons/md";
import './BarChart.css';
import Table from './Table';

const ConversionChart = ({ compltedScan }) => {
    console.log(compltedScan, "completedScan in Barchart")
    const [selectedData, setSelectedData] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);

    useEffect(() => {
        if (compltedScan) {
            console.log("Data in compltedScan:", compltedScan);
        }
    }, [compltedScan]);
    const boxShadowStyle = {
        boxShadow: '0px 1px 4px 0px rgba(0, 0, 0, 0.15)',
    };
    const [chartOptions, setChartOptions] = useState({
        chart: {
            type: 'bar',
            height: 350,
            stacked: true,
            toolbar: {
                show: false,
            },
            events: {
                dataPointSelection: (event, chartContext, config) => {
                    if (compltedScan) {
                        const seriesIndex = config.seriesIndex;
                        const dataPointIndex = config.dataPointIndex;
                        const selectedSeries = chartSeries[seriesIndex];
                        const selectedValue = selectedSeries.data[dataPointIndex];
                        console.log("Data Point selected:", selectedValue);

                        setSelectedData({
                            series: selectedSeries.name,
                            category: chartOptions.xaxis.categories[dataPointIndex],
                            value: selectedValue,
                            scanData: compltedScan,
                        });
                    } else {
                        console.log("compltedScan is undefined at the time of selection");
                    }
                },
            },
        },
        colors: ['#86EFAC', '#FFAB7C', '#FF7070'],
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
            axisBorder: { show: false },
            axisTicks: { show: false },
        },
        yaxis: {
            axisBorder: { show: false },
            axisTicks: { show: false },
        },
        tooltip: {
            shared: false,
            intersect: true,
            y: {
                formatter: (val) => `${val} %`,
            },
        },
        legend: {
            position: 'top',
            horizontalAlign: 'right',
        },
        grid: { show: false },
    });

    const chartSeries = [
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

    return (
        <>
            <div style={boxShadowStyle} className='rounded-lg p-5 w-full'>
                <h2 className='text-[16px] leading-[21px] font-semibold'>Conversion</h2>
                <Chart options={chartOptions} series={chartSeries} type="bar" height={350} />
            </div>
            {selectedData && (
                <div className='mt-5 p-4  rounded'>
                    <h3 className='text-[14px] leading-[18px] font-semibold'>Selected Data</h3>
                    <p><strong>Series:</strong> {selectedData.series}</p>
                    <p><strong>Category:</strong> {selectedData.category}</p>
                    <p><strong>Value:</strong> {selectedData.value} %</p>
                </div>
            )}
            {selectedData?.scanData && (
                <>
                    <div className="flex items-center space-x-4 p-4">
                        <h1 className="text-[18px] leading-6 font-medium text-[#000000]">Authorized Customers</h1>
                        <div className="w-5 h-5 bg-[#86EFAC] rounded"></div>
                    </div>
                    <div className="overflow-y-scroll h-[300px] custom-scrollbar">
                        <table className="bg-white mt-4">
                            <thead>
                                <tr className='border-b border-gray-200'>
                                    <th className="py-2 px-4 text-left text-[12px] leading-4 text-[#202123] font-medium">Name</th>
                                    <th className="py-2 px-4 text-left text-[#202123] font-medium text-[12px] leading-4">E-mail</th>
                                    <th className="py-2 px-4 text-left text-[#202123] font-medium text-[12px] leading-4">Ph. No.</th>
                                    <th className="py-2 px-4 text-left text-[#202123] font-medium text-[12px] leading-4">Product Name</th>
                                    <th className="py-2 px-4 text-center text-[#202123] font-medium text-[12px] leading-4">Invoice</th>
                                    <th className="py-2 px-4 text-left text-[#202123] font-medium text-[12px] leading-4">Location</th>
                                </tr>
                            </thead>
                            <tbody>
                                {selectedData?.scanData.map((scan, index) => (
                                    <Table key={index} scan={scan} />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </>
            )}
        </>
    );
};

export default ConversionChart;
