import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { auth } from '../../firebase';

const MainPage = () => {
    const history = useHistory();
    const [ news, setNews ] = useState([]);
    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (!token) history.push('/login');
        const config = { headers: { Authorization: `Bearer ${token}` } };
        (async () => {
            const { data: { news = [] } } = await axios.get('http://localhost:8080/news', config)
            setNews(news)
        })()
    }, [])
    const onLogout = async () => {
        await auth.signOut();
        localStorage.removeItem('authToken');
        history.push('/login');
    }
    return (
        <div>
            MainPage
            <button onClick={onLogout}>LOGOUT</button>
        </div>
    );
};

export default MainPage;
