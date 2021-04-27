import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { auth } from '../../firebase';
import ItemCards from '../../components/ItemCards';
import { urlBase } from '../../constants';

const MainPage = () => {
    const history = useHistory();
    const [ news, setNews ] = useState([]);
    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (!token) history.push('/login');
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        (async () => {
            const { data: { news = [] } } = await axios.get(`${urlBase}/news`)
            setNews(news)
        })()
    }, [])
    const onLogout = async () => {
        await auth.signOut();
        localStorage.removeItem('authToken');
        localStorage.removeItem('userId');
        localStorage.removeItem('userEmail');
        history.push('/login');
    }
    return (
        <div>
            MainPage
            <button onClick={onLogout}>LOGOUT</button>
            <ItemCards news={news} />
        </div>
    );
};

export default MainPage;
