import React, { Component } from 'react';

import Item from './Item.js'

class ItemList extends Component {

  render() {
    return (
      <div className="tableWrapper">
        <h2 className="center">Table Items</h2>
        <div className="table">
          <div className="tableRow">
            <div className="tablecell" onClick={() => this.props.sort('firstName')}>
              First Name
            </div>
            <div className="tablecell" onClick={() => this.props.sort('lastName')}>
              Last Name
            </div>
            <div className="tablecell" onClick={() => this.props.sort('phone')}>
              Phone
            </div>
            <div className="tablecell" onClick={() => this.props.sort('age')}>
              Age
            </div>
            <div className="tablecell">
              Action
            </div>
          </div>
          {this.props.posts.map((post, index) =>
            <Item key={index} post={post} delete={this.props.delete.bind(this,index)} />
          )}
        </div>
      </div>
    );
  }
}

export default ItemList;