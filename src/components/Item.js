import React, { Component } from 'react';

class Item extends Component {

  render() {
    return (
        <div className="tableRow">
          <div className="tablecell">
            {this.props.post.firstName}
          </div>
          <div className="tablecell">
            {this.props.post.lastName}
          </div>
          <div className="tablecell">
            {this.props.post.phone}
          </div>
          <div className="tablecell">
            {this.props.post.age}
          </div>
          <div className="tablecell">
            <button className="btn-danger" onClick={this.props.delete}>Delete</button>
          </div>
      </div>
    );
  }
}

export default Item;