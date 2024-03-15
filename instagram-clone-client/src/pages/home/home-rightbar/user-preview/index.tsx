import UserPostFollowFollowersCount from "~/pages/home/home-rightbar/user-preview/user-post-follow-followers-count";
import UserInfo from "~/pages/home/home-rightbar/user-preview/user-info";
import {User} from "~/utils/types.tsx";
import PostPreviews from "~/pages/home/home-rightbar/user-preview/post-previews";
import FollowUser from "~/pages/home/home-rightbar/user-preview/follow-user";

type props = {
    setShowUserPreview: (value: boolean) => void,
    user: User|null
}

export default function UserPreview(props: props) {
    const { setShowUserPreview, user } = props;

    if(user)
        return (
            <div onMouseLeave={() => setShowUserPreview(false)} className="transition-all absolute top-0 left-0 translate-x-[var(--userPreview-translate-x)] translate-y-[var(--userPreview-translate-y)] h-full w-[366px]">
                <div id="userPreview" className="relative w-full h-full">
                    <div className="absolute top-2 left-0 py-4 bg-black rounded-lg w-full h-[338px] shadow-[0_0_23px_rgba(255,255,255,0.2)] flex flex-col gap-y-4">
                        <UserInfo user={user} />
                        <UserPostFollowFollowersCount postCount={user.postCount} followCount={user.followCount} followersCount={user.followersCount} />
                        <PostPreviews />
                        <FollowUser />
                    </div>
                </div>
            </div>
        )
    return null
}

// transform: translate(1327px, 205px)
// w-391px ,


// 0 0 23px rgba(255,255,255, .2)