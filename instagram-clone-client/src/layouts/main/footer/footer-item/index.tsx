import {NavLink} from "react-router-dom";
import {ReactNode} from "react";

type props = {
    item: {
        url: string,
        activeIcon: ReactNode,
        passiveIcon: ReactNode
    }
}

export default function FooterItem(props: props) {
    const { item } = props;

    return (
        <NavLink to={item.url} className="w-12 h-12 p-3">
            {({ isActive }) => isActive ? item.activeIcon : item.passiveIcon}
        </NavLink>
    )
}