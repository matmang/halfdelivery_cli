import {createSlice} from '@reduxjs/toolkit';
import {signin} from '../firebase';

const userSlice = createSlice({
  name: 'users',
  initialState: {
    isLoggedIn: false,
    token: null,
  },
  reducers: {
    logIn(state, action) {
      state.isLoggedIn = true;
      state.token = action.payload.token;
    },
    logOut(state, action) {
      state.isLoggedIn = false;
      state.token = null;
    },
  },
});

export const {logIn, logOut} = userSlice.actions;
export const userLogin = form => async dispatch => {
  try {
    const data = await signin(form);
    if (data.uid) {
      dispatch(logIn(data.uid));
    }
  } catch (e) {
    alert('Wrong user/password');
  }
};

export default userSlice.reducer;
