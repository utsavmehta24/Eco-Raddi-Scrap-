import React, { useState } from "react";
import { Link } from "react-router-dom";
import BlogsData from './BlogsData.json';
import './Blogs.css';

function Blogs() {
    const [active, setActive] = useState(1);

    const loadShow = () => {
        let stt = 0;
        const items = document.querySelectorAll('.itemBlog');

        items[active].style.transform = `none`;
        items[active].style.zIndex = 1;
        items[active].style.filter = 'none';
        items[active].style.opacity = 1;

        for (let i = active + 1; i < items.length; i++) {
            stt++;
            items[i].style.transform = `translateX(${120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-1deg)`;
            items[i].style.zIndex = -stt;
            items[i].style.filter = 'blur(5px)';
            items[i].style.opacity = stt > 2 ? 0 : 0.6;
        }

        stt = 0;
        for (let i = active - 1; i >= 0; i--) {
            stt++;
            items[i].style.transform = `translateX(${-120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(1deg)`;
            items[i].style.zIndex = -stt;
            items[i].style.filter = 'blur(5px)';
            items[i].style.opacity = stt > 2 ? 0 : 0.6;
        }
    };

    const handleNext = () => {
        setActive(active + 1 < BlogsData.length ? active + 1 : 0);
        loadShow();
    };


    const handlePrev = () => {
        setActive(active - 1 >= 0 ? active - 1 : active);
        loadShow();
    };

    return (
        <>
            <h1>Blogs</h1>
            <div className="Blogs-main-section">
                <div className="slider">
                    {BlogsData.map(item => (
                        <div key={item.id} className="itemBlog">
                            <img src={item.image} alt={`photo-of-${item.title}`} />
                            <p>{item.title}</p>
                            <a href=""><Link to={`/blogs/${item.id}`}>Read More</Link></a>
                        </div>
                    ))}
                    <button className="next-blog" onClick={handleNext}>&gt;</button>
                    <button className="prev-blog" onClick={handlePrev}>&lt;</button>
                </div>
            </div>
        </>
    );
}

export default Blogs;
