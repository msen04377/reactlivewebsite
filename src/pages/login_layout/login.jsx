import React, { useState } from "react";
import styles from './login.module.css'
import LoginBg from '../../assets/img/login_layout.png'
import Login from '../../component/login/login'


const LoginLayout = () => {

    return (
        <div className={styles.bg}>
            <div className="container-fluid d-flex">
                <div className={styles.login__flex}>
                    <div className="col-lg-6 col-md-6 col-sm-12 mt-5">
                        <div className="mr-5 mt-5">
                            <img src={LoginBg} alt="" height={300} width={300} className={styles.loginBg} />
                        </div>
                        <div className="text-white ml-5">
                            <div className={styles.login__content}>
                                <h2 className="text-left ml-5">Welcome!</h2>
                                <p className="text-left ml-5">
                                    <span className={styles.lorem__text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque commodi vel dolor, repellendus obcaecati quibusdam hic placeat nulla. Neque illo officia obcaecati consequuntur incidunt id quod, laborum perferendis explicabo libero qui consectetur</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <div className={styles.login}>
                            <Login />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginLayout;