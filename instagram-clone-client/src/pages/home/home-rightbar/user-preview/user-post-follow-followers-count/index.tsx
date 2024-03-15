import {numberFormat} from "~/utils/formats.tsx";

type props = {
    postCount: number,
    followersCount: number,
    followCount: number
}

export default function UserPostFollowFollowersCount(props: props) {
    const { postCount, followersCount, followCount } = props;

    return (
        <div className="grid grid-flow-col grid-cols-3 gap-x-[3px]">
            <Item count={postCount} title="gönderiler" />
            <Item count={followersCount} title="takipçiler" />
            <Item count={followCount} title="takip" />
        </div>
    )
}

const Item = (props: { count: number, title: string }) => {
    const { count, title } = props;

    return (
        <div className="px-2 flex flex-col items-center gap-y-1 text-[#f5f5f5] text-sm leading-[18px]">
            <span className="font-bold">{numberFormat(count)}</span>
            <span className="font-normal">{title}</span>
        </div>
    )
}