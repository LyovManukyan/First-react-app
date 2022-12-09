import React, { Component } from 'react';
import styles from "./holidays.module.css";
class Holidays extends Component {
    constructor(){
        super();
        this.state={
            data:[],
            id:1
        }
    }
    componentDidMount(){
        fetch('https://retoolapi.dev/3aP0rG/holidays')
        .then(res=>res.json())
        .then(result=>this.setState({data:result}))
    }
    render() {
        return (
            <section className={`${styles['container']} ${styles['holiday']}`}>
                <div className={styles['holidays_main_div']}>
                    {[...Array(4)].map((item,index)=>(
                        <h2 
                        onClick={()=>this.setState({id:index+1})}
                        className={index+1===this.state.id ? styles["active"] :undefined}
                        key={index}
                        >0{index+1}</h2>
                    ))}
                    {/* <h2 className='btn' onClick={()=>this.setState({id:1})}>01</h2>
                    <h2 className='btn' onClick={()=>this.setState({id:2})}>02</h2>
                    <h2 className='btn' onClick={()=>this.setState({id:3})}>03</h2>
                    <h2 className='btn' onClick={()=>this.setState({id:4})}>04</h2> */}
                </div>
                <div>
               {this.state.data.map(item=>(
                   item.id===this.state.id ? (
                   <div className={styles['holidays-img-parent']} key={item.id}>
                       <img  src={item.img} alt="" />
                       <p className={styles['holidays-name']}>{item.name}</p>
                       <button className={styles['holidays-btn']}>See More ›</button>
                   </div>) : null
               ))
               } 
               </div>
            </section>
        );
    }
}

export default Holidays;