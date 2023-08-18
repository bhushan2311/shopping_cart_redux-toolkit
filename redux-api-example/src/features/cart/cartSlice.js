import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchItems,postItems,deleteItems,UpdateItems } from  './cartAPI';

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

export const deleteAsync = createAsyncThunk(
  'items/deleteItems',
  async ({id}) =>{
    await deleteItems(id);
    return id;
  }
)

export const updateAsync = createAsyncThunk(
  'items/updateItems',
  async ({item,change}) =>{
    const response = await UpdateItems({item,change})
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
      .addCase(deleteAsync.rejected,(state,action)=>{
        state.status = 'idle';
      })
      .addCase(deleteAsync.fulfilled,(state,action)=>{
        state.status = 'idle';
        const index = state.items.findIndex((item)=> item.id === action.payload);   // we are getting id in action.payload
        state.items.splice(index,1);
      })
      .addCase(updateAsync.rejected,(state,action)=>{
        state.status = 'idle';
      })
      .addCase(updateAsync.fulfilled,(state,action)=>{
        state.status = 'idle';
        const index = state.items.findIndex((item) => item.id === action.payload.id); // we are getting whole item in action.payload i.e 'action.payload.id' is equivalent to 'item.id'
        // console.log(action.payload);
        state.items.splice(index,1,action.payload);
      })
  }
})

export default itemsSlice.reducer;