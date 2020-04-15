import React from "react";

function LoggedOutContent() {
  return(
    'Logged out. Login to view content'
  );
}

function Content(props) {
  console.log(props);
  const statusText = props.status ? props.postTitle : <LoggedOutContent />; 
  return(
    <h1>{statusText}</h1>
  );
}

function Button(props) {
  return(
    <button onClick={props.onClick}>{props.text}</button>
  );
}

class PractiseOfTheWeek extends React.Component {
  state = {
    loggedIn: false,
    postTitle: 'Test',
    postContent: '',
  }

  componentDidMount() {
    fetch('https://foxland.fi/wp-json/wp/v2/posts')
      .then(function (response) {
      // The API call was successful!
      if (response.ok) {
        return response.json();
      } else {
        return Promise.reject(response);
      }
    }).then(function (data) {
      // This is the JSON from our response
      this.setState({
        loggedIn: true,
        postTitle: data[0].title.rendered
      });
    }).catch(function (err) {
      // There was an error
      console.warn('Something went wrong.', err);
    });
  }

  changeStatus = () => {
    console.log(this.state.loggedIn);
    this.setState({ loggedIn: ! this.state.loggedIn });
  };

  render() {
    return(
      <>
        <Button onClick={this.changeStatus} text={this.state.loggedIn ? 'Log out': 'Log in'} />
        <Content status={this.state.loggedIn} postTitle={this.state.postTitle} />
      </>
    );
  }
}

export default PractiseOfTheWeek;