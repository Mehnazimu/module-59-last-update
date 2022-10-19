import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';
import './SignUp.css';

const SignUp = () => {
  const [error, setError] =useState(null)

  const {createUser} = useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
       
        if(password.length <6){
           setError('password must be 6 character ')
           return;
        }
        if(password !== confirm){
            setError('your password didnt match')
            return;
        }

        createUser(email,password)
        .then(result =>{
            const user = result.user;
            console.log(user)
            form.reset();
        })
        .catch(error=>console.error(error));
    }
    return (
        <div>
            <div className='form-container'>
                <h2 className='form-title'>Sign up</h2>
                <form onSubmit={handleSubmit}>
                    <div className='form-control'>
                        <label htmlFor="email">Email</label>
                        <input type="email" name='email' required />

                    </div>
                    <div className='form-control'>
                        <label htmlFor="password">Password</label>
                        <input type="password" name='password' required />

                    </div>
                    <div className='form-control'>
                        <label htmlFor="confirm">Confirm Password</label>
                        <input type="password" name='confirm' required />

                    </div>
                    <input className='btn-submit' type="submit" value="Sign up" />

                </form>
                <p>New to ema john <Link to='/login'>Login</Link></p>
            </div>

        </div>
    );
};

export default SignUp;