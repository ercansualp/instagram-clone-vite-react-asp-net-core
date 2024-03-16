import { Dialog } from '@headlessui/react'
import {CancelIcon, SearchFollowerIcon} from "~/assets/icons.tsx";
import {ChangeEvent, MouseEvent, useState} from "react";
import ClearSearchTextIcon from "~/assets/img/instagram-icons.png";
import {Link} from "react-router-dom";
import DefaultAvatar from "~/assets/img/user.jpg";
import UseWindowDimensions from "~/utils/UseWindowDimensions.tsx";
import {useContentMargin} from "~/store/dimensions/hooks.tsx";
import UserPreview from "~/pages/home/home-rightbar/user-preview";
import classNames from "classnames";

type props = {
    value: boolean,
    isOpen: boolean,
    setIsOpen: (value: boolean) => void
}

type User = {
    username: string,
    fullName: string,
    avatar: string,
    postCount: number,
    followersCount: number,
    followCount: number
}

export default function Followers(props: props) {
    const { value, isOpen, setIsOpen } = props;

    return (
        <Dialog
            open={isOpen}
            onClose={() => setIsOpen(false)}
            className="relative z-50"
        >
            <div className="fixed inset-0 flex w-screen items-center justify-center">
                <Dialog.Panel className="w-full max-w-[400px] rounded-xl bg-[#262626] flex flex-col max-h-[400px] h-full" id="followersContainer">
                    <Header setIsOpen={setIsOpen} />
                    <SearchUser />
                    <div className="overflow-y-auto">
                        <Users />
                        <Recommeneds />
                    </div>
                </Dialog.Panel>
            </div>
        </Dialog>
    )
}

const Header = (props: { setIsOpen: (value: boolean) => void }) => {
    const { setIsOpen } = props;

    return (
        <div className="border-b border-b-[#363636] h-[43px] text-[#f5f5f5] relative flex items-center justify-center">
            <div className="text-base font-semibold leading-5">Takipçiler</div>
            <button className="absolute flex items-center justify-center right-0 top-0 w-[50px] h-full" onClick={() => setIsOpen(false)}>
                <CancelIcon width={18} height={18} />
            </button>
        </div>
    )
}

const SearchUser = () => {
    const [searchText, setSearchText] = useState<string|null>(null);
    const [isFocus, setIsFocus] = useState(false);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchText(event.target.value);
    }

    return (
        <div className="py-2 px-4 relative">
            <input onChange={handleChange} onFocus={() => setIsFocus(true)} onBlur={() => setIsFocus(false)} type="text" className="h-8 px-4 py-[3px] w-full outline-none rounded-lg bg-[#262626] text-[#f5f5f5]" />
            <div className="absolute top-4 left-8">
                <div className="flex text-[#8e8e8e] gap-x-2 items-center">
                    { !isFocus ? <SearchFollowerIcon width={16} height={16} /> : null }
                    <span className="text-[#a8a8a8] text-sm font-light leading-[18px]">Ara</span>
                </div>
            </div>
            { searchText ? <div className="absolute right-8 top-4 bg-no-repeat h-5 w-5" style={{ backgroundImage: `url("${ClearSearchTextIcon}")`, backgroundPosition: "-318px -333px" }}></div> : null }
        </div>
    )
}

const Users = () => {
    const { width, height } = UseWindowDimensions();
    const { contentMargin } = useContentMargin();
    const [selectedUser, setSelectedUser] = useState<User|null>(null);
    const [showUserPreview, setShowUserPreview] = useState<boolean>(false);
    const users: User[] = [
        { username: "ercansualp", fullName: "Ercan SUALP", avatar: DefaultAvatar, postCount: 1, followersCount: 1, followCount: 1 },
        { username: "ercansualp", fullName: "Ercan SUALP", avatar: DefaultAvatar, postCount: 1, followersCount: 1, followCount: 1 },
        { username: "ercansualp", fullName: "Ercan SUALP", avatar: DefaultAvatar, postCount: 1, followersCount: 1, followCount: 1 },
        { username: "ercansualp", fullName: "Ercan SUALP", avatar: DefaultAvatar, postCount: 1, followersCount: 1, followCount: 1 },
        { username: "ercansualp", fullName: "Ercan SUALP", avatar: DefaultAvatar, postCount: 1, followersCount: 1, followCount: 1 },
        { username: "ercansualp", fullName: "Ercan SUALP", avatar: DefaultAvatar, postCount: 1, followersCount: 1, followCount: 1 },
        { username: "ercansualp", fullName: "Ercan SUALP", avatar: DefaultAvatar, postCount: 1, followersCount: 1, followCount: 1 },
        { username: "ercansualp", fullName: "Ercan SUALP", avatar: DefaultAvatar, postCount: 1, followersCount: 1, followCount: 1 },
        { username: "ercansualp", fullName: "Ercan SUALP", avatar: DefaultAvatar, postCount: 1, followersCount: 1, followCount: 1 }
    ]

    const handleMouseOver = (index: number, isAvatar: boolean = true) => {
        const followersContainerHeighht = document.getElementById("followersContainer");
        if(width && height)
        {
            let userPreviewTranslateX: number = (width - 400) / 2, userPreviewTranslateY: number = 0;
            if(followersContainerHeighht)
                userPreviewTranslateY = (height - followersContainerHeighht.offsetHeight) / 2;
            if(!isAvatar)
            {
                userPreviewTranslateX += 72;
                userPreviewTranslateY += 128 + (60 * index);
            }
            else
            {
                userPreviewTranslateX += 16;
                userPreviewTranslateY += 143 + (60 * index);
            }
            document.documentElement.style.setProperty("--userPreview-translate-x", userPreviewTranslateX + "px");
            document.documentElement.style.setProperty("--userPreview-translate-y", userPreviewTranslateY + "px");
        }
        const selectedUser = users[index];
        setSelectedUser(selectedUser);
        setShowUserPreview(true);
    }

    const handleMouseLeave = (event: MouseEvent<HTMLAnchorElement>) => {
            if(event.relatedTarget && event.relatedTarget.id !== "userPreview")
                setShowUserPreview(false);
    }

    return (
        <>
            <div className="">
                {
                    users.map((user, index) => (
                        <User key={index} user={user} onMouseOver={handleMouseOver} index={index} onMouseLeave={handleMouseLeave} />
                    ))
                }
            </div>
            { showUserPreview ? <UserPreview setShowUserPreview={setShowUserPreview} user={selectedUser} /> : null }
        </>
    )
}

