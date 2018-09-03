
import React,{ Component } from 'react';
import './index.scss';
import Table from '../../components/oyh/table'
class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render(){
        return (
            <div className="test">
                <Table/>
            </div>
        )
    }
}
export default Test;
