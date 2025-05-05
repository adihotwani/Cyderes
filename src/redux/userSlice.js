import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "",
    surname: ""
}
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser(state, action) {
            state.name = action.payload.name
            state.surname = action.payload.surname
        },
        removeUser(state){
            state.name = null
            state.surname = null 
        }
    },
});

export const { addUser, removeUser } = userSlice.actions;

export const selectUserName = (state) => state.user.name;
export const selectUserSurname = (state) => state.user.surname;

export default userSlice.reducer;