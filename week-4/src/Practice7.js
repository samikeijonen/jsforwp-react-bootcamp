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
    const markup =
      `<h1 className="entry__title">${post[0].title.rendered}</h1>
        <div className="entry__content">${post[0].content.rendered}</div>
      `;
    return {__html: markup};
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
    {!showPost ? (
      <article className="entry">
        <h1>Posts lists</h1>
        <div className="entry__content">
          <ul>
            {posts.map(post => (
              <li key={post.id}>
                <Link slug={post.slug} id={post.id} text={post.title.rendered} postDetails={postDetails} />
              </li>
            ))}
          </ul>
        </div>
      </article>
    ) : (
      <>
        <p><a href="#home" onClick={ () => setShowPost(false) }>Back to posts list</a>.</p>
        <article className="entry" dangerouslySetInnerHTML={createMarkup()} />
      </>
    )}
    </>
  );
};

export default Practice7;
