import React, { useState, useEffect } from "react";

const Practice7 = () => {
  const [posts, setPosts] = useState([]);
  const [showPost, setShowPost] = useState(false);
  const [postId, setPostId] = useState('');

  const endPoint = 'https://foxland.fi/wp-json/wp/v2/posts';

  const fetchPosts = () => {
    fetch(endPoint)
      .then(response => response.json())
      .then(posts => {
        console.log(posts);
        setPosts(posts);
      })
      .catch(error => console.error(error));
  }

  const Link = props => {
    return <a onClick={props.postDetails} href={`#${props.slug}`} id={props.id}>{props.text}</a>;
  };

  const postDetails = (e) => {
    setShowPost(true);
    setPostId(e.target.id);
  }

  const createMarkup = () => {
    const post = posts.filter( post => post.id === parseInt(postId) );
    return {__html: post[0].content.rendered};
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
    {!showPost ? (
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link slug={post.slug} id={post.id} text={post.title.rendered} postDetails={postDetails} />
          </li>
        ))}
      </ul>
    ) : (
      <>
        <p><a href="#" onClick={ () => setShowPost(false) }>Back to posts list</a>.</p>
        <div dangerouslySetInnerHTML={createMarkup()} />
      </>
    )}
    </>
  );
};

export default Practice7;
