import HomeHeader from "~/pages/home/home-header";
import HomeRightbar from "~/pages/home/home-rightbar";
import Posts from "~/pages/home/posts";
import UseWindowDimensions from "~/utils/UseWindowDimensions.tsx";

export default function Home() {
    const { width } = UseWindowDimensions();
    // const [content, setContent] = useState(true);
    const content = true;
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
                {
                    width && width < 1160 ? null : <HomeRightbar />
                }
            </div>
        )
    return (
        <>
            fsdfdsa
        </>
    )
}
