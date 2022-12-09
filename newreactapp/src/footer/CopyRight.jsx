import React, { Component } from 'react';
import styles from './footer.module.css'

class CopyRight extends Component {
    render() {
        return (
            <p className={styles['copyright']}>
         <span> © 2010 — 2020 </span><span>Privacy — Terms</span>
            </p>
        );
    }
}

export default CopyRight;