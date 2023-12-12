import React, { useEffect, useState } from 'react';
import axios from '../utils/axios';
import MyTable from '../components/MyTable';
import CreatePostForm from '../components/forms/createPostForm';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate= useNavigate();
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState({});
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [showUpdateForm, setShowUpdateForm] = useState(false);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = () => {
    let token = localStorage.getItem('token');
    axios.get('/post', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(res => {
      setPosts(res.data.data);
    })
    .catch(err => {
      console.log(err);
    });
  };

  const handleDelete = (postId) => {
    axios.delete(`/post/${postId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(() => {
      setPosts(posts.filter(post => post._id !== postId));
    })
    .catch(err => {
      console.log(err);
    });
  };

  const handleUpdate = (postId,updatedPost) => {

    setPost(updatedPost)
    setShowUpdateForm(true);

  };

  const handleUpdateSave = (newPost, postId) => {
    const token = localStorage.getItem('token');
    axios.put('/post/'+postId, newPost, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(res => {
      console.log(res);
    })
    .catch(error => {
      console.error('Error creating post:', error);
    });
  
    setShowUpdateForm(false);
  };
  const handleCreateClick = () => {
    setShowCreateForm(true);
  };

  const handleCreateSave = (newPost) => {
    console.log('New Post:', newPost);
    const token = localStorage.getItem('token');
    axios.post('/post', newPost, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(res => {
      console.log(res);
    })
    .catch(error => {
      console.error('Error creating post:', error);
    });
  
    setShowCreateForm(false);
  };
  
  const handleFormClose=()=>{
    setShowCreateForm(false);
    setShowUpdateForm(false);
 
  }

  return (
    <div >
      <h1 className='text-center'>Posts</h1>

      {showCreateForm && <CreatePostForm onCreate={handleCreateSave} onUpdate={handleUpdateSave} onClose={handleFormClose} update={false}  post={post}/>}
      {showUpdateForm && <CreatePostForm onCreate={handleCreateSave} onUpdate={handleUpdateSave} onClose={handleFormClose} update={true}  post={post} />}

      <MyTable posts={posts} onDelete={handleDelete} onUpdate={handleUpdate} />
      <div  class="d-flex justify-content-center">
      <button className="btn btn-success mx-auto" onClick={handleCreateClick}>
        Create Post
      </button>

      </div>
    </div>
  );
};

export default Home;
