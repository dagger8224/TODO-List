import { Link } from "react-router-dom";
import ProtoTypes from "prop-types";

export default function PostItem({ post, onDelete = () => {} }) {
  function onDeleteClick(post) {
    if (!window.confirm("Are you sure you want to delete post?")) {
      return;
    }
    fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.status === 200) {
        onDelete(post);
      }
    });
  }
  return (
    <div className="card mb-4">
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>
        <div className="text-end">
          <Link to={ `/edit/${ post.id }` } className="btn btn-primary me-2">
            Edit
          </Link>
          <button
            className="btn btn-danger"
            onClick={() => onDeleteClick(post)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

PostItem.protoTypes = {
    post: ProtoTypes.object.isRequired
};
