import React from 'react'

const Stock = () => {
    var axios = require("axios").default;

        var options = {
        method: 'GET',
        url: 'https://stock-market-data.p.rapidapi.com/market/index/s-and-p-five-hundred',
        headers: {
            'x-rapidapi-host': 'stock-market-data.p.rapidapi.com',
            'x-rapidapi-key': 'f6860d4f83mshf07e9aded67457fp1145b4jsna2eeb3ba123b'
        }
        };

        axios.request(options).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    return (
        <div className="stock-container">
            <div className="stock-row">

            </div>
        </div>
    )
}

export default Stock
