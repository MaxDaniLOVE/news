import React, { useState } from 'react';
import './itemCards.css';
import axios from 'axios';

const Item = ({ comments, description, image, liked, id }) => {
    const [ comment, setComment ] = useState('');
    const onPostComment = async () => {
        try {
            await axios.put(`http://localhost:5500/news/${id}/comment`, { comment })
        } catch (e) {
            console.log(e)
        }
    }
    const onLike = async () => {
        try {
            await axios.put(`http://localhost:5500/news/${id}/like`)
        } catch (e) {
            console.log(e)
        }
    }
    const onDislike= async () => {
        try {
            await axios.delete(`http://localhost:5500/news/${id}/like`)
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
            <button onClick={onPostComment}>post</button>
            <button onClick={onLike}>like</button>
            <button onClick={onDislike}>dislike</button>
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
