import React from 'react'
import { Link } from "react-router-dom";
import { LineChart, Line, ResponsiveContainer, Tooltip } from 'recharts';
import PropTypes from 'prop-types';
import "./chartBox.scss";

const ChartBox = ({color,icon,tittle,number,dataKey,percentage,charData}) => {
  return (
    <div className='chartBox'>
      <div className="boxInfo">
        <div className="title">
          <img src={icon} alt="" />
          <span>{tittle}</span>
        </div>
        <h1>{number}</h1>
        <Link to="/" style={{ color: color }}>
          View all
        </Link>
      </div>
      <div className='chartInfo'>
        <div className="chart">
          <ResponsiveContainer width="99%" height="100%">
            <LineChart data={charData}>
              <Tooltip
                contentStyle={{ background: "transparent", border: "none" }}
                labelStyle={{ display: "none" }}
                position={{ x: 10, y: 70 }}
              />
              <Line
                type="monotone"
                dataKey={dataKey}
                stroke={color}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="texts">
          <span className='percentage' style={{ color: percentage < 0 ? "tomato" : "limegreen" }}>%{percentage}</span>
          <span className='duration'>this month</span>
        </div>
      </div>
    </div>
  )
}
ChartBox.propTypes = {
  color: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  tittle: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  dataKey: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
  charData: PropTypes.array.isRequired,
}

ChartBox.defaultProps={
  color: "#8884d8",
  icon: "/userIcon.svg",
  tittle: "Total Users",
  number: "11.238",
  dataKey: "users",
  percentage: 45,
  charData: [
    { name: "Sun", users: 400 },
    { name: "Mon", users: 600 },
    { name: "Tue", users: 500 },
    { name: "Wed", users: 700 },
    { name: "Thu", users: 400 },
    { name: "Fri", users: 500 },
    { name: "Sat", users: 450 }
  ]
}

export default ChartBox