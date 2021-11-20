/* eslint-disable prettier/prettier */
import {createSlice} from '@reduxjs/toolkit';

const scoreSlice = createSlice({
  name: 'score',
  initialState: {
    correct: 0,
    skipped: 0,
    incorrect: 0,
  },
  reducers: {
    incrementScore: state => {
      state.correct += 1;
    },
    skippedScore: state => {
      state.skipped += 1;
    },
    incorrectScore: state => {
      state.incorrect += 1;
    },
    clearScoreBoard: state => {
      state.correct = 0;
      state.skipped = 0;
      state.incorrect = 0;
      console.log('Score Board Cleared');
    },
  },
});

export default scoreSlice.reducer;
export const {incrementScore, skippedScore, incorrectScore, clearScoreBoard} =
  scoreSlice.actions;
export const correctSelector = state => state.score.correct;
export const incorrectSelector = state => state.score.incorrect;
export const skippedSelector = state => state.score.skipped;
