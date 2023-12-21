import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import { INews } from "../inteface/INews";
import axios from "axios";

interface IPost {
  posts: INews[],
  heading: string,
  description: string
  image: string
}

const initialState: IPost = {
  posts: [
    { id: '1', heading: 'Важные годы', description: 'Как не потерять время в 21', image: 'post.jpg', date: new Date() }
  ],
  heading: "",
  description: "",
  image: ""
};

export const getPosts = createAsyncThunk(
  "getPosts",
  async() => {
    const {data} = await axios.get('http://localhost:8000/posts')
    return data
  }
)

// export const deletePost = createAsyncThunk(
//   "deletePost",
//   async() => {

//   }
// )

export const createPost = createAsyncThunk(
  "createPost",
  async() => {

  }
)





export const productsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setHeading: (state,action) => {
      state.heading = action.payload
    },
    setDescription: (state,action) => {
      state.description = action.payload
    },
    setImage: (state,action) => {
      state.image = action.payload
    },
    deletePost: (state, action) => {
      console.log(action.payload);
      const a = state.posts.find((post) => post.id != action.payload)
      console.log(a);
      
      
    }
  },
  extraReducers: builder => builder
  .addCase(getPosts.fulfilled,(state,action) => {
    state.posts.push(action.payload)
  })
  // .addCase(deletePost.fulfilled,(state,action) => {
    
  // })
  .addCase(createPost.fulfilled,(state,action) => {
    
  })
})
export const {
  setHeading,
  setDescription,
  setImage,
  deletePost
} = productsSlice.actions
