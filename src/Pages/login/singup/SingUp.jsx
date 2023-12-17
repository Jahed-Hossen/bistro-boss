import React, { useContext } from 'react';
import { Arthcontext } from '../../../provider/ArthProvider';
import Loginimg from '../../../assets/others/authentication1.png';
import { Link } from 'react-router-dom';
const SingUp = () => {
    const {creatUser}= useContext(Arthcontext)
    const HandelSubmit = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        
        
       creatUser(email,password)
       .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user)
        // ...
      })
      .catch((error) => {

        const errorMessage = error.message;
        console.log(errorMessage)
        // ..
      });
  
    }
    return (
        <div className="hero max-h-full content-center bg-white space-x-9 sm:pt-5 md:pt-40">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center w-1/2 lg:text-left">
                   <img src={Loginimg} />
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100"> 
                  
                    <form onSubmit={HandelSubmit} className="card-body">
                         <h1 className="text-5xl font-bold">Sing Up</h1>
                         <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="Name" name="name" placeholder="Name" className="input input-bordered" required />
                        </div>
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
                        </div>
                        <div className="form-control mt-6">

                            <input type="submit" value='Login' className="btn border-orange-500 border-0 border-b-4" />
                        </div>
                        <p><small>You have already an account ? <Link to='/login' className=' font-bold text-orange-500'>Log In</Link></small></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SingUp;