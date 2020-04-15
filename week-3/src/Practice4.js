import React from "react";

const Practice4 = () => {
  const user = {
    id: 1,
    username: "zgordon",
    firstName: "Xami",
    lastName: "Gordon",
    preferredName: "Zac",
    url: "https://zacgordon.com",
    twitter: "@zgordon"
  };
  return (
    <div className="practice">
      {/*         
        1. Spread the "user" object into User so each "user" property becomes it's own prop
      */}
      <User {...user} />
    </div>
  );
};

/*
  2. Destructure username and firstName from props
*/
const User = (props) => {
  const {firstName, username} = props;
  return (
    <div className="user">
      <h1>{firstName}</h1>
      <p>Username: {username}</p>
    </div>
  );
};

export default Practice4;
