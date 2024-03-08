import PostHeader from "~/pages/home/post/post-header";
import PostContent from "~/pages/home/post/post-content";
import PostFooter from "~/pages/home/post/post-footer";

export default function Post() {
    return (
        <div>
            <div className="flex flex-col mb-5 border-b border-b-[#262626] pb-4">
                <PostHeader />
                <PostContent />
                <PostFooter />
            </div>
        </div>
    )
}