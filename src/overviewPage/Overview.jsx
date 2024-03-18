import React, {useEffect, useState} from "react";
import './Overview.css';
// import posts from '../constants/data.json';
import {Link} from 'react-router-dom';
import axios from 'axios';

function Overview() {
    const [posts, setPosts] = useState([]);

    useEfeect (() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('https://localhost:3000/posts');
                setPosts(response.data);
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        };
        fetchPosts();
    }, []);

    return (
        <section className="overview-section outer-content-container">
            <div className="inner-content-container">
                <h1>Bekijk all {posts.length} posts op het platform</h1>
                <ul className="post-list">
                    {posts.map((post) => {
                        return <li key={post.id} className="post-item">
                            <h2 className="post-title"><Link to={`/posts/${post.id}`}>{post.title}</Link>({post.author})</h2>
                        <p>{post.comments} reacties - {post.shares} keer gedeeld</p>
                            </li>
                    })}
                </ul>
            </div>
        </section>
    );
}

export default Overview;