import React, { useContext, useEffect, useState } from 'react';
import { Arthcontext } from '../../../provider/ArthProvider';
import { Link } from 'react-router-dom';
import loginImg from '../../../assets/others/authentication2.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import Swal from 'sweetalert2';
const Login = () => {
    const { singIn } = useContext(Arthcontext)
    const [disabled, setDisabled] = useState(true);

    const HandelSubmit = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;


            singIn(email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log(user)
                Swal.fire({
                    title:"LOG IN SUCCESSFUL",
                    showClass: {
                      popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                      `
                    },
                    hideClass: {
                      popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                      `
                    }
                  });
                // ...
            })
            .catch((error) => {

                const errorMessage = error.message;
                console.log(errorMessage)
                // ..
            });
    }
    useEffect(()=>{
        loadCaptchaEnginge(6); 
    },[])

    const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value;
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false);
        }
        else {
            setDisabled(true)
        }
    }


    return (
        <div className="hero max-h-full content-center bg-white space-x-9 sm:pt-5 md:pt-40">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center w-1/2 lg:text-left">
                    <img src={loginImg} />
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                    <form onSubmit={HandelSubmit} className="card-body">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <LoadCanvasTemplate />
                            <input onBlur={handleValidateCaptcha} type="text" name="text" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">

                            <input disabled={disabled} type="submit" value='Login' className="btn border-orange-500 border-0 border-b-4" />
                        </div>
                        <p><small>New Here? <Link to='/singup' className=' font-bold text-orange-500'>Creat an account</Link></small></p>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Login;
