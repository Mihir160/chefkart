import { createBrowserRouter } from "react-router-dom";
import Table from "../Table/Table";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Table></Table>
    }
    
])