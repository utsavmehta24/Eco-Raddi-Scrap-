import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BlogsData from '../Blogs/BlogsData.json'; // Import the entire JSON file
import './ArticleDetails.css';

const BlogDetails = () => {
    const { id } = useParams();
    const [article, setArticle] = useState(null);

    useEffect(() => {
        fetchBlogDetails();
    }, [id]);

    const fetchBlogDetails = async () => {
        try {
            // Convert id to a number and find the specific blog post
            const data = BlogsData.find(blog => blog.id === Number(id));

            console.log('Fetched Blog details:', data);
            // Update state with fetched data
            setArticle(data);
        } catch (error) {
            console.error('Error fetching article details:', error);
        }
    };

    if (!article) {
        return <div>Loading...</div>
    }
    return (
        <div className='blog-article'>
            <h1><img src={article.image} alt={`photo-of-${article.title}`} /></h1>
            <p className='blog-article-title'>{article.title}</p>
            {article.description.split('\n').map((line, index) => (
                <p key={index} className='blog-article-description'>{line}</p>
            ))}
        </div>
    );
};

export default BlogDetails;
