import classNames from "classnames";
import UseWindowDimensions from "~/utils/UseWindowDimensions.tsx";

export default function Avatar(props: { avatar: string }) {
    const { width } = UseWindowDimensions();
    const { avatar } = props;

    return (
        <div className={classNames({
            "grow": width && width >= 736
        })}>
            <img src={avatar} alt="" className={classNames("rounded-full", {
                "w-[77px] h-[77px]": width && width < 736,
                "w-[150px} h-[150px] mx-auto": width && width >= 736
            })} />
        </div>
    )
}