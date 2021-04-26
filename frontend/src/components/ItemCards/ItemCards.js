import React, { useState } from 'react';
import './itemCards.css';
import axios from 'axios';

const Item = ({ comments, description, image, liked, id }) => {
    const [ comment, setComment ] = useState('');
    const onPostComment = async () => {
        try {
            await axios.put(`http://localhost:8080/news/${id}/comment`, { comment })
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