const User = (props: { user: User, index: number, onMouseOver: (index: number, isAvatar?: boolean) => void, onMouseLeave: (event: MouseEvent<HTMLAnchorElement>) => void, isFollowing: boolean }) => {
    const { user, index, onMouseOver, onMouseLeave, isFollowing = false } = props;

    return (
        <div className="py-2 px-4 flex items-center gap-x-3">
            <Link to={user.username}  onMouseOver={() => onMouseOver(index)} onMouseLeave={onMouseLeave}>
                <img src={(user.avatar as unknown) as string} alt="" width={44} height={44} className="rounded-full" />
            </Link>
            <div className="grow">
                <Link to={user.username} className="text-[#f5f5f5] font-semibold text-sm leading-[18px]" onMouseOver={() => onMouseOver(index, false)} onMouseLeave={onMouseLeave}>
                    {user.username}
                </Link>
            </div>
            <button className={classNames("flex items-center justify-center px-4 rounded-lg text-[#f5f5f5] text-sm font-semibold leading-[18px] h-8", {
                "bg-[#555555b3] hover:bg-[#363636]": isFollowing,
                "bg-[#0095f6] hover:bg-[#1877f2]": !isFollowing
            })}>
                {isFollowing ? "Çıkar" : "Takip Et"}
            </button>
        </div>
    )
}

const Recommeneds = () => {
    const { width, height } = UseWindowDimensions();
    const [showUserPreview, setShowUserPreview] = useState(false);
    const [selectedUser, setSelectedUser] = useState<User|null>(null);
    const users: User[] = [
        { username: "ercansualp", fullName: "Ercan SUALP", avatar: DefaultAvatar, postCount: 1, followersCount: 1, followCount: 1 },
        { username: "ercansualp", fullName: "Ercan SUALP", avatar: DefaultAvatar, postCount: 1, followersCount: 1, followCount: 1 },
        { username: "ercansualp", fullName: "Ercan SUALP", avatar: DefaultAvatar, postCount: 1, followersCount: 1, followCount: 1 },
        { username: "ercansualp", fullName: "Ercan SUALP", avatar: DefaultAvatar, postCount: 1, followersCount: 1, followCount: 1 },
        { username: "ercansualp", fullName: "Ercan SUALP", avatar: DefaultAvatar, postCount: 1, followersCount: 1, followCount: 1 },
        { username: "ercansualp", fullName: "Ercan SUALP", avatar: DefaultAvatar, postCount: 1, followersCount: 1, followCount: 1 },
        { username: "ercansualp", fullName: "Ercan SUALP", avatar: DefaultAvatar, postCount: 1, followersCount: 1, followCount: 1 },
        { username: "ercansualp", fullName: "Ercan SUALP", avatar: DefaultAvatar, postCount: 1, followersCount: 1, followCount: 1 },
        { username: "ercansualp", fullName: "Ercan SUALP", avatar: DefaultAvatar, postCount: 1, followersCount: 1, followCount: 1 },
        { username: "ercansualp", fullName: "Ercan SUALP", avatar: DefaultAvatar, postCount: 1, followersCount: 1, followCount: 1 },
        { username: "ercansualp", fullName: "Ercan SUALP", avatar: DefaultAvatar, postCount: 1, followersCount: 1, followCount: 1 }
    ]

    const handleMouseOver = (index: number, isAvatar: boolean = true) => {
        const followersContainerHeighht = document.getElementById("followersContainer");
        if(width && height)
        {
            let userPreviewTranslateX: number = (width - 400) / 2, userPreviewTranslateY: number = 0;
            if(followersContainerHeighht)
                userPreviewTranslateY = (height - followersContainerHeighht.offsetHeight) / 2;
            if(!isAvatar)
            {
                userPreviewTranslateX += 72;
                userPreviewTranslateY += 128 + (60 * index);
            }
            else
            {
                userPreviewTranslateX += 16;
                userPreviewTranslateY += 439 + (60 * index);
            }
            document.documentElement.style.setProperty("--userPreview-translate-x", userPreviewTranslateX + "px");
            document.documentElement.style.setProperty("--userPreview-translate-y", userPreviewTranslateY + "px");
        }
        const selectedUser = users[index];
        setSelectedUser(selectedUser);
        setShowUserPreview(true);
    }

    const handleMouseLeave = (event: MouseEvent<HTMLAnchorElement>) => {
        if(event.relatedTarget && event.relatedTarget.id !== "userPreview")
            setShowUserPreview(false);
    }

    return (
        <>
            <div className="flex flex-col">
                <div className="mt-4 mb-3 px-3 text-[#f5f5f5] text-base font-semibold leading-5">Senin için önerilenler</div>
                <div className="py-2">
                    {
                        users.map((user, index) => (
                            <User key={index} user={user} onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} index={index}  />
                        ))
                    }
                </div>
            </div>
            { showUserPreview ? <UserPreview setShowUserPreview={setShowUserPreview} user={selectedUser} /> : null }
        </>
    )
}