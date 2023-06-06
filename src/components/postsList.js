import { useSelector } from "react-redux";
import { allPosts } from "./postSlice";

const PostsList = () => {

    const posts = useSelector(allPosts)

    const renderPosts = () => {
        return(
            <div className="post-container">
            {posts.map(post => <article key={post.id} className="article-container">
                <h3>{post.title}</h3>
                <p>{post.content}</p>
                <p>by {post.userId}</p>
            </article>)}
            </div>
        )
    }
        
    
        

    

    return(
        <section>
            <h2>Posts</h2>
            {renderPosts()}
        </section>
    )
}

export default PostsList