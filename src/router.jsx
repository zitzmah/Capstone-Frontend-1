import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "./App"
import Index from "./pages/Index"
import Show from "./pages/Show"
import { indexLoader, showLoader } from "./loaders.jsx";
import { createAction, updateAction, deleteAction } from "./actions"
console.log("index.js")

const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path="/" element={<App/>}>
            <Route path='/' element={<Index/>} loader={indexLoader}/>
            <Route path='patients/:id' element={<Show/>} loader={showLoader}/>
            <Route path="create" action={createAction}/>
            <Route path="update/:id" action={updateAction}/>
            <Route path="delete/:id" action={deleteAction}/>
        </Route>
    </>
))
console.log("router generated")

export default router