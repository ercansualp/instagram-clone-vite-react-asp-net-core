import {useState} from "react";
import HomeHeader from "~/pages/home/home-header";
import HomeRightbar from "~/pages/home/home-rightbar";
import Posts from "~/pages/home/posts";

export default function Home() {
    const [content, setContent] = useState(true);

    if(content)
        return (
            <div className="flex justify-center pt-[22px] min-h-full">
                <div className="max-w-[630px] w-full flex flex-col">
                    <HomeHeader content={content} />
                    <hr className="bg-[#262626] h-px border-none" />
                    {/* <Stories /> */}
                    {/* <Posts /> */}
                    <Posts />
                </div>
                <HomeRightbar />
            </div>
        )
    return (
        <>
            fsdfdsa
        </>
    )
}