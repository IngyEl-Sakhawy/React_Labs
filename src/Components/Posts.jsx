import React, {useState, useEffect} from 'react';
import axios from 'axios';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredPosts, setFilteredPosts] = useState([]);

    useEffect(() => {
        GetAllPosts();
    }, []);

    const GetAllPosts = () => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(res => { setPosts(res.data);
                setFilteredPosts(res.data);
             })
            .catch(err => console.log(err))
    }
    const handleSearch = () => {
        const filtered = posts.filter(post => {
            return post.title.toLowerCase().includes(searchTerm.toLowerCase());
        });
        setFilteredPosts(filtered);
    }

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    }
    return (
        <div>
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search by title..."
                    value={searchTerm}
                    onChange={handleChange}
                />
                <button className="btn btn-dark" onClick={handleSearch}>Search</button>
            </div>

            <div class="row">
            {filteredPosts.map(p => (
                    <div key={p.id} className="col-sm-6 mb-3 mb-sm-0">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{p.title}</h5>
                                <p className="card-text">{p.body}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Posts;