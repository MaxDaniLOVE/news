import React, { useState, useEffect } from 'react';
import './itemCards.css';
import axios from 'axios';
import { urlBase } from '../../constants';

const Item = ({ comments, description, images, liked, id, idx }) => {
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
        <>
            <div className="plog">
                { !!(idx % 2) && <div className="plogtext">{description}</div> }
                <div className="plogimg">
                    {images.map(link => <img src={link} alt="desc" title="desc" style={{ width: '100%', borderRadius: '10px', marginBottom: '20px' }} />)}
                </div>
                { !(idx % 2) && <div className="plogtext">{description}</div> }
            </div>
            <div className='actions-wrapper'>
                <div>
                    <textarea onChange={onChangeComment} value={comment} />
                    <button onClick={onPostComment}>Добавить комментарий</button>
                </div>
                <div>
                    {
                        availiableComments.map(({ comment, email }, idx) => (
                            <p key={idx}>{comment}; Отправил: {email}</p>
                        ))
                    }
                </div>
                <span>Already liked {likedBy.length}</span>
                <button onClick={isLikedByUser ? onDislike : onLike}>{isLikedByUser ? 'dislike' : 'like'}</button> 
            </div>
        </>
    )
}

const ItemCards = ({ news }) => {
    return news.map((props, idx) => <Item {...props} idx={idx} key={props.id} />);
};

export default ItemCards;
