import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchLinks} from "../store/actions/links";
import {fetchDoctors, resetDoctors} from "../store/actions/doctors";
import {Card, CardBody, Col, Row} from "reactstrap";

class DoctorComponent extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
    }

    render() {
        return (
            <Card className={'col-6 p10'}>
                <CardBody>
                    <Row>
                        <Col className={'col-4'}>
                            <img src={require('../images/Photo.jpg')} className="imageRadius2" width="100" />
                        </Col>
                        <Col className={'col-8 card-text h-50 maxh50'}>
                            <span>{this.props.doctor.name}</span>
                            <br/>
                            <span className={'grey'}>{this.props.doctor.city}</span>
                            <br/>
                            <span className={'small'}>
                                {this.props.doctor.practice.map((practice, index) => {
                                    return <span key={index}>{ (index ? ', ' : '') + practice}</span>
                                })}
                            </span>
                            <br/>
                            <span className={'small font-weight-bold text-primary'}>Prendre RDV</span>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        )
    }
}

const mapStateToProps = state => ({
    doctors: state.doctors.list,
    links: state.links.list
});

export default connect(mapStateToProps, {fetchLinks, fetchDoctors, resetDoctors})(DoctorComponent);
