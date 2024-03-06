import {NavLink, Link} from "react-router-dom";
import {ExploreIcon, HomeIcon, MessengerIcon, NewPostIcon, ReelsIcon} from "~/assets/icons.tsx";

export default function Footer() {
    return (
        <div className="h-[50px]">
            <div className="h-[49px] border-t border-t-[#363636] flex flex-row justify-evenly">
                <div className="flex justify-evenly w-full">
                    <NavLink to="/" className="w-12 h-12 p-3">
                        {({ isActive }) => (
                            <HomeIcon width={24} height={24} active={isActive} />
                        )}
                    </NavLink>
                    <NavLink to="explore" className="w-12 h-12 p-3">
                        {({ isActive }) => (
                            <ExploreIcon width={24} height={24} active={isActive} />
                        )}
                    </NavLink>
                    <NavLink to={"/"} className="w-12 h-12 p-3">
                        <ReelsIcon width={24} height={24} />
                    </NavLink>
                    <NavLink to={"/"} className="w-12 h-12 p-3">
                        <NewPostIcon width={24} height={24} />
                    </NavLink>
                    <Link to={"/"} className="w-12 h-12 p-3">
                        <MessengerIcon width={24} height={24} />
                    </Link>
                    <NavLink to={"/"} className="w-12 h-12 p-3">

                    </NavLink>
                </div>
            </div>
        </div>
    )
}