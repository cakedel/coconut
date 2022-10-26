import React from 'react'
import TodayPick from './TodayPick'
import Chart from './Chart'
import Recommand from './Recommand'
import Market from './Market'

function Content() {
    return (
        <div className='Content'>
            <TodayPick />
            <Chart />
            <Recommand />
            <Market />
        </div>
    )
}

export default Content;