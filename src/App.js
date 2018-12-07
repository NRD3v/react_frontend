import React, {Component} from "react";
import {Provider} from "react-redux";
import {store} from "./store/index";
import MainComponent from "./components/MainComponent";

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <MainComponent />
            </Provider>
        );
    }
}

export default App;
