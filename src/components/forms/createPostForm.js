// CreatePostForm.js
import React, { useEffect, useState } from 'react';

const CreatePostForm = ({ onCreate, onUpdate , update, post, onClose}) => {
  const [newPost, setNewPost] = useState({ title: '', content: '', Author: '' });

  useEffect(()=>{
    if (update){
      let updatedPost={...newPost}
      updatedPost.title=post.title
      updatedPost.content=post.content
      updatedPost.Author=post.Author
      setNewPost(updatedPost)
    }

  },[])
  const handleSaveClick = () => {
    // Pass the new post data to the parent component for saving
    if (update){
      onUpdate(newPost,post._id)
    }
    else{
    onCreate(newPost);
    }
    // Reset form after saving
    setNewPost({ title: '', content: '', Author: '' });
  };

  return (
    <div className="card">
      <div className="card-body">
        <div className='d-flex justify-content-between'>
        {update ?<h5 className="card-title">Update Post</h5>:<h5 className="card-title">Create Post</h5>}
        <button type="button" className="btn-close" aria-label="Close" onClick={onClose} ></button>
        </div>
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              value={newPost.title}
              onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="content" className="form-label">
              Content
            </label>
            <textarea
              className="form-control"
              id="content"
              value={newPost.content}
              onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="Author" className="form-label">
              Author
            </label>
            <input
              type="text"
              className="form-control"
              id="Author"
              value={newPost.Author}
              onChange={(e) => setNewPost({ ...newPost, Author: e.target.value })}
            />
          </div>
          <button type="button" className="btn btn-primary" onClick={handleSaveClick}>
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePostForm;
