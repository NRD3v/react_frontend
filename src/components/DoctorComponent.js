import React from "react";
import {Card, CardBody, Col, Row} from "reactstrap";

export default function DoctorComponent({doctor}) {
    return (
        <Card className={'col-6 p10'}>
            <CardBody>
                <Row>
                    <Col className={'col-4'}>
                        <img src={require('../images/Photo.jpg')} className="imageRadius2" alt="" width="100" />
                    </Col>
                    <Col className={'col-8 card-text h-50 maxh50'}>
                        <span>{doctor.name}</span>
                        <br/>
                        <span className={'grey'}>{doctor.city}</span>
                        <br/>
                        <span className={'small'}>
                            {doctor.practice.map((practice, index) => {
                                return <span key={index}>{(index ? ', ' : '') + practice}</span>
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
