import { createSlice } from "@reduxjs/toolkit";

export const HeightNavBar = createSlice({
    name:"heightnavbar",
    initialState:{
        navBarHeight: 0
    },
    reducers:{
        saveNavBarHeight: (state, action) => {
            state.navBarHeight = action.payload
        }
    }
})

export const {saveNavBarHeight} = HeightNavBar.actions