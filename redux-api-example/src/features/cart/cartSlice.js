import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchItems,postItems } from  './cartAPI';

const initialState = {
  items: [],
  status:'idle'
};

export const fetchAsync = createAsyncThunk(
  'items/fetchItems',
  async () =>{
    const response = await fetchItems();
    return response.data;
  }
);

export const postAsync = createAsyncThunk(
  'items/postItems',
  async (item) =>{
    const {id, title, price, thumbnail} = item;
    const response = await postItems({id, title, price, thumbnail, quantity:1});
    return response.data;
  }
)

export const itemsSlice = createSlice({
  name:'items',
  initialState,
  reducers:{

  },
  extraReducers:(builder) =>{
    builder
      .addCase(fetchAsync.pending, (state) =>{
        state.status = 'loading';
      })
      .addCase(fetchAsync.fulfilled, (state, action) =>{
        state.status = 'idle';
        state.items = action.payload;
      })
      .addCase(postAsync.rejected, (state, action) =>{
        state.status = 'idle';
      })
      .addCase(postAsync.fulfilled,(state,action)=>{
        state.status = 'idle';
        state.items.push(action.payload);
      })
  }
})

export default itemsSlice.reducer;