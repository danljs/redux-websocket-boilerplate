'use strict'
import React from 'react'
import { connect } from 'react-redux'
import QuoteRow from './quote_row'
import Report from './report'

class quote extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      items: 
      [
        {amount:0}
      ],
      category: [],
      summary: 0.00
    }
  }

  componentDidMount(){
    let xmlhttp = new XMLHttpRequest()
    xmlhttp.onreadystatechange = ()=>{
      if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
        this.setState({category: JSON.parse(xmlhttp.response).category})
      }
    }
    xmlhttp.open('GET', 'data/data.json', true)
    xmlhttp.send()
  }

  render() {
    let lang = this.props.lang.keys
    console.log(this.state.items)
    return (
      <div className='quote'>
        <div></div>
        <div className='row header'>
          <div className='add' onClick={e=>{
            this.setState({items: [...this.state.items, {}]})
          }}/>
          <input className='new-todo' placeholder={lang.what}/>
          <div className='print' onClick={e=>{
            Report.print()
          }}/>
        </div>
        <section className='main'><ul>
          <li className='row title'>
          { 
            this.state.category.map((c,i)=>c[lang.item_name])
            .map((c,i)=><div key={i} className={'item' + i}>{c}</div>)
          }
          <div className='quatity'>{lang.quatity}</div>
          <div className='amount'>{lang.amount}</div>
          </li>
          {
            this.state.items.map((c,i)=>
              <QuoteRow key={i} category={this.state.category} 
                onChange={value=>{
                  let items = this.state.items
                  items[i] = value
                  this.setState({items: items})
                }}
                remove={e=>{
                  let items = [...this.state.items]
                  items.splice(i,1)
                  this.setState({items: items})
                }}
              />
            )
          }
        </ul></section>
        <div className='footer'>
          <div>{
            parseFloat(Math.round(this.state.items
            .map((c,i)=>!!!c.amount ? 0 : parseFloat(c.amount))
            .reduce((p,c) => p + c, 0) * 100) / 100).toFixed(2)
          }</div>
          <div>{lang.summary}:</div>
        </div>
      </div>
    )
  }
}
export default connect(any => any)(quote)