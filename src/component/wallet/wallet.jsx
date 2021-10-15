import React from 'react';
import wallet from '../../assets/img/Card BG.svg'
import wallet2 from '../../assets/img/wallet.svg'
import chip from '../../assets/img/chip.svg'
import calender from '../../assets/img/calendar.svg'
import styles from './wallet.module.css'

const Wallet = () => {
    return (
        <div class="card col-12 col-sm-12 col-md-12">
            <div className="row">
                <div className="container-fluid">
                    <div className="col-12 col-md-12 mt-1 py-3">
                        <span className={styles.wallet}>wallet</span>
                        <img src={wallet2} alt="" width={25} height={25} className={styles.wallet2} />
                    </div>
                    <div className="col-12 col-md-12 mt-1">
                        <div className={styles.wallet__img}>
                            <img src={wallet} alt="" width={300} width={300} />
                            <div className={styles.wallet__content}>
                                <div className="row mt-5">
                                    <img src={chip} alt="" width={40} height={40} className={styles.chip__img} />
                                </div>
                                <div className="row ml-3 text-white">
                                    <div className="ml-5">
                                        <div className={styles.main__text}>
                                            <span className="h6">Rs 1,500.00</span> <br /> <small>Wallet Balance</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="row text-white">
                                    <div className="col-6 col-lg-6">
                                        <div className={styles.wallet__contact}>
                                            <span>Akash batista</span> <br /> <small>09876543210</small>
                                        </div>
                                    </div>
                                    <div className="col-6 col-lg-6 text-white">
                                        <div className={styles.wallet__contact2}>
                                            <img src={calender} alt="" width={25} height={25} className={styles.calender__img}
                                             /> <br />
                                            <small>15 Aug,2019</small>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-12 col-md-12 py-2">
                        <small className="ml-4 py-4">
                            <a href="#" className="text-dark ml-5">
                                <span className={styles.physical__text}>
                                    Apply For Physcial Card
                                </span>
                            </a>
                        </small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Wallet;