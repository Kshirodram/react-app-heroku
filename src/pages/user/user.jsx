import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { getUsersAction, getUserAddressesAction } from "./userAction";
import Loader from "../../components/loader";

import Styles from "./user.module.css";

class User extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { getUsers } = this.props;
    getUsers();
  }
  render() {
    console.log("@@@@@@", this.props);
    const { users, getUserAddresses, addresses } = this.props;
    const { result: userList, fetching: isUsersFetching } = users;
    const { result: addressList, fetching: isAddressesFetching } = addresses;
    return (
      <div className={Styles.container}>
        <div className={Styles.leftSubContainer}>
          {isUsersFetching ? (
            <Loader />
          ) : (
            <ul className={Styles.userList}>
              {userList && userList.length > 0 ? (
                userList.map((item) => (
                  <li
                    key={item.id}
                    className={Styles.user}
                    onClick={() => getUserAddresses(item.id)}
                  >
                    <p>
                      {item.name}, <i>age:</i> {item.age}
                    </p>
                    <p>
                      <span>{item.email}</span>
                    </p>
                  </li>
                ))
              ) : (
                <h2> no data found </h2>
              )}
            </ul>
          )}
        </div>
        <div className={Styles.rightSubContainer}>
          {isAddressesFetching ? (
            <Loader />
          ) : (
            <ul className={Styles.addressList}>
              {addressList && addressList.length > 0 ? (
                addressList.map((item) => (
                  <li key={item.id} className={Styles.address}>
                    <p>
                      {item.houseNo}, {item.lane1}
                    </p>
                    <p>
                      {item.lane2}, {item.city}
                    </p>
                    <p>
                      {item.state}, {item.country}, {item.postalCode}
                    </p>
                    <p>
                      <span>{item.email}</span>
                    </p>
                  </li>
                ))
              ) : (
                <h2> no data found </h2>
              )}
            </ul>
          )}
        </div>
        {/* <button onClick={this.getUsersData}>get users</button> */}
        {/* <button onClick={this.getUserData}>get user</button> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.userState.users,
    addresses: state.userState.addresses,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: () => dispatch(getUsersAction()),
    getUserAddresses: (userId) => dispatch(getUserAddressesAction(userId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
