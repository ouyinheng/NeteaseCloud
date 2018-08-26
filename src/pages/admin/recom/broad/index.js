import React, { Component } from 'react';
import './index.scss';
import { connect } from 'react-redux'

class Broad extends Component {
  
  render() {
    const { src } = this.props;
    return (
        <div className="broad">
            <div>{src}</div>
            this is broad
        </div>
    );
  }
}
const mapStateToProps = state => {
  return {
      src: state.src
  }
};
export default connect(mapStateToProps)(Broad)