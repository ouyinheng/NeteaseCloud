import React, { Component } from 'react';
import './index.scss';
import ListItem from '@material-ui/core/ListItem';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    // this.toSearch = this.toSearch.bind(this)
  }

  render() {
    return (
        <Card className="footer">
          <ListItem button style={{padding:'0'}}>
            <CardMedia
              className="media"
              image="/assets/shenwei.jpg"
              title="Live from space album cover"
            />
          </ListItem>
        </Card>
    );
  }
}

export default Footer;