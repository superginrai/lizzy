import React, { Component } from 'react';
import axios from 'axios';

class GasPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            gasPrice: [],
        };
    }

    ApiCall = () => {
        axios({
            url: "http://api.eia.gov/series/?api_key=1f954176e259b0572af6796cad68fad0&series_id=PET.EMM_EPMRU_PTE_SMN_DPG.W",
            method: 'GET',
        })
            .then(response => {
                let gas = response.data.series[0].data[0][1];
                console.log(response.data);
                console.log(gas);
                this.setState({
                    gasPrice: gas.toFixed(2),
                });
            })
            .catch(err => {
                console.error(err);
            });
    };


    render() {
        return (
            <div>
                <div>
                    <p>
                        This page is about gas!!
      </p>
                    <button onClick={this.ApiCall}>Gasszz </button>
                    Gas costs about ${this.state.gasPrice} per gallon!
                </div>
            </div>
        );
    }
}
export default GasPage;