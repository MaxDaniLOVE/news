import React, { useState, useEffect } from 'react';
import { auth } from '../../firebase';
import axios from 'axios'
import { urlBase } from '../../constants'
import ItemCards from '../../components/ItemCards';

const EcoFriendly = () => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ isRegisterMode, setIsRegisterMode ] = useState(false);
    const [ isLoggedIn, setIsLoggedIn ] = useState(false);
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
                setIsLoggedIn(true)
            }
        } catch (e) {
            console.log(e)
        }
    }
    const onChangeEmail = ({ target: { value } }) => setEmail(value);
    const onChangePassword = ({ target: { value } }) => setPassword(value);
    const onChangeRegisterMode = ({ target: { checked } }) => setIsRegisterMode(checked);
    const [ news, setNews ] = useState([]);
    useEffect(() => {
        const token = localStorage.getItem('authToken');
        (async () => {
            const { data: { news = [] } } = await axios.get(`${urlBase}/news`)
            setNews(news)
        })()
        if (!token) return;
        setIsLoggedIn(true)
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }, [ isLoggedIn ])
    const onLogout = async () => {
        await auth.signOut();
        axios.defaults.headers.common['Authorization'] = null;
        localStorage.removeItem('authToken');
        localStorage.removeItem('userId');
        localStorage.removeItem('userEmail');
        setIsLoggedIn(false)
    }
    return (
        <>
        <div class="header">
            <a href="/green-corner">Главное</a>
            <a href="/shops">Магазины</a>
            <a href="/recycling">Сортировка мусора</a>
            <a href="/eco-friendly">Eco-friendly</a>
        </div>
        <div>
            {
                !isLoggedIn ? (
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
                ) : <button onClick={onLogout}>LOGOUT</button>
            }
        </div>
        <ItemCards news={news} />
        <div id="footer">
            <div className="contacts">
                <a href="https://www.instagram.com/namealina_/"><img src="img/inst.png" title="инстаграм" alt="инстаграм" /></a>
                <a href="https://vk.com/alina_strukova"><img src="img/vk.png" title="вконтакте" alt="вконтакте" /></a>
            </div>
            <div class="copyright">@2020.Created by Alina Strukova.</div>
        </div>
        </>
    )
}

export default EcoFriendly;
