import axios from "axios";
import React, { Component } from "react";
import { Card, } from 'react-bootstrap'
import Statedata from './Statedata'

class India extends Component {
    constructor() {
        super()
        this.state ={
            data: {}
        }
    }

    componentDidMount(){
        axios.get("https://corona.lmao.ninja/v2/countries/india").then(response=>{
            this.setState({data: response.data})
            // console.log(response.data);
        })
    }


    render() {
        return (
            <div className='row'>
                <div className='col-md-12'>
                    <img src="https://www.countryflags.io/in/shiny/64.png" />
                    <h3>INDIA</h3>
                </div>

                <div className='col-md-12'>
                    <div className='row'>
                        <div className="col-md-3">
                            <Card className='badge badge-primary'>
                                <Card.Header><h4>TOTAL CASES</h4></Card.Header>
                                <Card.Body className='text-center'>
                                    <Card.Title>{this.state.data.cases} </Card.Title>
                                    <Card.Text>
                                    [ Today : {this.state.data.todayCases} ]
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>

                        <div className="col-md-3">
                            <Card className='badge badge-warning'>
                                <Card.Header><h4>ACTIVE CASES</h4></Card.Header>
                                <Card.Body className='text-center'>
                                    <Card.Title>{this.state.data.active} </Card.Title>
                                    <Card.Text>
                                    [ Today : {this.state.data.todayCases} ]
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>

                        <div className="col-md-3">
                            <Card className='badge badge-success'>
                                <Card.Header><h4>RECOVERED CASES</h4></Card.Header>
                                <Card.Body className='text-center'>
                                    <Card.Title>{this.state.data.recovered}</Card.Title>
                                    <Card.Text>
                                    [ Today : {this.state.data.todayRecovered} ]
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>

                        <div className="col-md-3">
                            <Card className='badge badge-danger'>
                                <Card.Header><h4>DEATH CASES</h4></Card.Header>
                                <Card.Body className='text-center'>
                                <Card.Title>{this.state.data.deaths}</Card.Title>
                                    <Card.Text>
                                    [ Today : {this.state.data.todayDeaths} ]
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>


                        <div className='col-md-12'>
                            <Statedata />
                        </div>


                    </div>
                </div> 

            </div>
        )

    }
}

export default India