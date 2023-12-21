import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
interface ICom {
    name: string
    comment: string
}

interface IComment {
    id: string
    comments: ICom[]
    name: string,
    comment: string
}

const initialState: IComment = {
  comments: [
    { name: 'Akezhan', comment: 'good post' }
  ],
  name: "",
  comment: "",
  id: ""
};

export const getComments = createAsyncThunk(
  "getPosts",
  async() => {
    const {data} = await axios.get('http://localhost:8000/comments')
    return data
  }
)

export const deleteComment = createAsyncThunk(
  "deletePost",
  async() => {

  }
)

export const createComment = createAsyncThunk(
  "createPost",
  async() => {

  }
)

export const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {
    setName: (state,action) => {
      state.name = action.payload
    },
    setComment: (state,action) => {
      state.comment = action.payload
    },
    addComment: state => {
      const name = state.name
      const comment = state.comment
      const newComment = {
        name,
        comment
      }
      state.comments.push(newComment)
    },
    setId: (state, action) => {
      state.id = action.payload
    }
  },extraReducers: builder => builder.
  addCase(getComments.fulfilled, (state, action) => {
    state.comments.push(action.payload)
  })
})
export const {
  setName,
  setComment,
  addComment,
  setId
} = commentSlice.actions

