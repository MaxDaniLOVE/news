import React, { useState, useEffect } from 'react';
import './itemCards.css';
import axios from 'axios';
import { urlBase } from '../../constants';

const Item = ({ comments, description, image, liked, id }) => {
    const [ comment, setComment ] = useState('');
    const [ availiableComments, setAvailiableComments ] = useState([]);
    const [ likedBy, setLikedBy ] = useState([]);
    const userId = localStorage.getItem('userId');
    const userEmail = localStorage.getItem('userEmail');
    const isLikedByUser = likedBy.includes(userId);
    useEffect(() => {
        setAvailiableComments(comments);
        setLikedBy(liked)
    }, [ comments, liked ]);
    const onPostComment = async () => {
        try {
            const { data: { comments } } = await axios.put(`${urlBase}/news/${id}/comment`, { comment });
            setAvailiableComments(comments);
            setComment('')
        } catch (e) {
            console.log(e)
        }
    }
    const onLike = async () => {
        try {
            const { data: { liked } } = await axios.put(`${urlBase}/news/${id}/like`)
            setLikedBy(liked)
        } catch (e) {
            console.log(e)
        }
    }
    const onDislike= async () => {
        try {
            const { data: { liked } } = await axios.delete(`${urlBase}/news/${id}/like`)
            setLikedBy(liked)
        } catch (e) {
            console.log(e)
        }
    }
    const onChangeComment = ({ target: { value } }) => setComment(value);
    return (
        <div className='card'>
            <img src={image} alt='test' />
            <p>{description}</p>
            <textarea onChange={onChangeComment} value={comment} />
            {
                availiableComments.map(({ comment, email, userId }, idx) => (
                    <p key={idx}>{comment}, send by: {email}</p>
                ))
            }
            <button onClick={onPostComment}>post</button>
            <span>Already liked {likedBy.length}</span>
            { isLikedByUser ? <button onClick={onDislike}>dislike</button> : <button onClick={onLike}>like</button> } 
        </div>
    )
}

const ItemCards = ({ news }) => {
    return (
        <div className='cards-wrapper'>
            {
                news.map(props => <Item key={props.id} {...props} />)
            }
        </div>
    );
};

export default ItemCards;
