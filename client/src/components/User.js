import React, { useContext } from "react";
import { Card } from "semantic-ui-react";
import { UserContext } from "../providers/UserProvider";

const User = () => {
  const auth = useContext(UserContext);
  return (
    <Card>
      <Card.Content>
        <Card.Header>{auth.name}</Card.Header>
        <Card.Meta>{auth.avatar}</Card.Meta>
      </Card.Content>
      <Card.Content>
        <p>{auth.email}</p>
      </Card.Content>
    </Card>
  );
};

export default User;
