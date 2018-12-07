import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchLinks} from "../store/actions/links";
import DoctorComponent from "./DoctorComponent";
import LinksComponent from "./LinksComponent";
import FormDoctorComponent from "./Forms/FormDoctorComponent";
import {Row} from "reactstrap";

class MainComponent extends Component {
    componentWillMount() {
        this.props.fetchLinks();
    }

    render() {
        return (
            <div>
                <Row style={style.title}>
                    <h1 className={'display-3 text-center'}>
                        <img src="https://www.medoucine.com/images/logos/logo.svg" width="350" alt=""/>
                    </h1>
                </Row>

                <Row>
                    <FormDoctorComponent />
                </Row>

                <Row className={'offset-2 col-8'}>
                    {this.props.doctors.map(doctor => {
                        return <DoctorComponent doctor={doctor} key={doctor.name} />
                    })}
                </Row>

                <Row className={'offset-2 col-8 bt1 mt20'}>
                    {Object.keys(this.props.links).map(city => {
                        return <LinksComponent city={city} key={city}/>
                    })}
                </Row>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    doctors: state.doctors.list,
    links: state.links.list
});

export default connect(mapStateToProps, {fetchLinks})(MainComponent);

const style = {
    title: {
        backgroundColor: '#ECF1F4',
        display: 'flex',
        justifyContent: 'center',
        padding: 10
    }
};
