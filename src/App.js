import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./nav";
import Home from "./components/home/home";
import BaiHoc from "./components/BaiHoc/baihoc";
import Login from "./components/Login/login";
import LuyenGo from "./components/LuyenGo/luyengo";
import LessionsList from "./components/BaiHoc/LessionsList";
import Thidau from "./components/thidau/Thidau";
import TienDo from "./components/TienDo/tiendo";

class App extends Component {
    render() {
        return (
            <Router>
                <Nav />
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/baihoc" component={BaiHoc} />
                        <Route
                            path="/topics/:topicId"
                            component={LessionsList}
                        />
                        <Route path="/login" component={Login} />
                        <Route path="/luyengo" component={LuyenGo} />
                        <Route path="/tiendo" component={TienDo} />
                        <Route path="/thidau" component={Thidau} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
