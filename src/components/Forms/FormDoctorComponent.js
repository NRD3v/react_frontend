import React, {Component} from "react"
import {connect} from "react-redux";
import {highlightLink, resetHighlightedLink, selectCity, selectPractice} from "../../store/actions/links"
import {fetchDoctors, resetDoctors} from "../../store/actions/doctors"
import {Button, Form} from "reactstrap";

class FormDoctorComponent extends Component {
    constructor(props) {
        super(props);
        this.handleChangeCity = this.handleChangeCity.bind(this);
        this.handleChangePractice = this.handleChangePractice.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeCity(e) {
        this.props.selectCity(e.target.value);
        this.props.selectPractice(null);
        this.resetFetchedData();
    }

    handleChangePractice(e) {
        this.props.selectPractice(e.target.value);
        this.resetFetchedData();
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.props.selectedCity && this.props.selectedPractice) {
            let params = {
                city: this.props.selectedCity,
                practice: this.props.selectedPractice,
                searchType: "search_by_city_and_practice"
            };
            this.props.fetchDoctors(params);
            this.props.highlightLink(this.props.selectedCity + this.props.selectedPractice.replace(/\s/g,""));
        }
    }

    resetFetchedData() {
        this.props.resetDoctors([]);
        this.props.resetHighlightedLink(null);
    }

    render() {
        let practicesOptions = null;
        if (this.props.selectedCity) {
            let practices = this.props.links[this.props.selectedCity];
            if (practices) {
                practicesOptions = practices.map(practice => {
                    return <option value={practice} key={practice}>{practice}</option>
                })
            }
        } else {
            practicesOptions = null;
        }

        return (
            <Form onSubmit={e => this.handleSubmit(e)} className={'row offset-2 col-8 mt30 mb20'}>
                <select onChange={e => this.handleChangeCity(e)} value={this.props.selectedCity || ''}
                        className={'col-4 custom-select'}>
                    <option value="null">Choisir une ville</option>
                    {Object.keys(this.props.links).map(city => {
                        return <option value={city} key={city}>{city}</option>
                    })}
                </select>

                <select onChange={e => this.handleChangePractice(e)} value={this.props.selectedPractice || ''}
                        className={'col-4 custom-select'}>
                    <option value="null">Choisir une spécialité</option>
                    {practicesOptions}
                </select>

                <Button className={'btn-primary col-4'}>ENVOYER</Button>
            </Form>
        )
    }
}

const mapStateToProps = state => ({
    doctors: state.doctors.list,
    links: state.links.list,
    selectedCity: state.links.selectedCity,
    selectedPractice: state.links.selectedPractice
});

export default connect(mapStateToProps, {
    fetchDoctors,
    resetDoctors,
    highlightLink,
    resetHighlightedLink,
    selectCity,
    selectPractice
})(FormDoctorComponent);
