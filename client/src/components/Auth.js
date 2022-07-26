import React, { useState } from 'react'
import { SignUpUser, SignInUser } from '../Reducers/AuthReducer';
import { useDispatch, useSelector } from 'react-redux';

function Auth() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [auth, setAuth] = useState('Signin')
    const dispatch = useDispatch()
    const user = useSelector((state) => state.user)
    const authenticate = () => {
        if (auth === "Signin") {
           dispatch(SignInUser({email, password}))
        }
        else {
            dispatch(SignUpUser({ email, password }))
        }
    }
    return (
        <div>
            {
                // if loading is
                user.loading &&
                <div className="progress">
                    <div className="indeterminate"></div>
                </div>



            }
            <h2>Please {auth}</h2>
            {
                user.error &&
                <h5>{user.error}</h5>
            }
            <div>
                <input
                    value={email}
                    type='email'
                    placeholder='Please enter your email'
                    onChange={(e) => { setEmail(e.target.value) }}
                />
            </div>

            <div>
                <input
                    value={password}
                    type='password'
                    placeholder='Please enter your Password'
                    onChange={(e) => { setPassword(e.target.value) }}
                />
            </div>

            {
                auth === 'Signin' ?
                    <h6 onClick={() => { setAuth('SignUp') }}>Don't have an account?</h6> :
                    <h6 onClick={() => { setAuth('Signin') }}>Already have an account</h6>
            }

            <button className='btn' onClick={() => authenticate()}>
                {auth}
            </button>
        </div>
    )
}

export default Auth