import '../scss/introduce.scss'
import React, {Component} from 'react'

class Introduce extends Component{
    
    render() {
        return (
            <div className="introduce">
                <p className="title">Hello there,I'm <span className="name">JinXin</span>.Welcome to my Personal homepage!</p>
                <dl className="detail">
                    <dt>本网页的技术栈：</dt>
                    <dd>React + JSX + react-router + webpack + Eslint + sass</dd>
                </dl>
                <p className="tip">此网页只做简单的works的展示，后期再进行其他内容的添加。</p>
            </div>
        )
    }
}

export default Introduce