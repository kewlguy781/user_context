import React from "react";
import { Form } from "semantic-ui-react";
import { UserConsumer } from "../providers/UserProvider";

// const UserForm = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");

class UserForm extends React.Component {
  state = { name: this.props.name, email: this.props.email };

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("HELLO JON");
    this.props.updateUserProp(this.state);
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          // control={Input}
          name="name"
          label="Name"
          value={this.state.name}
          placeholder="Enter Name"
          onChange={this.handleChange}
        />
        <Form.Input
          name="email"
          label="E-Mail"
          value={this.state.email}
          placeholder="Enter E-Mail"
          onChange={this.handleChange}
        />
        <Form.Button color="teal">Update</Form.Button>
      </Form>
    );
  }
}

// export default UserForm;

const ConnectedUserForm = (props) => {
  return (
    <UserConsumer>
      {(value) => (
        <UserForm //(then in User, change from UserForm to ConnectedUserForm)
          {...props} // passing any props that were given prevoulsy
          name={value.name}
          email={value.email}
          updateUserProp={value.updateUser}
        />
      )}
    </UserConsumer>
  );
};

export default ConnectedUserForm;
