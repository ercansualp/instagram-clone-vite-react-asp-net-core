import Threads from "./threads";
import MoreOptions from "./more-options";
import UseWindowDimensions from "~/utils/UseWindowDimensions.tsx";

export default function MenuFooter() {
    const { height } = UseWindowDimensions();

    return (
        <div className="mt-auto flex flex-col">
            { height && height <= 700 ? "" : <Threads /> }
            <MoreOptions />
        </div>
    )
}