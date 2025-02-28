import {search, pin} from './assets'
export default function Search(){
    return (
        <>
        <div className='flex justify-center m-0'>
            <div className="inline-flex justify-center items-center gap-2 m-0 mt-5 shadow-md rounded-2xl border p-1 px-4 w-auto">
                <img src={search} alt="search" className='w-5 h-5' />
                <input 
                    type='search' 
                    placeholder="Job titles, keywords or Company name" 
                    className='w-72 border-none  focus:outline-none'
                />
                <div className="location-button flex gap-2 border-l-2 pl-2 py-2">
                    <img src={pin} alt="location " className='w-5 h-5' />
                    <p>Location</p>
                    <button className="blue-solid-button">Search</button>
                </div>
            </div>
        </div>
        </>
    )
}