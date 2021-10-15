import React, { useEffect, useState } from "react";
import vendor from '../../assets/img/1.jpg'
import transcation from '../../assets/img/Group -6.svg'
import vendor_Img from '../../assets/img/vendor.svg'
import styles from './transcation.module.css'
import { data } from './trans_data'

const Transcation = () => {

    const [transData, setTransData] = useState(data);
    console.log(transData);
    return (
        <div className="ml-0">
            <div class="card col-12 col-sm-12 col-md-12 mt-2 shadow bg-white rounded">
                <div className={styles.response_cash}>
                    <div className="row py-1">
                        <div className="">
                            <img src={vendor} alt="" height={45} width={45} class={styles.vendor__tranc} />
                        </div>
                        <div className={styles.title}>
                            <span className="text-left">Grant Marshall</span> <br />
                            <span><small className="text-left ml-2">Aug 15,2018 | 09:00am</small></span>
                        </div>
                        <div className={styles.paid}>
                            <span className="text-danger text-right">Rs 500</span> <br />
                            <small className="text-right">Paid</small>
                        </div>
                        <div className="d-flex ml-2">
                            <img src={transcation} alt="" className={styles.tranc__last} width={15} height={15} />
                            <span className={styles.transcation__plus}>+</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Transcation;