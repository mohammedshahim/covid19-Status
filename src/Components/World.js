import axios from 'axios'
import React, { Component } from 'react'

class World extends Component {
    constructor() {
        super()
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        axios.get('https://corona.lmao.ninja/v2/countries').then(response => {
            // console.log(response.data);
            this.setState({ data: response.data })
        })
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <table className="table table-primary table-bordered table-striped">
                        <thead>
                            <tr>
                                <td>Country</td>
                                <td>Total Cases</td>
                                <td>Recovered</td>
                                <td>Death</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.data.map((item, key) => {
                                    return (
                                        <tr>
                                            <td>{item.country}
                                            <img src={item.countryInfo.flag} style={ {width:'64px', marginLeft:"10px"} } />
                                            </td>
                                            <td>{item.cases}</td>
                                            <td>{item.recovered}</td>
                                            <td>{item.deaths}</td>                                            
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )

    }
}

export default World