import { useEffect, useState } from "react";
import Toggle from "@/components/sidebar/components/toggle";
import Logo from "@/components/sidebar/components/logo";
import Navigation from "@/components/sidebar/components/navigation";
import Profile from "@/components/sidebar/components/profile";
import debounce from "lodash.debounce";
import classes from "./classes.module.scss";


const Sidebar = () => {

    const [isShortSidebarOpen, setIsShortSidebarOpen] = useState<boolean>(() => {
        const savedState = localStorage.getItem('isShortSidebarOpen');
        return savedState ? JSON.parse(savedState) : false;
    });

    useEffect(() => {
        const handleResize = debounce(() => {
            const shouldOpen = window.innerWidth < 750;
            if (isShortSidebarOpen !== shouldOpen) {
                setIsShortSidebarOpen(true);
            }
        }, 10);

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            handleResize.cancel();
        };
    }, [isShortSidebarOpen]);

    useEffect(() => {
        localStorage.setItem('isShortSidebarOpen', JSON.stringify(isShortSidebarOpen));
    }, [isShortSidebarOpen]);

    return(
        <aside onClick={() => setIsShortSidebarOpen(!isShortSidebarOpen)}
               className={`${classes.sidebar} ${!isShortSidebarOpen ? classes.full_sidebar : classes.short_sidebar}`}>
            <Toggle isShortSidebarOpen={isShortSidebarOpen} setIsShortSidebarOpen={setIsShortSidebarOpen} />
            <Logo isShortSidebarOpen={isShortSidebarOpen} />
            <Navigation isShortSidebarOpen={isShortSidebarOpen} />
            <Profile isShortSidebarOpen={isShortSidebarOpen} />
        </aside>
    );
};

export default Sidebar;
