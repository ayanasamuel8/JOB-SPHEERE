import { useState } from "react";
export default function DoubleRange({ min_range, max_range }) {
    const [range1,setRange1] = useState(min_range)
    const [range2, setRange2] = useState(max_range)

    const handleRange1Change =(e)=>{
        setRange1(Math.min(e.target.value,range2))
    }

    const handleRange2Change = (e)=>{
        setRange2(Math.max(e.target.value, range1))
    }

    const rangeWidth1 = ((range1 - min_range) / (max_range - min_range)) * 100;
    const rangeWidth2 = ((range2 - min_range) / (max_range - min_range)) * 100;

    return (
        <>
            <div className="range-container">
                <div className="absolute border-2 w-52 bg-gray-300 h-3 rounded-md"></div>
                <div className="range-highlight absolute border-2 h-3 bg-customBlue rounded-md w-32 left-" style={{ width: `${rangeWidth2 - rangeWidth1}%`, left: `${rangeWidth1}%` }}></div>
                <input type="range" className="range-slider absolute w-52" min={min_range} max={max_range} onChange={handleRange1Change}/>
                <input type="range" className="range-slider absolute w-52" min={min_range} max={max_range} onChange={handleRange2Change}/>
            </div>
        </>
    );
}
