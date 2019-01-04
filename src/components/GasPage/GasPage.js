import React, { Component } from 'react';
import axios from 'axios';
import LocationSearchInput from '../LocationSearchInput/LocationSearchInput';
import { connect } from 'react-redux';

const mapReduxStateToProps = (reduxState) => (
    { reduxState }
);

class GasPage extends Component {
    // constructor(props) {
    //     super(props)

        state = {
            lat: '',
            lng: '',
            // gasPrice: [],
            // tripCost: [],
        };
    // }

    // apiCall = () => {
    //     axios({
    //         url: "http://api.eia.gov/series/?api_key=1f954176e259b0572af6796cad68fad0&series_id=PET.EMM_EPMRU_PTE_SMN_DPG.W",
    //         method: 'GET',
    //     })
    //         .then(response => {
    //             let gas = response.data.series[0].data[0][1];
    //             console.log(response.data);
    //             console.log(gas);
    //             this.setState({
    //                 gasPrice: gas.toFixed(2),
    //             });
    //         })
    //         .catch(err => {
    //             console.error(err);
    //         });
    // };

    job1 = () => {
        this.setState({
            lat: '44.910695',
            lng: '-93.525040',
        });
    }

    // job2 = () => {
    //     let cost = (this.state.gasPrice * .067).toFixed(2);
    //     this.setState({
    //         tripCost: cost,
    //     });
    // }

    // valleyFair = () => {
    //     let cost = (this.state.gasPrice * .33).toFixed(2);
    //     this.setState({
    //         tripCost: cost,
    //     });
    // }

    // jake = () => {
    //     let cost = (this.state.gasPrice * .77).toFixed(2);
    //     this.setState({
    //         tripCost: cost,
    //     });
    // }

    componentDidMount() {
        // this.props.dispatch(fetchUser());
        // this.apiCall();
        console.log(this.props.reduxState.setLocation);
    }

    render() {
        return (
            <div>
                <div>
                    Gas costs about ${this.state.gasPrice} per gallon!
                    <h2>{this.props.reduxState.setLocation.setLocation}</h2>
                    <h2>{this.props.reduxState.setLocation.setLng}</h2>
                    <p>Where are you going Lizzy?</p>
                    <button onClick={this.job1}>Job 1</button>
                    <button onClick={this.job2}>Job 2</button>
                    <button onClick={this.valleyFair}>Valley Fair</button>
                    <button onClick={this.jake}>Jake?</button>
                </div>
                <div>
                    <p>Or Somewhere else?</p>
                    <LocationSearchInput></LocationSearchInput>
                </div>
                <button>Next</button>
            </div>
        );
    }
}
export default connect(mapReduxStateToProps) (GasPage);