import {NavLink} from "react-router-dom";
import classNames from "classnames";

type props = {
    item: any
}

export default function MenuItem(props: props) {
    const { item } = props;

    return (
        <div className="h-12 p-3 my-1 transition-all hover:bg-[#ffffff1a] rounded-lg group">
            <NavLink to={item.url} className="flex gap-x-4 items-center">
                {({ isActive }) => (
                    <>
                        {isActive ? item.activeIcon : item.passiveIcon}
                        <span className={classNames("leading-5 text-base mt-0.5", {
                            "font-bold": isActive,
                            "font-normal": !isActive
                        })}>{item.title}</span>
                    </>
                )}
            </NavLink>
        </div>
    )
}

/*

import {NavLink} from "react-router-dom";

type props = {
    item: any
}

export default function FooterItem(props: props) {
    const { item } = props;

    return (
        <NavLink to={item.url} className="w-12 h-12 p-3">
            {({ isActive }) => isActive ? item.activeIcon : item.passiveIcon}
        </NavLink>
    )
}

*/