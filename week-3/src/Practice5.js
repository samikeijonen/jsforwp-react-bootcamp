import React from "react";

const Practice5 = () => {
  const user = {
    id: 1,
    userName: "samikeijonen",
    firstName: "Sami",
    lastName: "Keijonen",
    preferredName: "Zac",
    url: "https://foxland.fi",
    twitter: "samikeijonen"
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
  2. Destructure all of the props you will need 
  3. Pass the firstName and lastName to <FullName />
  4. Pass the username to <Username />
  5. Pass the url and twitter to <Social />
*/
const User = (props) => {
  const {firstName, lastName, userName, url, twitter} = props;
  return (
    <div className="user">
      <FullName firstName={firstName} lastName={lastName} />
      <Username userName={userName} />
      <Social url={url} twitter={twitter} />
    </div>
  );
};

/*
  6. Destructure the props needed
*/
const FullName = (props) => {
  const {firstName, lastName} = props;
  return (
    <h1>
      {firstName} {lastName}
    </h1>
  );
};

/*
  7. Create a <Username /> component that displays the username
*/
const Username = (props) => {
  const {userName} = props;
  return (
    <p>
      Username: {userName}
    </p>
  );
};

/*
  8. Destructure the props you will need
  9. Make the Website and Twitter links work based on props
*/
const Social = props => {
  const {url, twitter} = props;
  return (
    <ul className="social">
      <li>
        <a href={url}>Website</a>
      </li>
      <li>
        <a href={`https://twitter.com/${twitter}`}>Twitter</a>
      </li>
    </ul>
  );
};

export default Practice5;
