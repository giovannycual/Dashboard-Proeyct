import React from 'react'
import { BarChart, Bar, ResponsiveContainer, Tooltip } from 'recharts';
import PropTypes from 'prop-types';
import "./BarChartBox.scss"

const BarChartBox = ({ title, color, dataKey, chartData }) => {
    return (
        <div>
            <div className='barChartBox'>
                <h1>{title}</h1>
                <div className='chart'>
                    <ResponsiveContainer width="99%" height={150}>
                        <BarChart data={chartData}>
                            <Tooltip
                                contentStyle={{ background: "#2a3447", borderRadius: "5px" }}
                                labelStyle={{ display: "none" }}
                                cursor={{ fill: "none" }}
                            />
                            <Bar dataKey={dataKey} fill={color} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    )
};

BarChartBox.propTypes = {
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    dataKey: PropTypes.string.isRequired,
    chartData: PropTypes.array.isRequired
}

BarChartBox.defaultProps = {
    title: "Profit Earned",
    color: "#8884d8",
    dataKey: "profit",
    chartData: [
        {name: "Sun",profit: 4000,},
        {name: "Mon",profit: 3000,},
        {name: "Tue",profit: 2000,},
        {name: "Wed",profit: 2780,},
        {name: "Thu",profit: 1890,},
        {name: "Fri",profit: 2390,},
        {name: "Sat",profit: 3490,},
    ],
}

export default BarChartBox