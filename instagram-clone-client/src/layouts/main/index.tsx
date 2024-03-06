import {ReactNode, useEffect} from "react";
import Sidebar from "~/layouts/main/sidebar";
import UseWindowDimensions from "~/utils/UseWindowDimensions.tsx";
import {setSidebarWidth} from "~/store/dimensions/actions.tsx";
import Header from "~/layouts/main/header";
import Footer from "~/layouts/main/footer";
import classNames from "classnames";

type props = {
    children: ReactNode
}

export default function Main(props: props) {
    const { children } = props;
    const { width } = UseWindowDimensions();

    useEffect(() => {
        if(width)
        {
            if(width >= 1920)
            {
                setSidebarWidth(336);
                document.documentElement.style.setProperty("--sidebar-width", 336 + "px");
            }
            else if(width >= 1264 && width < 1920)
            {
                setSidebarWidth(245);
                document.documentElement.style.setProperty("--sidebar-width", 245 + "px");
            }
            else if(width >= 768 && width < 1264)
            {
                setSidebarWidth(73);
                document.documentElement.style.setProperty("--sidebar-width", 73 + "px");
            }
            else
            {
                setSidebarWidth(0);
                document.documentElement.style.setProperty("--sidebar-width", 0 + "px");
            }
        }
    }, [width])

    return (
        <div className={classNames("flex min-h-screen bg-black text-[#f5f5f5]", {
            "flex-col": width && width < 768
        })}>
            { width && width < 768 ? <Header /> : "" }
            { width && width >= 768 ? <Sidebar /> : "" }
            <div className="grow ml-[var(--sidebar-width)]">
                {children}
            </div>
            { width && width < 768 ? <Footer /> : "" }
        </div>
    )
}