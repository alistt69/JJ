import {useEffect} from "react";
import 'overlayscrollbars/overlayscrollbars.css'
import { useOverlayScrollbars } from "overlayscrollbars-react";
import router from "@/routes/router.tsx";
import {RouterProvider} from "react-router-dom";

const App = () => {

    const [initBodyOverlayScrollbars] = useOverlayScrollbars({
        defer: true,
        options: {
            scrollbars: {
                autoHide: 'scroll',
                theme: 'os-theme-light',
                clickScroll: true,
            },
        },
    });

    useEffect(() => {
        initBodyOverlayScrollbars(document.body);
    }, [initBodyOverlayScrollbars]);

    return(
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default App;