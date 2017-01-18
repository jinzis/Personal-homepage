import '../scss/table.scss'
import React, {Component} from 'react'

const Table = (props) => {
    let ths = [],
        tds = [],
        Tbody
    
    for(var key in props.obj){
        ths.push(key)
        tds.push(props.obj[key])
    }
    return(
    <table>
        <thead>
            <tr>
                {ths.map((item,index) => {
                    return <th key={index}>{item}</th>
                })}
            </tr>
        </thead>
        {!props.data&&props.data.length==0 ? <p>暂时没有数据</p>:
            <tbody>
                {props.data.map((item,index) => (
                    <tr key={index}>{tds.map((listItem,listIndex) => (
                        <td key={listIndex}>{listItem(item)}</td>
                    ))}</tr>
                ))}
            </tbody>
        }

    </table>)
}
export default Table