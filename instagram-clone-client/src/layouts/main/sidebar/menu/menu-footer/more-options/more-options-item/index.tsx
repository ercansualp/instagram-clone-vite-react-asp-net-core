import {Link} from "react-router-dom";
import UseWindowDimensions from "~/utils/UseWindowDimensions.tsx";

type props = {
    item: any
}

export default function MoreOptionsItem(props: props) {
    const { item } = props;
    const { height } = UseWindowDimensions();

    if(item.url)
        if(item.title === "Threads" && height && height <= 700)
            return (
                <>
                    <Link to={item.url} className="p-4 flex gap-x-3 items-center text-sm font-normal leading-[18px] hover:bg-[#ffffff1a] transition-all rounded-lg">
                        {item.icon}
                        <span>{item.title}</span>
                    </Link>
                    <div className="h-1.5 -mx-2 my-2 bg-[#5555554d]" />
                </>
            )
        else if(item.title === "Threads")
            return null
        else
            return (
                <Link to={item.url} className="p-4 flex gap-x-3 items-center text-sm font-normal leading-[18px] hover:bg-[#ffffff1a] transition-all rounded-lg">
                    {item.icon}
                    <span>{item.title}</span>
                </Link>
            )
    else if(!item.url && !item.divider)
        return (
            <div onClick={() => item.onClick ? item.onClick() : null} className="cursor-pointer p-4 flex gap-x-3 items-center text-sm font-normal leading-[18px] hover:bg-[#ffffff1a] transition-all rounded-lg">
                {item.icon ? item.icon : null}
                <span>{item.title}</span>
            </div>
        )
    else
        if(item.divider === "big")
            return (
                <div className="h-1.5 -mx-2 my-2 bg-[#5555554d]" />
            )
        else
            return (
                <div className="h-[0.5px] -mx-2 my-2 bg-[#55555580]" />
            )
}