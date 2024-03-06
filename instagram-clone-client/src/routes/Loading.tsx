import LoadingIcon from "~/assets/img/loading.png";
import FromMeta from "~/assets/img/from_meta.png";

export default function Loading() {
    return (
        <div className="h-screen flex items-center justify-center">
            <img src={LoadingIcon} alt="" width={80} height={80} />
            <span className="w-[72px] h-[41px] -mt-9 -ml-9 absolute bottom-8 inset-x-1/2">
                <img src={FromMeta} alt="" width={72} height={37} />
            </span>
        </div>
    )
}