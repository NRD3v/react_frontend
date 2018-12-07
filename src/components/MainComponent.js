import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchLinks} from "../store/actions/links";
import DoctorComponent from "./DoctorComponent";
import LinksComponent from "./LinksComponent";
import FormDoctorComponent from "./Forms/FormDoctorComponent";

class MainComponent extends Component {
    componentWillMount() {
        this.props.fetchLinks();
    }

    render() {
        return (
            <div>
                <div style={style.title}>
                    <h1>
                        <img src="https://www.medoucine.com/images/logos/logo.svg" width="350" alt=""/>
                    </h1>
                </div>

                <div>
                    <FormDoctorComponent />
                </div>

                <div>
                    {this.props.doctors.map(doctor => {
                        return <DoctorComponent doctor={doctor} key={doctor.name} />
                    })}
                </div>

                <div>
                    {Object.keys(this.props.links).map(city => {
                        return <LinksComponent city={city} key={city}/>
                    })}
                </div>
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
        display: 'flex',
        justifyContent: 'center'
    }
};
