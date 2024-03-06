import {ExploreIcon, HomeIcon, MessengerIcon, NewPostIcon, ReelsIcon} from "~/assets/icons.tsx";
import FooterItem from "~/layouts/main/footer/footer-item";
import HeadlessUIDialog from "~/components/headlessUIDialog";
import NewPost from "~/components/new-post";

const footerItems = [
    {
        url: "/",
        activeIcon: <HomeIcon width={24} height={24} active={true} />,
        passiveIcon: <HomeIcon width={24} height={24} active={false} />
    },
    {
        url: "explore",
        activeIcon: <ExploreIcon width={24} height={24} active={true} />,
        passiveIcon: <ExploreIcon width={24} height={24} active={false} />
    },
    {
        url: "reels",
        activeIcon: <ReelsIcon width={24} height={24} active={true} />,
        passiveIcon: <ReelsIcon width={24} height={24} active={false} />
    },
    <NewPostIcon width={24} height={24} />,
    {
        url: "direct/inbox",
        activeIcon: <MessengerIcon width={24} height={24} active={true} />,
        passiveIcon: <MessengerIcon width={24} height={24} active={false} />
    },
    {
        url: "/",
        activeIcon: <HomeIcon width={24} height={24} active={true} />,
        passiveIcon: <HomeIcon width={24} height={24} active={false} />
    }
];

export default function Footer() {
    return (
        <div className="h-[50px]">
            <div className="h-[49px] border-t border-t-[#363636] flex flex-row justify-evenly">
                <div className="flex justify-evenly w-full">
                    {
                        footerItems.map((item, index) => (
                            item.url ? <FooterItem key={index} item={item} /> : (
                                <HeadlessUIDialog icon={item}>
                                    <NewPost />
                                </HeadlessUIDialog>
                            )
                        ))
                    }
                </div>
            </div>
        </div>
    )
}