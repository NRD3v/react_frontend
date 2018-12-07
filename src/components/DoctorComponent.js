import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchLinks} from "../store/actions/links";
import {fetchDoctors, resetDoctors} from "../store/actions/doctors";

class DoctorComponent extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
    }

    render() {
        return (
            <div>
                <h5>{this.props.doctor.name}</h5>
                <h6>{this.props.doctor.city}</h6>
                <ul>
                    {this.props.doctor.practice.map((practice, index) => {
                        return <span key={index}>{ (index ? ', ' : '') + practice}</span>
                    })}
                </ul>
                <p>Prendre RDV</p>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    doctors: state.doctors.list,
    links: state.links.list
});

export default connect(mapStateToProps, {fetchLinks, fetchDoctors, resetDoctors})(DoctorComponent);
