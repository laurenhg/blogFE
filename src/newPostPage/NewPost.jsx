import './NewPost.css';
import {useState} from 'react';
import calculatedReadTime from "../helpers/calculatedReadTime.js";
import {useNavigate} from 'react-router-dom';

function NewPost() {
    const [formState, setFormState] = useState ({
        title: '',
        subtitle: '',
        author: '',
        content: '',

    });

    const navigate = useNavigate();

    function handleChange(e) {
        setFormState ({
            ...formState,
            [e.traget.name]: e.target.value,
        })
    }

    function handleSubmit(e) {
        e.preventDefault ();

        console.log ({
            ...formState,
            shares: 0,
            comments: 0,
            created: new Date().toISOString(),
            readTime: calculatedReadTime(formState.content),
        });

        console.log ('De blos is successvol verzameld!');
    }

    return (
        <section className="new-post-section outer-content-container">
            <div className="inner-content-container_text-restriction">
                <form className="new-post-form" onSubmit={handleSubmit}>
                    <h1> Post toevogen </h1>
                    <label htmlFor="Post-title"> Title</label>
                    <input
                        type="text"
                        id="post-title"
                        name="title"
                        required
                        value={formState.title}
                        onChange={handleChange}
                        />
                    <label htmlFor="post-subtitle"> Subtitle</label>
                    <input
                        type="text"
                        id="post-subtitle"
                        name="subtitle"
                        required
                        value={formState.subtitle}
                        onChange={handleChange}
                        />
                    <label htmlFor="post-authoer">Naam en achternaam</label>
                    <input
                        type="text"
                        id="post-author"
                        name="author"
                        required
                        value={formState.author}
                        onChange={handleChange}
                        />
                    <label htmlFor="post-content"> Blogpost</label>
                    <textarea
                        name="content"
                        id="post-content"
                        cols="30"
                        rows="10"
                        required
                        minLength={300}
                        maxLength={2000}
                        value={fomrState.content}
                        onChange={handleChange}></textarea>
                    <button type="submit">
                        Toevogen
                    </button>
                </form>
            </div>
        </section>
    );
}

export default NewPost