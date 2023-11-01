import { configureStore } from "@reduxjs/toolkit"
import React from "react"
import ReactDOM  from "react-dom/client"
import { Provider } from "react-redux"
import App from "./App"
import userReducer from "./createReducer"

const store = configureStore({
    reducer: {
        tasks: userReducer
    }
})

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
          <App/>
        </Provider> 
    </React.StrictMode>
)