import { setDescription, setHeading } from "../features/productsSlice"
import { useAppDispatch, useAppSelector } from "../store"
import '../css/addPost.css'
import { NavLink } from "react-router-dom"
export const AddPost = () => {
    const {heading,description} = useAppSelector(state => state.posts)
    const dispatch = useAppDispatch()
    const onSubmit = (e: any) => {
        e.preventDefault()
    }
    return (
        <>
        <div className="containerAdd">
        <NavLink to='/'><h5>X</h5></NavLink>
            <div className="title">
                <h2 className="addne">Add new Post</h2>
            </div>
            <form action="submit">
                <span className="sub">Title<input className="sub-in" onChange={e => dispatch(setHeading(e.target.value))} value={heading} type="text"/></span>
                <span className="sub">Content<textarea className="sub-text" value={description} onChange={e => dispatch(setDescription(e.target.value))}></textarea></span>
                <span className="sub">Image<p>Choose file</p></span>
                <button className="onSave" onClick={onSubmit}>Save</button>
            </form>
        </div>
        </>
    )
}