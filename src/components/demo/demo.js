import React, { Component } from 'react';
import axios from 'axios';

class ApiDemo extends Component {



    ApiCall = () => {
        axios({
            url: "http://api.eia.gov/series/?api_key=1f954176e259b0572af6796cad68fad0&series_id=PET.EMM_EPMRU_PTE_SMN_DPG.W",
            method: 'GET',
        })
            .then(response => {
                let gas = response.data.series[0].data[0][1];
                console.log(response.data);
                console.log(gas);
            })
            .catch(err => {
                console.error(err);
            });
    };

    render() {
        // const { classes } = this.props;
        return (
            <div>
                <button onClick={this.ApiCall}>Gasszz </button>
            </div>
        );

    }
}

export default ApiDemo;