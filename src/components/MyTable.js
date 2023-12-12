import React from 'react';
import CreatePostForm from '../components/forms/createPostForm';

const MyTable = ({ posts, onDelete, onUpdate }) => {
  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Content</th>
            <th>Author</th>
            <th>Actions</th>
          </tr>
        </thead>
        {posts.length >= 1 ? (
          <tbody>
            {posts.map(post => (
              <tr key={post._id}>
                <td>{post.title}</td>
                <td>{post.content}</td>
                <td>{post.Author}</td>
                <td>
                  <button className="btn btn-danger" onClick={() => onDelete(post._id)}>
                    Delete
                  </button>
                  <button className="btn btn-primary mx-2" onClick={() => onUpdate(post._id, post)}>
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        ) : (
          <tbody>
            <tr>
              <td colSpan="4">
                <div className="card text-center">
                  <div className="card-body">
                    <h5 className="card-title">No Posts</h5>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        )}
      </table>
    </div>
  );
};

export default MyTable;
