import React, { Component } from 'react'
import styles from "./holidays.module.css";

 class TextHolidays extends Component {
  render() {
    return (
      <div className={`${styles['container']} ${styles['holidat-text-parent']}`}>
        <h2 className={styles['h2-gift']}>Gifts for all Occasions</h2>
        <p className={styles['p-gift']}>“Try our web app to find the best gifts for all occasions”</p>
      </div>
    )
  }
}
export default TextHolidays
