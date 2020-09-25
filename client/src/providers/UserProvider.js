import React from "react";

// Set up the initial context
export const UserContext = React.createContext();
// ^^^ export? (it was export in james' code - something to watch)

// Create an exportable consumer that can be injected into components

export const UserConsumer = UserContext.Consumer;

// Create the provider using a traditional React.Component class

class UserProvider extends React.Component {
  state = {
    name: "Jon the Man",
    email: "jon@devpoints.com",
    avatar: " :D ",
    updateUser: (u) => this.updateUser(u), // this is a new function from james' note?
  };

  updateUser = (account_user) => {
    this.setState({ ...account_user });
  };

  render() {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
export default UserProvider;
