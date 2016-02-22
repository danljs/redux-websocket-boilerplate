'use strict'
import React from 'react';
import { connect } from 'react-redux'
@connect(state => state)
export default class login extends React.Component{
     constructor(props) {
        super(props)
        this.state={
            info: ''
        }
    }

    render() {
        var me = this
        return (
        <div><div title="Login"><form>
                <p className="bg-warning">{ me.state.info}</p>
                <h4>Login page</h4>
                <div>
                    <input ref ="email" type="email" name="email" required="1" className="form-control" placeholder="Enter your email"/>
                    <br/>
                    <input ref ="password" type="password" name="password" required="1" className="form-control" placeholder="Enter pass"/>

                    <br/>
                    <button className="button button-primary"
                        onClick={e => {
                            if (!me.refs.email.checkValidity()
                                ||!me.refs.password.checkValidity()
                                ) {
                                return
                            }
                            e.preventDefault()
                        }}
                    >Login</button>
                </div>
        </form></div></div>
        )
    }
}