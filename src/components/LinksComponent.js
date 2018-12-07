import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchDoctors} from "../store/actions/doctors";
import {highlightLink, selectCity, selectPractice} from "../store/actions/links";

class LinksComponent extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick = (city, practice) => {
        let params = { city, practice, searchType: "search_by_city_and_practice" };
        this.props.fetchDoctors(params);
        this.props.highlightLink(city + practice.replace(/\s/g,""));
        this.props.selectCity(city);
        this.props.selectPractice(practice);
    };

    render() {
        return (
            <div>
                <p>{this.props.city}</p>
                <ul>
                    {this.props.links[this.props.city].map((practice) => {
                        let highlight = '';
                        if (this.props.city + practice.replace(/\s/g,"") === this.props.highlightedLink) {
                            highlight = 'highlight'
                        }
                        return (
                            <li key={this.props.city + practice} className={highlight}>
                                <a href="#" onClick={() => this.onClick(this.props.city, practice)}>
                                    { practice }
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    doctors: state.doctors.list,
    highlightedLink: state.links.highlightedLink,
    links: state.links.list
});

export default connect(mapStateToProps, {fetchDoctors, highlightLink, selectCity, selectPractice})(LinksComponent);

const style = {
  highlight: {
      fontWeight: 'bold'
  }
};
