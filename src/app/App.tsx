import 'overlayscrollbars/overlayscrollbars.css'
import router from "@/routes/router.tsx";
import {RouterProvider} from "react-router-dom";

const App = () => {

    return(
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default App;