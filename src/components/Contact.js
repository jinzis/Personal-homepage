import '../scss/contact.scss'
import React, {Component} from 'react'

class Contact extends Component{
    
    render() {
        
        return (
            <div className="contact">
                <p className="link">若对本网页中的demo有疑问的，欢迎指正！</p>
                <p className="blog">博客：</p>
                <p className="qq">QQ:2162116022</p>
            </div>
        )
    }
}

export default Contact