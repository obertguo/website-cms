import { Link } from 'react-router-dom';
import posts from '../data/posts.json';
import { Post } from '../types';

const Articles = () =>{
    return(
        <div>
            <h1>Articles</h1>
            {
                (posts as Post[]).map(post =>{
                    return(
                        <div key={post.title}>
                            <Link className="articleTitle" to={`/article/${post.urlize}`}>{post.title}</Link>
                            <span className="description">{post.description}</span>
                            <small className="date">Published {new Date(post.date).toLocaleDateString()}</small>
                            <hr/>
                        </div>
                    )
                })
            }
            
        </div>
    );
}

export default Articles;