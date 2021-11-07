import React from "react";
// import './App.css';
import Scard from "./Scard";
import "./View.css";

class View extends React.Component {
  buildPosts() {
    return this.props.posts.map((current, i) => (
      <Scard
        key={i}
        postId={current.postid}
        id={current.id}
        img={current.img}
        text={current.text}
        likes={current.likes}
        likeaction={this.props.likeaction}
      />
    ));
  }

  render() {
    return (
      <>
        <div>{this.buildPosts()}</div>
      </>
    );
  }
}

export default View;
