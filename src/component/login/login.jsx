import React, { useState } from "react";
import styles from './login.module.css'
import axios from 'axios'
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useHistory } from "react-router-dom";


const validationSchema = yup.object({
    email: yup.string().email('Please enter a valid email address').required(),
    password: yup.string()
        .required('No password provided.')
        .min(5, 'Password is too short - should be 5 chars minimum.')
        .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
})

const Login = () => {
    const [isLogin, isSetLogin] = useState(true);
    const [isRegister, isSetRegister] = useState(false);
    const history = useHistory();
    const [error, setError] = useState(null);
    const [password, setPassword] = useState("");


    const onSubmit = async (values) => {
        console.log(values);
        setError(null);
        const response = await axios.post("https://reqres.in/api/login", values).catch((err) => {
            console.log(err)
            if (err) {
                setError("email does'nt exist")
            }
        });
        console.log(response);
        if (response.status === 200) {
            localStorage.setItem("token", response.data.token);
            window.location.reload();
        }
    }

    const formik = useFormik({
        initialValues: { email: "", password: "" },
        validateOnBlur: true,
        onSubmit,
        validationSchema: validationSchema,
    })

    const onShowLogin = () => {
        isSetLogin(true);
        isSetRegister(false);
    }

    const onShowRegister = () => {
        isSetLogin(false);
        isSetRegister(true);
    }

    return (
        <div className="card col-12 col-sm-12 col-md-9">
            <div className="card-body">
                <div className="container">
                    <div className="col-md-12">
                        <div className={styles.head__toggle}>
                            <div className="row">
                                <p onClick={onShowLogin}>Login</p>
                                <p onClick={onShowRegister} className="ml-5">Register</p>
                            </div>
                        </div>
                    </div>
                    {
                        isLogin &&
                        <div>
                            <div className={styles.field_error}>{error ? error : ""}</div>
                            <form onSubmit={formik.handleSubmit}>
                                <div className={styles.form__style}>
                                    <div class="form-group">
                                        <label className={styles.email__id}>Email/Mobile Number</label>
                                        <div className={styles.field_container}>
                                            <input type="email" className={styles.email__input}
                                                name="email" value={formik.values.email} onChange={formik.handleChange}
                                                onBlur={formik.handleBlur} class="form-control" />
                                            <div className={styles.field_error}>
                                                {formik.touched.email && formik.errors.email ? formik.errors.email : ""}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label className={styles.password__style}>Password</label>
                                        <div className={styles.field_container}>
                                            <input type="password" onChange={formik.handleChange}
                                                name="password" value={formik.values.password}
                                                onBlur={formik.handleBlur} className={styles.pass__input} class="form-control" />
                                            <div className={styles.field_error}>
                                                {formik.touched.password && formik.errors.password ? formik.errors.password : ""}
                                            </div>
                                        </div>
                                        <a href="http://" className={styles.forget__style}>Forget Password</a>
                                    </div>
                                    <div className="d-flex flex-column">
                                        <button type="submit" className={styles.btn__login}><span>Login</span></button>
                                        <label for="exampleInputPassword1" className={styles.link__style}>Not a memeber yet?
                                            <a onClick={onShowRegister} className="text-primary">Register</a>
                                        </label>
                                    </div>
                                </div>
                            </form>
                        </div>
                    }

                    {
                        isRegister &&
                        <form>
                            <div className={styles.form__style__two}>
                                <div class="form-group">
                                    <label className={styles.name__id__two}>First Name</label>
                                    <input type="text" className={styles.email__input__two} aria-describedby="emailHelp" />
                                </div>
                                <div class="form-group">
                                    <label className={styles.email__id__two}>Email</label>
                                    <input type="email" className={styles.email__input__two} aria-describedby="emailHelp" />
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputEmail1" className={styles.mobile__id__two}>Mobile Number</label>
                                    <input type="number" className={styles.email__input__two} id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputEmail1" className={styles.gender__id__two}>Gender</label>
                                    <input type="text" className={styles.email__input__two} id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1" className={styles.password__style__two}>Password</label>
                                    <input type="password" className={styles.pass__input__two} id="exampleInputPassword1" />
                                </div>
                                <div className="d-flex flex-column">
                                    <button type="submit" className={styles.btn__register}>Register</button>
                                    <label for="exampleInputPassword1" className={styles.link__style__two}>Not a memeber yet?
                                        <a onClick={onShowLogin} className="text-primary">Login</a>
                                    </label>
                                </div>
                            </div>
                        </form>
                    }

                </div>
            </div>
        </div>
    )
}

export default Login;