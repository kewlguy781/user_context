import React from "react";
import { Form } from "semantic-ui-react";

// const UserForm = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");

class UserForm extends React.Component {
  state = { name: "", email: "" };

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("HELLO JON");
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

export default UserForm;
