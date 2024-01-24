import React from 'react'
import './home.scss'
import TopBox from '../../components/topbox/TopBox'
import ChartBox from '../../components/chartBox/ChartBox'

function Home() {
  return (
    <div className='home'>
        <div className='box box1'>
          <TopBox/>
        </div>
        <div className='box box2'><ChartBox/></div>
        <div className='box box3'><ChartBox/></div>
        <div className='box box4'><ChartBox/></div>
        <div className='box box5'><ChartBox/></div>
        <div className='box box6'><ChartBox/></div>
        <div className='box box7'>BOX7</div>
        <div className='box box8'>BOX8</div>
        <div className='box box9'>BOX9</div>
    </div>
  )
}

export default Home