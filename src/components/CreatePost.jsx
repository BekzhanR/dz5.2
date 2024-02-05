import React, { useState } from 'react';
import axios from 'axios';
import "../index.css"


const CreatePost = () => {
    const [posts, setPosts] = useState([])
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [id, setId] = useState('')


    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };
    const handleBodyChange = (e) => {
        setBody(e.target.value)
    };
    const handleUserChange = (e) => {
        setId(e.target.value)
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        const postData = {
            title: title,
            body: body,
            userId: 1,
        };
    
        try {

            const response = await axios.post('https://dummyjson.com/posts/add', postData);
            setPosts('Post created:', response.data.posts)
            alert("Post requesting");
        } catch (error) {
            console.warn('post 400:', error);
        }  
    };

    return (
        <div className="form">
            <h2 className="text">Create Post</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Title:
                    <input className="form_input" type="text" value={title} onChange={handleTitleChange} placeholder={"Title"}/>
                </label>
                {/*<br />*/}
                <label>
                    Text:
                    <input placeholder={"Text"} value={body} onChange={handleBodyChange} className="form_input"/>
                </label>
                <label>
                    UserID:
                    <input type="text" className="form_input" value={id} onChange={handleUserChange} placeholder='enter post ID'/>
                </label>
                <button type="submit">+</button>
            </form>
        </div>
    );
};

export default CreatePost;


