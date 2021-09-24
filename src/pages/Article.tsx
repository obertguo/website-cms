import ReactMarkdown from 'react-markdown';
import { Link, Redirect, useParams } from 'react-router-dom';
import posts from '../posts.json';
import { Post } from '../types';

const Article = () =>{
    const { title } = useParams<{title: string}>();
    let post: Post | undefined;

    post = (posts as Post[]).find(post => {
        return post.urlize === title;
    });

    if(post){
        return(
            <div>
                <Link className="articleTitle" to={`/article/${post.urlize}`}>{post.title}</Link>
                <span className="description">{post.description}</span>
                <small className="date">Published {new Date(post.date).toLocaleDateString()}</small>
                <hr/>
                <ReactMarkdown>{post.markdown}</ReactMarkdown>
            </div>
        );
    }
    else{
        return(
            <Redirect to="/404"/>
        );
    }
}

export default Article;