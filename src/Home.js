import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'First title', body: 'body one', author: 'first author', id: 1 },
        { title: 'Second title', body: 'body two', author: 'second author', id: 2 },
        { title: 'Thered title', body: 'body three', author: 'thered author', id: 3 },
        { title: 'Fourth title', body: 'body four', author: 'fourth author', id: 4 },
    ]);

    const [name, setName] = useState('mario')

    const handleDelete = (id) => {
        const newBlog = blogs.filter(blog => id !== blog.id);
        setBlogs(newBlog);
    }

    // Runs every render of component
    // we can use dependencies. only dependency change use effect will run. if use empty it runs first time in the rendering
    useEffect(() => {
        console.log('useEffect');
    }, [name]);

    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />
            <button onClick={() => setName('liza')}>Change name</button>
            <p>{name}</p>
        </div>
    );
}

export default Home;