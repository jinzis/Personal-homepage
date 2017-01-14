
'use strict'

import './scss/index.scss'
import React ,{Component} from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, hashHistory, Link, browserHistory} from 'react-router'
import Introduce from './components/Introduce'
import works from './components/works'
import Contact from './components/Contact'
import Heart from './components/Heart'

const Home = React.createClass({
    componentWillMount() {
        ~(function(){
            let degW = 640,
                winW = document.documentElement.clientHeight,
                radio = 1
            if(winW>degW) {
                document.documentElement.style.fontSize = 100 + 'px'
            }
            document.documentElement.style.fontSize = (degW/winW)*100 + 'px'
        })()
    },
    render() {
        let path = this.props.location.pathname
        return(
            <div className="page">
                <header className="header">
                    <div className="logo">
                        <div className="left">
                            <Heart />
                        </div>
                        <span>jinxin</span>
                    </div>
                    <nav className="nav">
                        <ul>
                            <li className={path=='/'?'current':''}><Link to="/">Home</Link></li>
                            <li className={path=='/works'?'current':''}><Link to="/works">works</Link></li>
                            <li className={path=='/contact'?'current':''}><Link to="/contact">Contact</Link></li>
                        </ul>
                    </nav>
                </header>
                <div className="content">
                    {path == "/" ? <Introduce /> : this.props.children}
                </div>
                <footer className="mail"><span className="mail-icon">@</span>联系方式：jinxin199028@sina.com</footer>
            </div>
        )
    }
}) 
ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/"component={Home}>
            <Route path="/works" component={works}></Route>
            <Route path="/contact" component={Contact}></Route>
        </Route>
    </Router>
)
    ,document.getElementById("app"))


