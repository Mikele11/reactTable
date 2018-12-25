import React, { Component } from 'react';

import CreateItem from './components/CreateItem.js'
import ItemList from './components/ItemList.js'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  state = {
    posts:[]
  }

  componentDidMount() {
    var storedData = localStorage.getItem("posts");
    if (storedData) {
      const posts = JSON.parse(storedData);
      this.setState({ posts: posts });
    } 
  }

  onDelete = (index) => {
    const {posts} = this.state;
    const newPosts = posts.filter((x,i) => i !== index )
    this.setState({ posts: newPosts});
    localStorage.setItem("posts",  JSON.stringify(newPosts));
  }
  
  onSubmit = (firstName, lastName, phone, age) => {
    const { posts } = this.state;
    const item = { firstName, lastName, phone, age }
    posts.push(item);
    localStorage.setItem("posts",  JSON.stringify(posts));
    this.setState({ posts: posts });
  }

  compareBy = (key) => {
    return function (a, b) {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    };
  }
 
  sortBy = (key) => {
    let postsCopy = [...this.state.posts];
    postsCopy.sort(this.compareBy(key));
    this.setState({posts: postsCopy});
  }

  render() {
    return (
      <div className="container">
        <CreateItem 
          submit={this.onSubmit}
        />
        <ItemList  
          delete={this.onDelete} 
          posts={this.state.posts}
          sort={this.sortBy}
        />
      </div>
    );
  }

}

export default App;
