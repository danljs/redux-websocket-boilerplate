'use strict'
import React from 'react'
import { connect } from 'react-redux'
import {change_lang} from '../actions/index'
import base from './base'

class header extends base{
  constructor(props) {
    super(props)
    this.state = {
      show_lang : false
    }
  }
  componentWillReceiveProps(nextProps){
  }
  render() {
    var lang = this.props.lang.keys
    return (
      <div className='header-area'>
      {/*
        <a onClick={e=>{
        }}>{lang.logout}</a>
        <a onClick={e=>{
          this.context.router.push('/admin')
        }}>{lang.admin}</a>
        <a onClick={e=>{
          this.context.router.push('/quote')
        }}>{lang.quote}</a>
      */}
        <a onClick={e=>{
          this.setState({show_lang : !this.state.show_lang})
          this.state.show_lang ? this.props.dispatch(change_lang('en')) : this.props.dispatch(change_lang('ch'))
        }}>{this.state.show_lang ? lang.english : lang.chinese}</a>
      </div>
    )
  }
}

export default connect(state => ({lang: state.lang}))(header)