import React, { Component } from 'react'
import { bindActionCreators } from "redux"
import { connect } from 'react-redux'
import * as actions from "./userActions"
import './userComponent.css'

class UserPage extends Component {

    componentDidMount() {
        this.props.fetchUsers();
    }

    render() {
        let { users } = this.props.users;
        return (
            <div className="users">
                {
                    !users ?
                        <div />
                        :
                        <div>
                            {
                                users.map((item, index) => {
                                    return (
                                        <div key={item.name} className="user">
                                            Name: {item.name} <br />
                                            E-Mail: {item.email} <br />
                                            Phone:  {item.email} <br />
                                            City:  {item.address && item.address.city} <br />
                                        </div>
                                    )
                                })
                            }
                        </div>
                }
            </div>
        )
    }
}

export default connect(
    state => ({
        users: state.users.users,
    }),
    dispatch => bindActionCreators({ ...actions }, dispatch)
)(UserPage)