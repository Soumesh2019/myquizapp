/* eslint-disable prettier/prettier */
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const fetchQuestions = createAsyncThunk(
  'question/fetchquestions',
  async ({number, category, difficultylevel}) => {
    const res = await fetch(
      `https://opentdb.com/api.php?amount=${number}&category=${category}&difficulty=${difficultylevel}&type=multiple`,
    );
    const result = await res.json();

    return result;
  },
);

const questionSlice = createSlice({
  name: 'question',
  initialState: {
    data: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    clearQuestion: state => {
      state.data = [];
    },
  },

  extraReducers(builder) {
    builder
      .addCase(fetchQuestions.pending, state => {
        state.status = 'pending';
      })
      .addCase(fetchQuestions.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.data = action.payload.results;
      })
      .addCase(fetchQuestions.rejected, (state, {error}) => {
        state.status = 'error';
        state.data = error.message;
      });
  },
});

export const statusSeletor = state => state.question.status;
export const dataSelector = state => state.question.data;
export const {clearQuestion} = questionSlice.actions;
export default questionSlice.reducer;
