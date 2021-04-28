import axios from "axios";
import React, { Component } from "react";
import { Accordion, Button, Card } from "react-bootstrap";

class Statedata extends Component {

    constructor() {
        super()
        this.state = {
            stateData: {}
        }
    }

    componentDidMount() {
        axios.get("https://api.covid19india.org/state_district_wise.json").then(response => {
            this.setState({ stateData: response.data })
        })
    }

    render() {

        let keys = Object.keys(this.state.stateData)

        return (
            <div className="row mt-4">
                <div className="col-md-12">
                    <Accordion>
                        {
                            keys.map((item, key) => {
                                let districts = this.state.stateData[item].districtData
                                let district_keys = Object.keys(districts)

                                let total_active = 0
                                let total_confirmed = 0
                                let total_death = 0
                                let total_recovery = 0

                                let distrcit_list = []

                                for (let x in districts) {
                                    total_active += districts[x].active
                                    total_confirmed += districts[x].confirmed
                                    total_death += districts[x].deceased
                                    total_recovery += districts[x].recovered

                                    let ob = districts[x]
                                    ob["district_name"] = x
                                    distrcit_list.push(ob)
                                }

                                // console.log(distrcit_list);


                                return (
                                    <Card>
                                        <Card.Header>
                                            <Accordion.Toggle as={Button} variant="primary" eventKey={key}>
                                                {item} - <span className="btn-light p-2 mr-2">Total Cases {total_confirmed}</span> <span className="btn-light p-2 mr-2">Active {total_active}</span> <span className="btn-light p-2 mr-2">Recovered {total_recovery}</span> <span className="btn-light p-2 mr-2">Death {total_death}</span>
                                            </Accordion.Toggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey={key}>
                                            <Card.Body>
                                                <table className='table table-bordered table-striped'>
                                                    <thead>
                                                        <tr>
                                                            <td>District</td>
                                                            <td>Confirmed</td>
                                                            <td>Active</td>
                                                            <td>Recovered</td>
                                                            <td>Deaths</td>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        
                                                            {
                                                                distrcit_list.map((item, key) => {
                                                                    return (
                                                                        <tr>
                                                                            <td>{item.district_name}</td>
                                                                            <td>{item.confirmed}</td>
                                                                            <td>{item.active}</td>
                                                                            <td>{item.recovered}</td>
                                                                            <td>{item.deceased}</td>
                                                                        </tr>
                                                                    )
                                                                })
                                                            }
                                                        
                                                    </tbody>

                                                </table>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                )
                            })
                        }


                    </Accordion>
                </div>

            </div>
        )
    }

}

export default Statedata