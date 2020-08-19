import React from 'react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

import {COLORS, CURRENCIES} from "../App";

const Chart = ({data}) => {
    function parseData(data) {
        return data.map(item => {
            const currency = {};
            CURRENCIES.forEach(
                (i) => currency[i] = item[i].Value
            )
            return {
                ...currency,
                name: item.meta.timestamp.toLocaleTimeString()
            }
        })
    }

    return (
        <div>
            <LineChart
                width={500}
                height={300}
                data={parseData(data)}
                margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="name"/>
                <YAxis/>
                <Tooltip/>
                <Legend/>

                {CURRENCIES.map(
                    (item, idx) => <Line key={item} type="monotone" dataKey={item} stroke={COLORS[idx]}/>
                )}
            </LineChart>
        </div>
    );
};

export default Chart;