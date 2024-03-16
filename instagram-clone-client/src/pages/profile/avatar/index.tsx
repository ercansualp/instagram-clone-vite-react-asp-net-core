export default function Avatar(props: { avatar: string }) {
    const { avatar } = props;

    return (
        <div className="grow">
            <img src={avatar} alt="" className="w-[150px} h-[150px] rounded-full mx-auto" />
        </div>
    )
}