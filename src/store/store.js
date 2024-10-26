import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./reducers/movieReducer";
import themeReducer from "./reducers/themeReducer";
import otherReducer from "./reducers/otherReducer";

const store = configureStore({
    reducer: {
        theme:themeReducer,
        movie: movieReducer,
        other: otherReducer,
    },
});
export default store;