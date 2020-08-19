import React from 'react';
import './App.css';
import axios from "axios";
import Table from "./App/Table";
import Chart from "./App/Chart";

export const CURRENCIES = ['USD', 'EUR'];
export const COLORS = ['red','green'];
const interval = 10000;

const sourceUrl = 'https://www.cbr-xml-daily.ru/daily_json.js';

function App() {
    const [data, setData] = React.useState([])
    const [loading, setLoading] = React.useState(true)

    React.useEffect(() => {
        setLoading(true);

        async function getData() {
            const result = await axios.get(sourceUrl);
            const values = result?.data?.Valute
            if (values) {
                const currency = {};
                CURRENCIES.forEach(
                    (i) => currency[i] = values[i]
                )
                setData(prevState => {
                        return prevState.concat([{
                            ...currency, meta: {
                                timestamp: new Date()
                            }
                        }]);

                    }
                )
            }
            setLoading(false);
        }

        getData();
        const timeout = setInterval(() => getData(), interval)
        return () => {
            return clearInterval(timeout);
        }
    }, [])

    return (
        <div className="App">
            {loading && <>Loading...</>}
            <div className={'board'}>
                <div>
                    <Table data={data}/>
                </div>
                <div>
                    <Chart data={data}/>
                </div>
            </div>
        </div>
    );
}

export default App;
