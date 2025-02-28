export default function Logos({logo}){
    return (
        <>
            <div className="inline-flex mr-5 border">
                <button className="p-2 bg-white rounded-md">
                    <img src={logo} alt="logo" className="w-10 h-10"/>
                </button>
            </div>
        </>
    )
}