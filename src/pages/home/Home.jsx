import React from 'react'
import './home.scss'
import TopBox from '../../components/topbox/TopBox'
import ChartBox from '../../components/chartBox/ChartBox'
import {barChartBoxVisit, chartBoxConversion, chartBoxProduct, chartBoxRevenue } from '../../data2'
import BarChartBox from '../../components/barcharBox/barChartBox'
import PieChartBox from '../../components/pieChartBox/pieChartBox'
import BigChartBox from '../../components/bigChartBox/bigChartBox'

const Home=()=> {
  return (
    <div className='home'>
        <div className='box box1'>
          <TopBox/>
        </div>
        <div className='box box2'><ChartBox {...ChartBox}/></div>
        <div className='box box3'><ChartBox {...chartBoxProduct}/></div>
        <div className='box box4'><PieChartBox /></div>
        <div className='box box5'><ChartBox {...chartBoxConversion}/></div>
        <div className='box box6'><ChartBox {...chartBoxRevenue}/></div>
        <div className='box box7'><BigChartBox /></div>
        <div className='box box8'><BarChartBox {...BarChartBox}/></div>
        <div className='box box9'><BarChartBox {...barChartBoxVisit}/></div>
    </div>
  )
}

export default Home