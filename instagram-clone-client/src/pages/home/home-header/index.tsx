import classNames from "classnames";

type props = {
    content: boolean
}

export default function HomeHeader(props: props) {
    const { content } = props;

    return (
        <div className="mt-2 h-[49px] flex gap-x-3">
            <button className={classNames("leading-5 text-base font-bold", {
                "text-[#f5f5f5]": content,
                "text-[#737373]": !content
            })}>Senin için</button>
            <button className={classNames("leading-5 text-base font-bold", {
                "text-[#f5f5f5]": !content,
                "text-[#737373]": content
            })}>Takip ettiklerin</button>
        </div>
    )
}