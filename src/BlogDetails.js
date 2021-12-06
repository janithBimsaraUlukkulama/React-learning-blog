import { useParams } from "react-router";

const BlogDetails = () => {
    const { id } = useParams();

    return (
        <div className="blog-details">
            <h1>Blogs details - {id}</h1>
        </div>
    );
}

export default BlogDetails;