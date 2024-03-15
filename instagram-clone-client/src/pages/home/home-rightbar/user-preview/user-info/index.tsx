import {Link} from "react-router-dom";
import {VerifiedAccountIcon} from "~/assets/icons.tsx";
import {User} from "~/utils/types.tsx";

type props = {
    user: User
}

export default function UserInfo(props: props) {
    const { user } = props;

    return (
        <div className="px-4 flex gap-x-4 items-center">
            <Avatar avatar={user.avatar} username={user.username} />
            <UsernameAndFullName fullName={user.fullName} username={user.username} verified={user.verified} />
        </div>
    )
}

const Avatar = (props: { avatar: string, username: string }) => {
    const { avatar, username } = props;

    return (
        <Link to={username} className="w-14 h-14">
            <img src={avatar} alt="" className="rounded-full w-14 h-14" />
        </Link>
    )
}

const UsernameAndFullName = (props: { username: string, fullName: string, verified: boolean }) => {
    const { username, fullName, verified } = props;

    return (
        <div className="flex flex-col gap-y-1">
            <Link to={username} className="flex items-center gap-x-1">
                <span className="text-[#f5f5f5] leading-5 font-bold text-base">{username}</span>
                { verified ? <VerifiedAccountIcon width={12} height={12} /> : null }
            </Link>
            <div className="leading-[18px] font-normal text-sm text-[#a8a8a8]">{fullName}</div>
        </div>
    )
}