import React from 'react';
import {CURRENCIES} from "../App";

const TableLine = ({item}) => {
    return (
        <tr>
            <td>{item.meta.timestamp.toString()}</td>
            {CURRENCIES.map(
                (curr) => <td key={curr + item.meta.timestamp.toTimeString()}>{item[curr].Value}</td>
            )}
        </tr>
    );
};

export default TableLine;