
'use strict'

import React ,{Component} from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, hashHistory, Link, browserHistory} from 'react-router'
import Buttons from './components/Buttons'
import Project from './components/Project'
import Contact from './components/Contact'

const Home = React.createClass({
    render() {
        return(
            <header className="header">
                <div className="logo">jinxin</div>
                <nav className="nav">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/project">Project</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
                {this.props.children}
            </header>
        )
    }
}) 
ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/"component={Home}>
            <Route path="/project" component={Project}></Route>
            <Route path="/contact" component={Contact}></Route>
        </Route>
    </Router>
)
    ,document.getElementById("app"))


