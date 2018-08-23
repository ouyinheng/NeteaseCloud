import React, { Component } from 'react';
import './index.scss';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
export default class Friend extends Component {
  render() {
    return (
        <div className="friend">
          <Card>
            <CardMedia
              className="media"
              image="/assets/shenwei.jpg"
              title="Live from space album cover"
            />
          </Card>
        </div>
    );
  }
}