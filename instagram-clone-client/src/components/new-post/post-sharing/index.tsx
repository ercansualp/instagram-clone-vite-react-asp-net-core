import isBeingShared from "~/assets/img/isBeingShared.gif";
import shared from "~/assets/img/shared.gif";

interface props {
    postShare: null|boolean
}

export default function PostSharing(props: props) {
    const { postShare } = props;

    return (
        <div className="flex items-center justify-center flex-col w-full h-[692px]">
            {
                postShare !== null && postShare ? (
                    <>
                        <img src={shared} alt="" width={96} height={96} />
                        <span className="mt-4 text-[#f5f5f5] text-xl font-normal">Gönderin paylaşıldı.</span>
                    </>

                ) : (
                    <img src={isBeingShared} alt="" width={96} height={96} />
                )
            }
        </div>
    )
}
