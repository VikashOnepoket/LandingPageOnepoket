import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import Select from 'react-select';

const ConversionChart = ({ compltedScan }) => {
    console.log(compltedScan, "scandata");
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

                    // Map through compltedScan and pass all the data
                    const scanData = compltedScan.map((data) => data);
                    console.log(scanData, "data in seccc")


                    setSelectedData({
                        series: selectedSeries.name,
                        category: options.xaxis.categories[dataPointIndex],
                        value: selectedValue,
                        scanData: compltedScan, // Pass all the scan data
                    });
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

    const [selectedCategory, setSelectedCategory] = useState(null);
    const customStyles = {
        control: (provided, state) => ({
            ...provided,
            borderColor: state.isFocused ? '#0052cc' : provided.borderColor,
            boxShadow: state.isFocused ? '0 0 0 1px #0052cc' : provided.boxShadow,
            '&:hover': {
                borderColor: state.isFocused ? '#0052cc' : provided.borderColor,
            },
        }),
    };

    const categories = [
        { value: 'monthly', label: 'Monthly' },
        { value: 'weekly', label: 'Weekly' },
        { value: 'yearly', label: 'Yearly' },
    ];

    return (
        <>
            <div style={boxShadowStyle} className='rounded-lg p-5 '>
                <h2 className='text-[16px] leading-[21px] font-semibold'>Conversion</h2>
                <div className="mb-4 mt-5">
                    <label className="text-[16px] leading-[21px] font-semibold mb-2 text-[#000000]">By Date</label>
                    <input
                        type="date"
                        className="input border border-gray-300 rounded-md w-full py-2 px-3 focus:border-[#0052cc] focus:border focus-within:ring-1 appearance-none transition duration-150 ease-in-out mt-1"
                        placeholder="Enter Date"
                    />
                </div>
                <div className="mb-4 mt-5">
                    <Select
                        value={selectedCategory}
                        onChange={setSelectedCategory}
                        options={categories}
                        styles={customStyles}
                        className='mt-1'
                        placeholder="Montly"
                    />
                </div>

                <Chart options={options} series={series} type="bar" height={350} />

            </div>
            {selectedData && (
                <div className='mt-5 p-4 bg-gray-100 rounded w-[70%] '>
                    <h3 className='text-[14px] leading-[18px] font-semibold'>Selected Data</h3>
                    <p><strong>Series:</strong> {selectedData.series}</p>
                    <p><strong>Category:</strong> {selectedData.category}</p>
                    <p><strong>Value:</strong> {selectedData.value} %</p>

                    {/* Display the data from compltedScan in a table */}
                    <table className="min-w-full bg-white border border-gray-300 mt-4 ">
                        <thead>
                            <tr>
                                <th className="py-2 px-4 border-b">Name</th>
                                <th className="py-2 px-4 border-b">E-mail</th>
                                <th className="py-2 px-4 border-b">Ph. No.</th>
                                <th className="py-2 px-4 border-b">Product Name</th>
                                <th className="py-2 px-4 border-b">Invoice</th>
                                <th className="py-2 px-4 border-b">Location</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Map over the selectedData.scanData to render each data item */}
                            {selectedData.scanData.map((scan, index) => (
                                <tr key={index}>
                                    <td className="py-2 px-4 border-b">{scan.name}</td>
                                    <td className="py-2 px-4 border-b">{scan.email}</td>
                                    <td className="py-2 px-4 border-b">{scan.phone_number}</td>
                                    <td className="py-2 px-4 border-b">{scan.product_name}</td>
                                    <td className="py-2 px-4 border-b">
                                        <a href={scan.invoice} target="_blank" rel="noopener noreferrer">
                                            <i className="fas fa-download" /> {/* Use react-icons for download icon */}
                                        </a>
                                    </td>
                                    <td className="py-2 px-4 border-b">{scan.location}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>
            )}
        </>
    );
};

export default ConversionChart;
