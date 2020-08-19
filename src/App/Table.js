import React from 'react';
import TableLine from "./TableLine";
import {CURRENCIES} from "../App";

const Table = ({data}) => {
    return (
        <table className={'curr_table'}>
            <thead>
            <tr>
                <th>updateTime</th>
                {CURRENCIES.map(
                    curr => <th key={curr}>{curr}</th>
                )}
            </tr>

            </thead>
            <tbody>
            {data.map(
                item => <TableLine key={item.meta.timestamp} item={item}/>
            )}
            </tbody>

        </table>
    );
};

export default Table;