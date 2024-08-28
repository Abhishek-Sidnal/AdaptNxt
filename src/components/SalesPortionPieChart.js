import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const SalesPortionPieChart = () => {
    const totalSales = 2659;
    const data = {
        labels: ['WooCommerce Store', 'Shopify Store'],
        datasets: [
            {
                label: '# of Sales',
                data: [55.8, 44.2],
                backgroundColor: ['#FF6384', '#36A2EB'],
                hoverBackgroundColor: ['#FF6384', '#36A2EB'],
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: true,
                text: 'Portion of Sales',
            },
            datalabels: {
                formatter: (value, context) => {
                    return `${value}%`;
                },
                color: '#fff',
                font: {
                    weight: 'bold',
                    size: '16',
                },
            },
            tooltip: {
                callbacks: {
                    label: function (tooltipItem) {
                        const value = tooltipItem.raw;
                        return `${tooltipItem.label}: ${value}%`;
                    },
                },
            },
            centerText: {
                display: true,
                text: totalSales.toString(),
            },
        },
    };

    return (
        <div style={{ position: 'relative',width:'90%' ,display:'flex', alignItems:'center',justifyContent:'center' }}>
            <Pie data={data} options={options} />
            <div
                style={{
                    position: 'absolute',
                    top: '60%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    fontSize: '24px',
                    fontWeight: 'bold',
                    color: '#000',
                }}
            >
                {totalSales}
            </div>
        </div>
    );
};

export default SalesPortionPieChart;
