
'use strict'

import './scss/index.scss'
import React ,{Component} from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, hashHistory, Link, browserHistory} from 'react-router'
let MediaQuery = require('react-responsive')
import Introduce from './components/Introduce'
import works from './components/works'
import Contact from './components/Contact'
import Heart from './components/Heart'

class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            flag:false
        }
    }
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
    }
    handleClick() {//控制移动端点击按钮导航的显示和隐藏
        this.setState(
            {
                flag:!this.state.flag
            }
        )
    }
    menuHidden() {//控制移动端点击导航中的某一项让导航隐藏
        this.setState(
            {
                flag:!this.state.flag
            }
        )
    }
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
                        {/*移动端显示的导航*/}
                        <MediaQuery query='(max-width: 768px)'>
                             <div className="nav-mobile" onClick={()=>this.handleClick()}>
                                <span className="btn-icon"></span>
                             </div>
                             {this.state.flag==false?'':
                             <ul>
                                <li className={path=='/'?'current':''} onClick={()=>this.menuHidden()}><Link to="/">Home</Link></li>
                                <li className={path=='/works'?'current':''} onClick={()=>this.menuHidden()}><Link to="/works">Works</Link></li>
                                <li className={path=='/contact'?'current':''} onClick={()=>this.menuHidden()}><Link to="/contact">Contact</Link></li>
                            </ul>}
                        </MediaQuery>
                        {/*PC端显示的导航*/}
                        <MediaQuery query='(min-width: 769px)'>
                                <ul>
                                    <li className={path=='/'?'current':''}><Link to="/">Home</Link></li>
                                    <li className={path=='/works'?'current':''}><Link to="/works">Works</Link></li>
                                    <li className={path=='/contact'?'current':''}><Link to="/contact">Contact</Link></li>
                                </ul>
                        </MediaQuery>
                    </nav>
                </header>
                <div className="content">
                    {path == "/" ? <Introduce /> : this.props.children}
                </div>
                <footer className="mail"><span className="mail-icon">@</span>联系方式：jinxin199028@sina.com</footer>
            </div>
        )
    }
}
ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/"component={Home}>
            <Route path="/works" component={works}></Route>
            <Route path="/contact" component={Contact}></Route>
        </Route>
    </Router>
),document.getElementById("app"))




