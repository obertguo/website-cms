import { useEffect } from 'react';
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

    //Reload article page once on render to force scripts to be reloaded in index.html
    useEffect(() =>{
        //Prevent endless refresh loop using localstorage
        if(localStorage.getItem('scriptRendered') === 'false'){
            localStorage.setItem('scriptRendered', 'true');
            window.location.reload();
        }
        else{
            localStorage.setItem('scriptRendered', 'false');
        }
    }, []);
    
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