import React from 'react';
import Chart from 'react-apexcharts';

const TopCitiesBySales = () => {
    const boxShadowStyle = {
        boxShadow: '0px 1px 4px 0px rgba(0, 0, 0, 0.15)', // X-offset, Y-offset, blur, spread, color
    };

    const chartOptions = {
        chart: {
            type: 'donut',
        },
        plotOptions: {
            pie: {
                donut: {
                    size: '80%', // Adjust this value to reduce/increase the thickness
                },
            },
        },
        labels: ['Bangalore', 'Kolkata', 'Indore', 'Pune', 'Hyderabad', 'Bhubaneshwar'],
        colors: ['#0052cc', '#0072ce', '#0095ff', '#00b2ff', '#00d3ff', '#00e4ff'],
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: false,
        },
    };

    const chartSeries = [20, 20, 15, 15, 10, 10];

    return (
        <div style={boxShadowStyle} className='rounded-lg p-5'>
            <div className='flex justify-between items-center'>
                <h2 className='text-lg font-semibold'>Top Cities by Sales</h2>
                {/* <a href="#" className='text-blue-500 text-sm'>See All</a> */}
            </div>
            <Chart
                options={chartOptions}
                series={chartSeries}
                type="donut"
                height={250}
            />
            <div className="legend grid grid-cols-2 gap-10 items-center mt-5">
                <div><span style={{ color: '#0052cc' }}>■</span> Bangalore</div>
                <div><span style={{ color: '#0072ce' }}>■</span> Kolkata</div>
                <div><span style={{ color: '#0095ff' }}>■</span> Indore</div>
                <div><span style={{ color: '#00b2ff' }}>■</span> Pune</div>
                <div><span style={{ color: '#00d3ff' }}>■</span> Hyderabad</div>
                <div><span style={{ color: '#00e4ff' }}>■</span> Bhubaneshwar</div>
            </div>
        </div>
    );
};

export default TopCitiesBySales;
