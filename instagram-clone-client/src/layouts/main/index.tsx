import {ReactNode, useEffect} from "react";
import Sidebar from "~/layouts/main/sidebar";
import UseWindowDimensions from "~/utils/UseWindowDimensions.tsx";
import {setContentMargin, setSidebarWidth} from "~/store/dimensions/actions.tsx";
import Footer from "~/layouts/main/footer";
import classNames from "classnames";
import {useSidebarSection} from "~/store/sidebar/hooks.tsx";

type props = {
    children: ReactNode
}

export default function Main(props: props) {
    const { children } = props;
    const { width } = UseWindowDimensions();
    const sidebarSection = useSidebarSection();

    useEffect(() => {
        if(width && !sidebarSection)
        {
            if(width >= 1920)
            {
                setSidebarWidth(336);
                document.documentElement.style.setProperty("--sidebar-width", 336 + "px");
                document.documentElement.style.setProperty("--content-margin", 336 + "px");
                setContentMargin(336);
            }
            else if(width >= 1264 && width < 1920)
            {
                setSidebarWidth(245);
                document.documentElement.style.setProperty("--sidebar-width", 245 + "px");
                document.documentElement.style.setProperty("--content-margin", 245 + "px");
                setContentMargin(245);
            }
            else if(width >= 768 && width < 1264)
            {
                setSidebarWidth(73);
                document.documentElement.style.setProperty("--sidebar-width", 73 + "px");
                document.documentElement.style.setProperty("--content-margin", 73 + "px");
                setContentMargin(73);
            }
            else
            {
                setSidebarWidth(0);
                document.documentElement.style.setProperty("--sidebar-width", 0 + "px");
                document.documentElement.style.setProperty("--content-margin", 0 + "px");
                setContentMargin(0);
            }
        }
        else
        {
            if(width && width >= 1920)
            {
                document.documentElement.style.setProperty("--content-margin", 336 + "px");
                setContentMargin(336);
            }
            else if(width && width >= 1264 && width < 1920)
            {
                document.documentElement.style.setProperty("--content-margin", 245 + "px");
                setContentMargin(245);
            }
            else if(width && width >= 768 && width < 1264)
            {
                document.documentElement.style.setProperty("--content-margin", 73 + "px");
                setContentMargin(73);
            }
            else
            {
                document.documentElement.style.setProperty("--content-margin", 0 + "px");
                setContentMargin(0);
            }
        }
    }, [width])

    useEffect(() => {
        if(sidebarSection)
        {
            console.log("b")
            setSidebarWidth(73);
            document.documentElement.style.setProperty("--sidebar-width", 73 + "px");
        }
    }, [sidebarSection]);

    return (
        <div className={classNames("flex min-h-screen bg-black text-[#f5f5f5] transition-all", {
            "flex-col": width && width < 768
        })}>
            { width && width >= 768 ? <Sidebar /> : null }
            <div className="grow ml-[var(--content-margin)]">
                {children}
            </div>
            { width && width < 768 ? <Footer /> : null }
        </div>
    )
}