import React, { Component } from 'react';
import './index.scss';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

export default class Friend extends Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  render() {
    return (
        <div className="friend">
            <div>
              <Button onClick={this.handleClickOpen}>Open full-screen dialog</Button>
              <Dialog
                fullScreen
                open={this.state.open}
                onClose={this.handleClose}
                TransitionComponent={Transition}
              >
                asdf
              </Dialog>
            </div>
        </div>
    );
  }
}