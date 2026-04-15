// StockScanner.js
import React, { useState, useEffect } from 'react';

const StockScanner = () => {
    const [stocks, setStocks] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchStocks = async () => {
            const response = await fetch('https://api.example.com/stocks'); // Replace with your API
            const data = await response.json();
            setStocks(data);
        };
        fetchStocks();
        const intervalId = setInterval(fetchStocks, 10000); // Update every 10 seconds
        return () => clearInterval(intervalId);
    }, []);

    const filteredStocks = stocks.filter(stock => 
        stock.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <input 
                type="text" 
                placeholder="Search stocks..." 
                value={searchTerm} 
                onChange={e => setSearchTerm(e.target.value)}
            />
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Change</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredStocks.map(stock => (
                        <tr key={stock.id}>
                            <td>{stock.name}</td>
                            <td>{stock.price}</td>
                            <td>{stock.change}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StockScanner;