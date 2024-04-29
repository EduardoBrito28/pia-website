import { Link } from "react-router-dom";

export default function Banner() {
    return(
        <div className="w-full h-[400px] text-white flex flex-col gap-3 items-center justify-center bg-univercity-banner bg-center bg-no-repeat">
            <h1 className="text-6xl uppercase">UNIVERSIDADES</h1>
            <div className="flex flex-row gap-1">
                <Link to={`/`} className="font-bold">Home</Link>
                <h3 className="font-bold">| Universidades</h3>
            </div>
        </div>
    )
}