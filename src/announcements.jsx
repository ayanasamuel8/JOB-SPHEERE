import { useState,useEffect } from "react";
import JobSearch from "./JobSearch";
import { config } from './config';
export default function Announcement(){
    const [joblist, setJoblist] = useState([]);
    const apiUrl = config.apiUrl;
      useEffect(() =>{
         const fetchData = async() => {
          try{
            const response = await fetch(apiUrl)
            if(!response.ok) throw new Error("faild to fetch")
            const data = await response.json()
            setJoblist((data.jobs).slice(0,5))
            console.log(data)
          }catch(e){
            console.log(e)
          }
        }
        fetchData()
      },[]
       
    )
    return(
        <>
            <div className="flex justify-center overflow-x-hidden">
                <div className="inline-flex flex-col">
                    {
                        joblist.map((job) => (
                            <JobSearch key={job.id} logo={job.logo} title={job.title} company={job.company} location={job.location} type={job.type}
                            salary={job.salary}  description={job.description}/>
                        ))
                    }
                </div>
            </div>
        </>
    )
}