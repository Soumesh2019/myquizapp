/* eslint-disable prettier/prettier */
import {configureStore} from '@reduxjs/toolkit';
import questionReducer from '../slices/questionSlice';
import scoreReducer from '../slices/scoreSlice';

export default configureStore({
  reducer: {
    question: questionReducer,
    score: scoreReducer,
  },
});
