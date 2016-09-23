'use strict'
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { change_lang } from '../actions/index'

class header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show_lang: false,
    }
  }

  // componentWillReceiveProps(nextProps) {
  // }

  render() {
    const lang = this.props.lang.keys
    return (
      <div className="header-area">
        {/*
        <a onClick={e=>{
        }}>{lang.logout}</a>
        <a onClick={e=>{
          this.props.router.push('/admin')
        }}>{lang.admin}</a>
        <a onClick={e=>{
          this.props.router.push('/quote')
        }}>{lang.quote}</a>

        <a onClick={e=>{
          this.setState({show_lang : !this.state.show_lang})
          this.state.show_lang ? this.props.dispatch(change_lang('en')) : this.props.dispatch(change_lang('ch'))
        }}>{this.state.show_lang ? lang.english : lang.chinese}</a>
        */}
      </div>
    )
  }
}
export default connect(state => ({ lang: state.lang }))(withRouter(header))
