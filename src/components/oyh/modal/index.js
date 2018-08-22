import React,{Component} from 'react';
import './index.scss';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
function Transition(props) {
    return <Slide direction="up" {...props} />;
  }
export default class Modal extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: true
        }
        this.handleClose = this.handleClose.bind(this);
    }
    handleClose(){
        this.setState({
            open: false
        })
        // this.props.ModalClose();
    }
    render(){
        return (
            <div className="Modal">
                <Dialog
                    fullScreen
                    open={this.state.open}
                    onClose={this.handleClose}
                    TransitionComponent={Transition}
                >
                    { this.props.children }
                </Dialog>
            </div>
        )
    }
}