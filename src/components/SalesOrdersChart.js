import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const SalesOrdersChart = () => {
    const data = {
        labels: ['6/30/2024', '7/6/2024', '7/13/2024', '8/27/2024'],
        datasets: [
            {
                label: 'Orders',
                data: [802, 1000, 804, 108],
                borderColor: '#ff7300',
                backgroundColor: '#ff7300',
                fill: false,
            },
            {
                label: 'Sales',
                data: [702, 1404, 704, 351],
                borderColor: '#00c49f',
                backgroundColor: '#00c49f',
                fill: false,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Sales vs Orders',
            },
        },
    };

    return <Line data={data} options={options} />;
};

export default SalesOrdersChart;
