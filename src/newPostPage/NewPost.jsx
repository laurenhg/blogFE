import './NewPost.css';
import { useState } from 'react';
import calculatedReadTime from "../helpers/calculatedReadTime.js";
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Ensure you've installed Axios

function NewPost() {
    const [formState, setFormState] = useState({
        title: '',
        subtitle: '',
        author: '',
        content: '',
    });

    const navigate = useNavigate();

    function handleChange(e) {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value, // Fixed typo here
        });
    }

    async function handleSubmit(e) {
        e.preventDefault();

        const postData = {
            ...formState,
            shares: 0,
            comments: 0,
            created: new Date().toISOString(),
            readTime: calculatedReadTime(formState.content),
        };

        try {
            const response = await axios.post('http://localhost:3000/posts', postData);
            console.log('De blog is succesvol verzameld!', response.data);
            // Optionally navigate to another route after success
            navigate('/');
        } catch (error) {
            console.error('Failed to submit post', error);
        }
    }

    return (
        <section className="new-post-section outer-content-container">
            <div className="inner-content-container_text-restriction">
                <form className="new-post-form" onSubmit={handleSubmit}>
                    <h1>Post toevoegen</h1>
                    <label htmlFor="post-title">Title</label>
                    <input
                        type="text"
                        id="post-title"
                        name="title"
                        required
                        value={formState.title}
                        onChange={handleChange}
                    />
                    <label htmlFor="post-subtitle">Subtitle</label>
                    <input
                        type="text"
                        id="post-subtitle"
                        name="subtitle"
                        required
                        value={formState.subtitle}
                        onChange={handleChange}
                    />
                    <label htmlFor="post-author">Naam en achternaam</label>
                    <input
                        type="text"
                        id="post-author"
                        name="author"
                        required
                        value={formState.author}
                        onChange={handleChange}
                    />
                    <label htmlFor="post-content">Blogpost</label>
                    <textarea
                        name="content"
                        id="post-content"
                        cols="30"
                        rows="10"
                        required
                        minLength={300}
                        maxLength={2000}
                        value={formState.content} // Fixed typo here
                        onChange={handleChange}></textarea>
                    <button type="submit">
                        Toevoegen
                    </button>
                </form>
            </div>
        </section>
    );
}

export default NewPost;