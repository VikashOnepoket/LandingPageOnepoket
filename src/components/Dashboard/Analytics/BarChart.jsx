import React, { useEffect, useRef, useState } from 'react';
import Chart from 'react-apexcharts';
import { MdOutlineFileDownload } from "react-icons/md";
import './BarChart.css';
import Table from './Table';
import IncompleteTable from './IncompleteTable';
import moment from 'moment';
import RedScanTable from './RedScanTable';

const ConversionChart = ({ compltedScan, redScan, authorizedScanCount, inCompleteScanCount, unauthorizedScanCount }) => {
    const redScanRef = useRef(redScan);
    const compltedScanRef = useRef(compltedScan);

    useEffect(() => {
        redScanRef.current = redScan;
        compltedScanRef.current = compltedScan;
    }, [redScan, compltedScan]);

    const [selectedData, setSelectedData] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);

    // Function to group scans by date
    const groupScansByDate = (scans) => {
        const groupedData = scans.reduce((acc, scan) => {
            const date = scan.availed_on ? moment(scan.availed_on).format('MMM DD YYYY') :
                scan.scanned_at ? moment(scan.scanned_at).format('MMM DD YYYY') : 'Unknown Date';
            if (!acc[date]) {
                acc[date] = [];
            }
            acc[date].push(scan);
            return acc;
        }, {});
        return groupedData;
    };

    const groupedCompletedScans = groupScansByDate(compltedScan);
    const groupedRedScans = groupScansByDate(redScan);

    // Combine the dates from both completed and red scans
    const allDates = Array.from(new Set([...Object.keys(groupedCompletedScans), ...Object.keys(groupedRedScans)]));

    // Function to generate data for the chart series
    const generateSeriesData = (groupedScans, dates) => {
        return dates.map(date => {
            const scans = groupedScans[date] || [];
            return scans.length; // You can modify this logic based on the data you want to show in the chart
        });
    };

    // Generate the data for both series
    const completedScanData = generateSeriesData(groupedCompletedScans, allDates);
    const redScanData = generateSeriesData(groupedRedScans, allDates);

    const chartOptions = {
        chart: {
            type: 'bar',
            stacked: true,
            toolbar: {
                show: false,
            },
            events: {
                dataPointSelection: (event, chartContext, config) => {
                    const seriesIndex = config.seriesIndex;
                    const dataPointIndex = config.dataPointIndex;
                    const selectedSeries = chartSeries[seriesIndex];
                    const selectedValue = selectedSeries.data[dataPointIndex];
                    const selectedCategory = allDates[dataPointIndex];
                    const scanData = seriesIndex === 0 ? groupedCompletedScans : groupedRedScans;

                    // Get the scans for the selected category
                    const scansForCategory = scanData[selectedCategory] || [];

                    setSelectedData({
                        seriesIndex: seriesIndex,
                        series: selectedSeries.name,
                        category: selectedCategory,
                        value: selectedValue,
                        scanData: scansForCategory, // Use completedScan or redScan based on seriesIndex
                    });
                },
            },
        },
        colors: ['#86EFAC', '#FF7070'],
        plotOptions: {
            bar: {
                horizontal: true,
                barHeight: '10px',
            },
        },
        dataLabels: {
            enabled: false,
        },

        xaxis: {
            categories: allDates, // Dynamically set x-axis categories from allDates
            axisBorder: { show: true },
            axisTicks: { show: false },
        },
        yaxis: {

            axisBorder: { show: true },
            axisTicks: { show: false },
        },
        legend: {
            position: 'top',
            horizontalAlign: 'right',
        },

        grid: {
            show: true,
        },
    };

    const chartSeries = [
        {
            name: 'Authorized Scans',
            data: completedScanData, // Use the generated data for completed scans
        },
        {
            name: 'Unauthorized Scans',
            data: redScanData, // Use the generated data for red scans
        },
    ];
    const dynamicChartHeight = Math.max(allDates.length * 50, 350);

    return (
        <>
            <div className='rounded-lg p-5 w-full' style={{ boxShadow: '0px 1px 4px 0px rgba(0, 0, 0, 0.15)' }}>
                <h2 className='text-[16px] leading-[21px] font-semibold'>Conversion</h2>
                <Chart options={chartOptions} series={chartSeries} type="bar" height={dynamicChartHeight} />
            </div>
            {/* {selectedData && (
                <div className='mt-5 p-4 rounded'>
                    <h3 className='text-[14px] leading-[18px] font-semibold'>Selected Data</h3>
                    <p><strong>Series:</strong> {selectedData.series}</p>
                    <p><strong>Category:</strong> {selectedData.category}</p>
                    <p><strong>Value:</strong> {selectedData.value}</p>
                </div>
            )} */}
            {selectedData?.scanData && (
                <>
                    {selectedData?.seriesIndex === 0 ? (
                        <div className='mt-10'>
                            <div className="flex items-center space-x-4 p-4">
                                <h1 className="text-[18px] leading-6 font-medium text-[#000000]">Authorized Customers</h1>
                                <div className="w-5 h-5 bg-[#86EFAC] rounded"></div>
                            </div>
                            <div className="overflow-y-scroll h-[300px] custom-scrollbar">
                                <table className="bg-white mt-4">
                                    <thead>
                                        <tr className='border-b border-gray-200'>
                                            <th className="py-2 px-4 text-left text-[16px] leading-5 text-[#202123] font-medium">Name</th>
                                            <th className="py-2 px-4 text-left text-[#202123] font-medium text-[16px] leading-5">E-mail</th>
                                            <th className="py-2 px-4 text-left text-[#202123] font-medium text-[16px] leading-5">Ph. No.</th>
                                            <th className="py-2 px-4 text-left text-[#202123] font-medium text-[16px] leading-4">Product Name</th>
                                            <th className="py-2 px-4 text-left text-[#202123] font-medium text-[16px] leading-5">Serial Number</th>
                                            <th className="py-2 px-4 text-left text-[#202123] font-medium text-[16px] leading-5">Location</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {selectedData?.scanData.map((scan, index) => (
                                            <Table key={index} scan={scan} />
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    ) : (
                        <div className='mt-10'>
                            <div className="overflow-y-scroll h-[300px] custom-scrollbar">
                                <table className="bg-white mt-4 w-full">
                                    <thead>
                                        <tr className='border-b border-gray-200'>
                                            <th className="py-2 px-4 text-left text-[16px] leading-5 text-[#202123] font-medium">Name</th>
                                            <th className="py-2 px-4 text-left text-[#202123] font-medium text-[16px] leading-5">E-mail</th>
                                            <th className="py-2 px-4 text-left text-[#202123] font-medium text-[16px] leading-5">Ph. No.</th>
                                            <th className="py-2 px-4 text-left text-[#202123] font-medium text-[16px] leading-4">Product Name</th>
                                            <th className="py-2 px-4 text-left text-[#202123] font-medium text-[16px] leading-5">Serial Number</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {selectedData?.scanData.map((scan, index) => (
                                            <RedScanTable key={index} scan={scan} />
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}

                </>
            )}
        </>
    );
};

export default ConversionChart;
