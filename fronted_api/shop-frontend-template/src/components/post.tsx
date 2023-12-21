import { FC } from "react"
import { INews } from "../inteface/INews"
import { NavLink } from "react-router-dom"
import { useAppDispatch } from "../store"
import { deletePost } from "../features/productsSlice"

export type TPost = {postData: INews}

export const Post:FC<TPost> = ({postData}) => {
    const dispatch = useAppDispatch()
    return (
        <li className="post-item">
            <div className="post-block">
                <div className="img-block">
                    <img className="img-post" src="https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg" alt="" />
                </div>
                <div className="titls-block">
                <div className="title">

                    <h2>{postData.heading}</h2>
                </div>
                <div className="pod-title">
                    <div className="date">'12.12.05'</div>
                    <NavLink to='/fullPost'><button className="btn-pod">Read Full Post</button></NavLink>
                    <button className="btn-pod2" onClick={e => dispatch(deletePost(postData.id))}>Delete</button>
                </div>
                </div>
            </div>
        </li>
    )
}