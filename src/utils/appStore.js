import { configure } from "@testing-library/react";
import userReducer from "./userSlice"

const appStore = configure({
    reducer: {
        user: userReducer,
    },
})
export default appStore