import { work } from "./assets"
import Navbar from "./navbar"
import Search from "./search"
import Filter from "./filter"
import Announcement from "./announcements"
import RelatedJobs from "./RelatedJobs"

export default function Homepage(){
    return (
        <>
            <div className="h-fit bg-gray-100">
                <Navbar/>
                <div className="bg-blue-700 w-full h-62 text-white">
                    <div className="flex word-break">
                        <div className="m-20 ml-96 w-96">
                            <h1 className="text-5xl">Find your dream Job with ease</h1>
                            <p className="text-gray-200"> search, Apply and track job applications all in one place</p>
                        </div>
                    </div>
                    <img src={work} alt="person" className="absolute top-4 right-24 w-96 h-128"/>
                </div>
                <Search/>
                <div className="flex justify-around">
                    <Filter/>
                    <Announcement/>
                    <RelatedJobs kind={'Saved Jobs'}/>
                </div>
            </div>
        </>
    )
}