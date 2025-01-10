import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import router from '../router';

export default function PostForm() {
    const [model, setModel] = useState({
        id: '',
        title: '',
        body: ''
    });

    const { id } = useParams();

    useEffect(() => {
        if (!id) {
            return;
        }
        fetch(`https://jsonplaceholder.typicode.com/posts/${ id }`).then(res => res.json()).then(post => {
            setModel(post);
        });
    }, []);

    function onSubmit(event) {
        event.preventDefault();
        if (model.id) {
            fetch(`https://jsonplaceholder.typicode.com/posts/${ model.id }`, {
                method: 'PUT',
                body: JSON.stringify(model)
            })
            .then(res => res.json())
            .then(() => {
                router.navigate('/');
            });
        } else {
            fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify(model)
            })
            .then(res => res.json())
            .then(() => {
                router.navigate('/');
            });
        }
    }
    return ( <div>
        <p>
            <Link to="/" className="btn btn-outline-secondary">
            Go back to list
            </Link>
        </p>
        <form onSubmit={ onSubmit }>
            <h1>{ model.id ? 'Edit Post' : 'Create new Post' }</h1>
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    value={model.title}
                    onInput={event => setModel({ ...model, title: event.target.value })}
                    placeholder="Post Title"
                />
            </div>
            <div className="mb-3">
                <textarea
                    type="text"
                    className="form-control"
                    value={model.body}
                    onInput={event => setModel({ ...model, body: event.target.value })}
                    placeholder="Post Body">
                </textarea>
            </div>
            <p>
                <button
                    disabled={ !model.title || !model.body }
                    className="btn btn-success"
                    type="submit">
                    Submit
                </button>
            </p>
        </form>
    </div>);
};
