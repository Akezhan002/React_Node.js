import { FC } from "react"
import { INews } from "../inteface/INews"
import { useAppDispatch, useAppSelector } from "../store"
import { addComment, setComment, setName } from "../features/commentSlice"

export type TPost = {postData: INews}

export const FullPost:FC<TPost> = ({postData}) => {
    const {name, comment} = useAppSelector(state => state.comment)
    const dispatch = useAppDispatch()
   return (
    <>
    <div className="container-full">
        <div className="header-full">
            News
        </div>
        <div className="main-block">
            <div className="header">
                <h1>{postData.heading}</h1>
                <div className="date">{}</div>
                <p>{postData.description}</p>
            </div>
            <div className="comments">
                <h1>Comments</h1>
            </div>
            <div className="add-comment">
                <form action="">
                    <span>Name<input value={name}  onChange={e => dispatch(setName(e.target.value))} type="text" /></span>
                    <span>Comment<input value={comment}  onChange={e => dispatch(setComment(e.target.value))}  type="text" /></span>
                    <button onClick={e => dispatch(addComment())}>Add</button>
                </form>
            </div>
        </div>
    </div>
    </>
   )
}