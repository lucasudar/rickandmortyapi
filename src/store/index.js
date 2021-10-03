import { createStore } from "vuex"
import Heroes from "./plugins/Heroes";

const store = createStore({
    modules: {
        Heroes
    }
})

export default store