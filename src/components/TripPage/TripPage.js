import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import LocationSearchInput from '../LocationSearchInput/LocationSearchInput';

class GasPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            gasPrice: [],
            lat: '',
            lng: '',
        };
    }

    apiCall = () => {
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

    setHome = () => {
        this.setState({
            lat: '44.805870',
            lng: '-93.608780',
        });
    }

    setTrip = () => {
        const action = {
            type: 'SET_LOCATION',
            payload: this.state.lat,
        };
        this.props.dispatch(action);
        this.props.history.push('/gas');
    }

    componentDidMount() {
        // this.props.dispatch(fetchUser());
        this.apiCall();
    }

    render() {
        return (
            <div>
                <div>
                    <p>This page is about trips!!</p>
                    Gas costs about ${this.state.gasPrice} per gallon!
                    <p>Where are you Lizzy?</p>
                    <button onClick={this.setHome}>Home</button>
                    <button onClick={this.setJob1}>Job 1</button>
                    <button onClick={this.setJob2}>Job 2</button>
                    <button onClick={this.setValleyFair}>Valley Fair</button>
                    <button onClick={this.setJake}>Jake?</button>
                </div>
                <div>
                    <p>Or Somewhere else?</p>
                    <LocationSearchInput></LocationSearchInput>
                </div>
                <button onClick={this.setTrip}>Next</button>
            </div>
        );
    }
}
export default connect()(GasPage);