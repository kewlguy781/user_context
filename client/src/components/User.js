import React from "react";
import { Card } from "semantic-ui-react";

const User = () => {
  return (
    <Card>
      <Card.Content>
        <Card.Header>USER</Card.Header>
        <Card.Meta>AVATAR</Card.Meta>
      </Card.Content>
      <Card.Content>
        <p>EMAIL</p>
      </Card.Content>
    </Card>
  );
};

export default User;
