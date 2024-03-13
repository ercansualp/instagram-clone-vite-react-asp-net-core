import {Link} from "react-router-dom";
import {useSidebarWidth} from "~/store/dimensions/hooks.tsx";
import UseWindowDimensions from "~/utils/UseWindowDimensions.tsx";
import {SidebarLogoBig, SidebarLogoSmall} from "~/assets/icons.tsx";

export default function Logo() {
    const sidebarWidth = useSidebarWidth();
    const { height } = UseWindowDimensions();

    if(sidebarWidth === 73)
        return (
            <div className="h-[92px]">
                <div className="h-[96px] mt-3 pb-[23px]">
                    <div className="group rounded-lg cursor-pointer w-12 flex items-center justify-center my-1 p-3 hover:bg-[#ffffff1a] transition-all" style={{ height: height && height < 600 ? 52 : 56 }}>
                        <Link to="/">
                            <SidebarLogoSmall width={24} height={24} />
                        </Link>
                    </div>
                </div>
            </div>
        )
    return (
        <div className="h-[92px]">
            <div className="px-3 pt-[25px] pb-4 mb-[19px]">
                <div className="mt-[7px]">
                    <Link to="/">
                        <SidebarLogoBig width={103} height={29} />
                    </Link>
                </div>
            </div>
        </div>
    )
}