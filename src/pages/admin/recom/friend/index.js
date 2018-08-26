import React, { Component } from 'react';
import './index.scss';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { connect } from 'react-redux'
import { switchSRC } from '../../../../redux/action'
class Friend extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.handel = this.handel.bind(this);
  }
  handel(){
    const {dispatch} = this.props;
    let src=28844472;
    dispatch(switchSRC(src))
  }
  render() {
    return (
        <div className="friend">
          <Card>
            <CardMedia
              className="media"
              image="/assets/shenwei.jpg"
              title="Live from space album cover"
            />
            <button onClick={this.handel}>adsf</button>
          </Card>
        </div>
    );
  }
}
export default connect()(Friend)