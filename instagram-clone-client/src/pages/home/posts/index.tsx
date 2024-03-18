import {Link} from "react-router-dom";
import DefaultAvatar from "~/assets/img/user.jpg";
import {CommentIcon, HeartIcon, PostMoreOptionsIcon, SavePostIcon} from "~/assets/icons.tsx";
import ExamplePost from "~/assets/img/example_post.jpg";
import ShowedAllPostsImage from "~/assets/img/showed_all_posts.png";
import UseWindowDimensions from "~/utils/UseWindowDimensions.tsx";
import classNames from "classnames";
import {MouseEvent} from "react";

export default function Posts() {
    return (
        <div className="mt-3 flex flex-col items-center">
            <div className="" style={{ width: "min(470px, 100vw)" }}>
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <ShowedAllPosts />
            </div>
        </div>
    )
}

function Post() {
    const { width } = UseWindowDimensions();

    return (
        <article className={classNames("flex flex-col mb-5 pb-4", {
            "border-none": width && width < 487,
            "border-b border-b-[#262626]": width && width >= 487
        })}>
            <PostHeader />
            <PostContent />
            <PostFooter />
        </article>
    )
}

// post header
function PostHeader() {
    return (
        <div className="pl-1 pb-3 flex items-center justify-start">
            <PostUserAvatar />
            <div className="flex items-center mr-auto">
                <PostUserUsername />
                <div className="mx-1 text-[#a8a8a8] font-normal text-sm leading-[18px]">•</div>
                <PostTime />
            </div>
            <PostOptions />
        </div>
    )
}

function PostUserAvatar() {
    return (
        <Link to={"/"} className="mr-3 w-8 h-8">
            <img src={DefaultAvatar} alt="" width={32} height={32} className="rounded-full" />
        </Link>
    )
}

function PostUserUsername() {
    return <Link to={"ercansualp"} className="text-[#f5f5f5] text-sm font-semibold leading-[18px]">ercan.sualp</Link>
}

function PostTime() {
    return <time className="text-[#a8a8a8] text-sm font-normal leading-[18px]" dateTime="2024-03-08T07:21:34.000Z" title="8 Mart 2024">2s</time>
}

function PostOptions() {
    return (
        <button className="ml-2 w-6 h-6">
            <PostMoreOptionsIcon width={24} height={24} />
        </button>
    )
}

// post content
function PostContent() {
    const postType = true;

    return (
        <div className="border border-[#262626] w-[calc(-2px + min(470px, 100vw))] rounded">
            {
                postType ? <img src={ExamplePost} alt="" className="w-full rounded" /> :
                <>

                </>
            }
        </div>
    )
}

// post footer
function PostFooter() {
    const { width } = UseWindowDimensions();

    return (
        <div className="flex flex-col">
            <div className="my-1 flex items-center justify-between">
                <div className="flex items-center">
                    <button className="w-8 h-10 p-2 pl-0 group">
                        <HeartIcon
                            onMouseLeave={(e: MouseEvent<SVGElement>) => e.target.classList.add('animate-HeartButtonAnimation')}
                            onMouseOver={(e: MouseEvent<SVGElement>) => e.target.classList.remove('animate-HeartButtonAnimation')}
                            className="text-[#f5f5f5] group-hover:text-[#8e8e8e]"
                            width={24}
                            height={24}
                        />
                    </button>
                    <button className="w-10 h-10 p-2 group">
                        <CommentIcon className="text-[#f5f5f5] group-hover:text-[#8e8e8e]" width={24} height={24} />
                    </button>
                </div>
                <button className="w-6 h-6 group">
                    <SavePostIcon width={24} height={24} className="text-[#f5f5f5] group-hover:text-[#8e8e8e]" />
                </button>
            </div>
            {
                width && width < 487 ? null : (
                    <div className="mt-2 h-[18px] max-h-20">
                        <textarea
                            aria-label="Yorum ekle..."
                            placeholder="Yorum ekle..."
                            autoComplete="off"
                            autoCorrect="off"
                            className="text-[#f5f5f5] text-sm font-normal leading-[18px] outline-none w-full h-[18px] max-h-20 min-h-[18px] bg-black resize-none overflow-hidden"
                        ></textarea>
                    </div>
                )
            }
        </div>
    )
}

function ShowedAllPosts() {
    return (
        <div className="py-8 px-3 flex flex-col items-center">
            <img className="mb-4 w-24 h-24" src={ShowedAllPostsImage} alt=""/>
            <span className="mb-0.5 text-[#f5f5f5] text-xl font-normal leading-[25px]">Hepsini gördün</span>
            <span className="mb-5 text-[#a8a8a8] text-sm font-normal leading-[18px]">Son 3 gündeki tüm yeni gönderileri gördün.</span>
        </div>
    )
}

{
    /*
    OLD


    import Post from "~/pages/home/post";

export default function Posts() {
    return (
        <div className="flex flex-col items-center justify-start">
            <div className="w-[470px] flex flex-col">
                <Post />
            </div>
        </div>
    )
}



     */

}