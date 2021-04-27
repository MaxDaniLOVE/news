import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from '../../firebase';

const LoginPage = () => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ isRegisterMode, setIsRegisterMode ] = useState(false);
    const history = useHistory();
    async function onSubmit(e) {
        e.preventDefault();
        try {
            if (isRegisterMode) {
                await auth.createUserWithEmailAndPassword(email, password);
            } else {
                await auth.signInWithEmailAndPassword(email, password);
            }
            const token = await auth.currentUser.getIdToken();
            const { uid: userId, email: userEmail } = auth.currentUser;
            if (token && userId && userEmail) {
                localStorage.setItem('authToken', token);
                localStorage.setItem('userId', userId);
                localStorage.setItem('userEmail', userEmail);
                history.push('/');
            }
        } catch (e) {
            console.log(e)
        }
    }
    const onChangeEmail = ({ target: { value } }) => setEmail(value);
    const onChangePassword = ({ target: { value } }) => setPassword(value);
    const onChangeRegisterMode = ({ target: { checked } }) => setIsRegisterMode(checked);
    return (
        <div>
            <form onSubmit={onSubmit}>
                <label htmlFor='email'>
                    Email:
                    <input type='email' id='email' value={email} onChange={onChangeEmail}/>
                </label>
                <label htmlFor='password'>
                    Password:
                    <input type='password' id='password' value={password} onChange={onChangePassword}/>
                </label>
                <label htmlFor='isRegisterMode'>
                    Register:
                    <input type='checkbox' id='isRegisterMode' value={isRegisterMode} onChange={onChangeRegisterMode}/>
                </label>
                <button type='submit' className='login-button'>
                    {isRegisterMode ? 'Register' : 'Login'}
                </button>
            </form>
        </div>
    );
};

export default LoginPage;
