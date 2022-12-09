import React, { Component } from 'react'
import data from './footerData.json'
import styles from './footer.module.css'
export default class FooterNav extends Component {
  render() {
    return (
      <nav className={`${styles['footer-nav']}`}>
        <ul className={`${styles['footer-nav-ul']}`}>
         {data.map(item=>(item?.img ? <img src={item.img} alt="" key={item.id}/> : <li key={item.id}>{item.name}</li> ))}
        </ul>  
      </nav>
    )
  }
}
