import { back } from "./assets"
export default function Back(){
    return(
        <>
            <div className="inline-flex gap-2 mt-5 items-center">
                <img src={back} alt="back" className="w-5 h-5" />
                <h2 className="font-normal">Back</h2>
            </div>
        </>
    )
}