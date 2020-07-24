import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";

import { getUsersAction, getUserAction } from "./userAction";

class User extends React.Component {
  constructor(props) {
    super(props);
  }

  getUserData = () => {
    // TODO: this is come form actual loggedIn User
    const userId = 1;
    const { getUser } = this.props;
    getUser(userId);
  };
  getUsersData = () => {
    const { getUsers } = this.props;
    getUsers();
  };
  render() {
    console.log("@@@@@@", this.props);
    return (
      <div>
        <button onClick={this.getUsersData}>get users</button>
        <button onClick={this.getUserData}>get user</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.userState.users.result,
    user: state.userState.user.result,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: () => dispatch(getUsersAction()),
    getUser: (userId) => dispatch(getUserAction(userId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
