import { NavLink, useNavigate } from "react-router-dom"
import { useAppSelector } from "../store"
import { Post } from "./post"
import './../css/posts.css'
export const Posts = () => {
    const {posts} = useAppSelector(state => state.posts)
    const navigate = useNavigate()
    const addPost = () => {
        navigate('/addPost')
    }
    return (
        <>

        <div className="container-posts">
            <div className="header-block">
                <h2>Posts</h2>
                <NavLink to='/addPost'><button className="addPost" onClick={addPost}>Add new post</button></NavLink>
            </div>
            {posts.map((post, indx) => (
                <Post key={indx} postData={post} />
            ))}
        </div>
        </>
    )
}