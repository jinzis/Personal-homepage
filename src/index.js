
'use strict';

import React ,{Component} from 'react';
import ReactDOM from 'react-dom';
import Buttons from './components/Buttons'

class Helloworld extends Component {
    render() {
        return(
            <h1>hello1</h1>
        )
    }
}

ReactDOM.render(<Buttons />,document.getElementById("app"));


