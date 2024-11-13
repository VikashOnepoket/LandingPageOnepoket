import React, { useEffect, useRef, useState } from 'react';
import Chart from 'react-apexcharts';
import { MdOutlineFileDownload } from 'react-icons/md';
import './BarChart.css';
import Table from './Table';
import IncompleteTable from './IncompleteTable';
import moment from 'moment';
import RedScanTable from './RedScanTable';

const ConversionChart = ({
    compltedScan,
    redScan,
    authorizedScanCount,
    inCompleteScanCount,
    unauthorizedScanCount,
    pendingWarranty,
    updateWarranty,

}) => {
    const redScanRef = useRef(redScan);
    const compltedScanRef = useRef(compltedScan);
    const pendingWarrantyRef = useRef(pendingWarranty);

    useEffect(() => {
        redScanRef.current = redScan;
        compltedScanRef.current = compltedScan;
        pendingWarrantyRef.current = pendingWarranty;
    }, [redScan, compltedScan, pendingWarranty]);

    const [selectedData, setSelectedData] = useState(null);

    const groupScansByDate = (scans) => {
        const groupedData = scans.reduce((acc, scan) => {
            const date = scan.availed_on
                ? moment(scan.availed_on).format('MMM DD YYYY')
                : scan.scanned_at
                    ? moment(scan.scanned_at).format('MMM DD YYYY')
                    : 'Unknown Date';
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
    const groupedPendingWarranty = groupScansByDate(pendingWarranty);

    const allDates = Array.from(
        new Set([...Object.keys(groupedCompletedScans), ...Object.keys(groupedRedScans), ...Object.keys(groupedPendingWarranty)])
    );

    const calculatePercentage = (count, total) => {
        return total > 0 ? (count / total) * 100 : 0;
    };

    const generateSeriesData = (groupedScans, dates) => {
        return dates.map((date) => {
            const scans = groupedScans[date] || [];
            return scans.length;
        });
    };

    const completedScanData = generateSeriesData(groupedCompletedScans, allDates);
    const redScanData = generateSeriesData(groupedRedScans, allDates);
    const pendingWarrantyData = generateSeriesData(groupedPendingWarranty, allDates);

    const totalScansPerDate = allDates.map(
        (date, index) => completedScanData[index] + redScanData[index] + pendingWarrantyData[index]
    );

    const completedScanPercentage = completedScanData.map((count, index) =>
        calculatePercentage(count, totalScansPerDate[index])
    );
    const redScanPercentage = redScanData.map((count, index) =>
        calculatePercentage(count, totalScansPerDate[index])
    );
    const pendingScanPercentage = pendingWarrantyData.map((count, index) =>
        calculatePercentage(count, totalScansPerDate[index])
    );

    const chartOptions = {
        chart: {
            fontFamily: 'Plus Jakarta Sans',
            type: 'bar',
            stacked: true,
            toolbar: {
                show: false,
            },
            events: {
                dataPointSelection: (event, chartContext, config) => {
                    const seriesIndex = config.seriesIndex;
                    const dataPointIndex = config.dataPointIndex;
                    const selectedCategory = allDates[dataPointIndex];
                    const scanData =
                        seriesIndex === 0
                            ? groupedCompletedScans[selectedCategory] || []
                            : seriesIndex === 1
                                ? groupedPendingWarranty[selectedCategory] || []
                                : groupedRedScans[selectedCategory] || [];

                    setSelectedData({
                        seriesIndex,
                        category: selectedCategory,
                        scanData,
                    });
                },
            },
        },
        colors: ['#86EFAC', '#B2B2FF', '#FF7070'],
        plotOptions: {
            bar: {
                horizontal: true,
                barHeight: '14px',
            },
        },
        dataLabels: {
            enabled: false,
        },
        xaxis: {
            categories: allDates,
            axisBorder: { show: false },
            axisTicks: { show: false },
            tickAmount: 4,
            labels: {
                formatter: (val) => `${Math.round(val)}%`,
                style: {
                    fontSize: '0.85rem',
                    fontWeight: '600',
                    colors: '#58595A',
                    lineHeight: '1.2rem',
                    fontFamily: 'Plus Jakarta Sans'
                },
                offsetX: -12,
                offsetY: 4,
            },
            min: 0,
            max: 100,
        },
        yaxis: {
            labels: {
                show: true,
                style: {
                    fontSize: '0.85rem',
                    fontWeight: '600',
                    colors: '#58595A',
                    lineHeight: '1.2rem',
                    fontFamily: 'Plus Jakarta Sans'
                },
                offsetX: -5,
                offsetY: 4,
            },
        },
        tooltip: {
            followCursor: true,
            y: {
                formatter: (val, { seriesIndex, dataPointIndex }) => {
                    if (seriesIndex === 0) return `${completedScanData[dataPointIndex]}`;
                    if (seriesIndex === 1) return `${pendingWarrantyData[dataPointIndex]}`;
                    return `${redScanData[dataPointIndex]}`;
                },
            },
        },
        legend: {
            position: 'top',
            horizontalAlign: 'right',
        },
        grid: {
            show: false,
        },
    };

    const chartSeries = [
        {
            name: 'Authorized Scans',
            data: completedScanPercentage,
        },
        {
            name: 'Pending Warranty',
            data: pendingScanPercentage,
        },
        {
            name: 'Unauthorized Scans',
            data: redScanPercentage,
        },
    ];

    const dynamicChartHeight = Math.max(allDates.length * 50, 150);



    return (
        <>
            <div
                className='rounded-lg p-5 w-full'
                style={{ boxShadow: '0px 1px 4px 0px rgba(0, 0, 0, 0.15)' }}
            >
                <h2 className='text-[16px] leading-[21px] font-semibold'>Conversion</h2>
                {allDates.length > 0 && (
                    <Chart
                        options={chartOptions}
                        series={chartSeries}
                        type='bar'
                        height={dynamicChartHeight}
                    />
                )}
            </div>

            {selectedData?.scanData && (
                <>
                    {selectedData.seriesIndex === 0 ? (
                        <div className='mt-10'>
                            <div className='flex items-center space-x-4 p-4'>
                                <h1 className='text-[18px] leading-6 font-medium text-[#000000]'>
                                    Authorized Customers
                                </h1>
                                <div className='w-5 h-5 bg-[#86EFAC] rounded'></div>
                            </div>
                            <div className='overflow-y-scroll h-[300px] custom-scrollbar'>
                                <table className='bg-white mt-4'>
                                    <thead>
                                        <tr className='border-b border-gray-200'>
                                            <th className='py-2 px-4 text-left text-[16px] leading-5 text-[#202123] font-medium'>
                                                Name
                                            </th>
                                            <th className='py-2 px-4 text-left text-[#202123] font-medium text-[16px] leading-5'>
                                                E-mail
                                            </th>
                                            <th className='py-2 px-4 text-left text-[#202123] font-medium text-[16px] leading-5'>
                                                Ph. No.
                                            </th>
                                            <th className='py-2 px-4 text-left text-[#202123] font-medium text-[16px] leading-4'>
                                                Product Name
                                            </th>
                                            <th className='py-2 px-4 text-left text-[#202123] font-medium text-[16px] leading-5'>
                                                Invoice
                                            </th>
                                            <th className='py-2 px-4 text-left text-[#202123] font-medium text-[16px] leading-5'>
                                                Location
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {selectedData.scanData.map((scan, index) => (
                                            <Table key={index} scan={scan} />
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    ) : selectedData.seriesIndex === 1 ? (
                        <div className='mt-10'>
                            <div className='flex items-center space-x-4 p-4'>
                                <h1 className='text-[18px] leading-6 font-medium text-[#000000]'>
                                    Pending Warranty
                                </h1>
                                <div className='w-5 h-5 bg-[#B2B2FF] rounded'></div>
                            </div>
                            <div className='overflow-y-scroll h-[300px] custom-scrollbar'>
                                <table className='bg-white mt-4 w-full'>
                                    <thead>
                                        <tr className='border-b border-gray-200'>
                                            <th className='py-2 px-4 text-left text-[16px] leading-5 text-[#202123] font-medium'>
                                                Name
                                            </th>
                                            <th className='py-2 px-4 text-left text-[#202123] font-medium text-[16px] leading-5'>
                                                E-mail
                                            </th>
                                            <th className='py-2 px-4 text-left text-[#202123] font-medium text-[16px] leading-5'>
                                                Ph. No.
                                            </th>
                                            <th className='py-2 px-4 text-left text-[#202123] font-medium text-[16px] leading-4'>
                                                Product Name
                                            </th>
                                            <th className='py-2 px-4 text-left text-[#202123] font-medium text-[16px] leading-5'>
                                                Invoice
                                            </th>
                                            <th className='py-2 px-4 text-left text-[#202123] font-medium text-[16px] leading-5'>
                                                Location
                                            </th>
                                            <th className='py-2 px-4 text-left text-[#202123] font-medium text-[16px] leading-5'>
                                                Status
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {selectedData.scanData.map((scan, index) => (
                                            <IncompleteTable key={index} scan={scan} updateWarranty={updateWarranty} />
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    ) : (
                        <div className='mt-10'>
                            <div className='flex items-center space-x-4 p-4'>
                                <h1 className='text-[18px] leading-6 font-medium text-[#000000]'>
                                    Unauthorized Scans
                                </h1>
                                <div className='w-5 h-5 bg-[#FF7070] rounded'></div>
                            </div>
                            <div className='overflow-y-scroll h-[300px] custom-scrollbar'>
                                <table className='bg-white mt-4 w-full'>
                                    <thead>
                                        <tr className='border-b border-gray-200'>
                                            <th className='py-2 px-4 text-left text-[16px] leading-5 text-[#202123] font-medium'>
                                                Name
                                            </th>
                                            <th className='py-2 px-4 text-left text-[#202123] font-medium text-[16px] leading-5'>
                                                E-mail
                                            </th>
                                            <th className='py-2 px-4 text-left text-[#202123] font-medium text-[16px] leading-5'>
                                                Ph. No.
                                            </th>
                                            <th className='py-2 px-4 text-left text-[#202123] font-medium text-[16px] leading-4'>
                                                Product Name
                                            </th>
                                            <th className='py-2 px-4 text-left text-[#202123] font-medium text-[16px] leading-5'>
                                                Serial Number
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {selectedData.scanData.map((scan, index) => (
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
