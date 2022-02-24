import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { get } from '../../config/api';

const initialState = {
  current: {},
  data: [],
  relations: [],
  status: 'idle',
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.

export const fetchLessons = createAsyncThunk(
  'serviceAreas/fetchLessons',
  async () => {
    // The value we return becomes the `fulfilled` action payload
    const response = await get('lesson');
    return response;
  }
);

export const fetchProductRelations = createAsyncThunk(
  'serviceAreas/fetchProductRelations',
  async () => {
    // The value we return becomes the `fulfilled` action payload
    const response = await fetch('http://localhost/api/v3/product_relationships');
    const data = await response.json();
    return data.data;
  }
);

export const lessons = createSlice({
  name: 'lessons',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    initialize: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.current = {};
    },
    setCurrent: (state, action) => {
      state.current = action.payload;
    },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
    .addCase(fetchLessons.pending, (state) => {
      state.status = 'fetching';
    })
    .addCase(fetchLessons.fulfilled, (state, action) => {
      state.status = 'idle';
      state.data = action.payload;
    })
  },
});

export const { initialize, setCurrent } = lessons.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectData = (state) => state.lessons.data;
export const selectStatus = (state) => state.lessons.status;
export const selectRelations = (state) => state.lessons.relations;
export const selectState = (state) => state.lessons;

export default lessons.reducer;
