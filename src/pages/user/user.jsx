import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import {
  getUsersAction,
  getUserAddressesAction,
  searchUsersAction,
} from "./userAction";
import { debounce } from "../../utils/common";
import Loader from "../../components/loader";

import Styles from "./user.module.css";

class User extends React.Component {
  componentDidMount = () => {
    const { getUsers } = this.props;
    getUsers();
  };
  onSearch = (event) => {
    const { searchUsers } = this.props;
    const searchText = event.target.value;
    // 500 milisecond of threshold for firing calls/search event
    const deboundedSearchFunction = debounce(
      () => searchUsers(searchText),
      500
    );
    deboundedSearchFunction();
  };
  render() {
    const { users, getUserAddresses, addresses } = this.props;
    const { result: userList, fetching: isUsersFetching } = users;
    const { result: addressList, fetching: isAddressesFetching } = addresses;
    return (
      <div className={Styles.main}>
        <h1> Search for user details </h1>
        <div className={Styles.container}>
          <div className={Styles.leftSubContainer}>
            <input
              type="text"
              aria-label="Search through users"
              className={Styles.inputSearch}
              placeholder="Search for name"
              onKeyUp={this.onSearch}
            />
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
                      tabIndex="-1"
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
                  <h2 className={Styles.noDataFound}> No data found </h2>
                )}
              </ul>
            )}
          </div>
          <div className={Styles.rightSubContainer}>
            {isAddressesFetching ? (
              <div className={Styles.loaderContainer}>
                <Loader />
              </div>
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
                  <h2 className={Styles.noDataFound}> No data found </h2>
                )}
              </ul>
            )}
          </div>
        </div>
      </div>
    );
  }
}

// This can move to a different file on a full fledge app. e.g users.selector.js
const userFilterSelector = (stateObj) => {
  const userList = stateObj && stateObj.result;
  if (
    userList &&
    userList.length > 0 &&
    stateObj.searchText &&
    stateObj.searchText.trim()
  ) {
    const filteredData = userList.filter((item) =>
      item.name.toLowerCase().includes(stateObj.searchText.toLowerCase().trim())
    );
    return { ...stateObj, result: filteredData };
  } else {
    return stateObj;
  }
};

const mapStateToProps = (state) => {
  return {
    users: userFilterSelector(state.userState.users),
    addresses: state.userState.addresses,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: () => dispatch(getUsersAction()),
    getUserAddresses: (userId) => dispatch(getUserAddressesAction(userId)),
    searchUsers: (searchText) => dispatch(searchUsersAction(searchText)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
