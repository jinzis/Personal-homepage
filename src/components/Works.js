import '../scss/works.scss'
import React, {Component} from 'react'
import Table from './Table'

class Works extends Component{
    
    render() {
       let data = [{"name":"table-sort","play":"http://www.meidi.com","git":"www.git.io.com"}
       ,{"name":"resume","play":"ww.mhaha.com","git":"wwhhh.com"},{"name":"page","play":"ww.play.com","git":"ww.git.play.com"},
       {"name":"resume","play":"ww.mhaha.com","git":"wwhhh.com"},{"name":"page","play":"ww.play.com","git":"ww.git.play.com"}]
        return (
            <div className="works">
                <p className="demo">我的小demo</p>
                <Table 
                    data = {data}
                    obj = {{
                        "简介":(data) => data.name,
                        "演示地址":(data) => data.play,
                        "git地址":(data) => data.git
                    }}
                />
            </div>
        )
    }
}

export default Works