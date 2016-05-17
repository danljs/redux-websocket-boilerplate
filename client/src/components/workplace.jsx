'use strict'
import React from 'react'
import { connect } from 'react-redux'
class workplace extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
          items: 
          [
            {category:'category', name:'name1', price:'price'},
            {category:'category', name:'name2', price:'price'},
            {category:'category', name:'name3', price:'price'}
          ]
        }
    }

  render() {
    var me = this
    var lang = me.props.lang.keys
    return (
      <div className='estimation'>
        <div></div>
        <div className='row header'>
          <div className='add' onClick={e=>{
            me.setState({items: [...me.state.items,
              {category:'category', name:'new', price:'new'}]})}} />
          <input className='new-todo' placeholder='What needs to be done?'/>
        </div>
        <section className='main'><ul>
          {
            me.state.items.map((c,i)=>{
              return( 
                <li className='row' key={i}>
                  <div>{c.name}</div><div>{c.price}</div>
                  <div className='delete' onClick={e=>{
                    let items = [...me.state.items]
                    items.splice(i,1)
                    me.setState({items: items})
                  }}>X</div>
                </li>
              )
            })
          }
        </ul></section>
        <div className='footer'></div>
      </div>
    )
  }
}
export default connect(any => any)(workplace)