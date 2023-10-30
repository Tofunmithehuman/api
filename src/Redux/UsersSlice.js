import { createSlice } from "@reduxjs/toolkit";


const UsersSlice = createSlice({
    name: "users",
    initialState: {
        list: [],
    },
    reducers: {
        setUsersList: (state, actions) => {
            const list = actions.payload;
            state.list = list;

        }

    }
})
export const { setUsersList } = UsersSlice.actions;
export default UsersSlice.reducer;