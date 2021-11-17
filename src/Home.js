import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'First title', body: 'body one', author: 'first author', id: 1 },
        { title: 'Second title', body: 'body two', author: 'second author', id: 2 },
        { title: 'Thered title', body: 'body three', author: 'thered author', id: 3 },
        { title: 'Fourth title', body: 'body four', author: 'fourth author', id: 4 },
    ])

    return (
        <div className="home">
            <h1>jhbfdjks</h1>
            <BlogList blogs={blogs} />
        </div>
    );
}

export default Home;