import React, {Component} from 'react'

class Buttons extends Component{
    handleClick() {
        alert("点我！")
    }
    render() {
        const style = require('../scss/buttons.scss')
        return (
            <button className="my-button" onClick={this.handleClick.bind(this)}>
            我是一个按钮aaaa
            </button>
        )
    }
}

export default Buttons