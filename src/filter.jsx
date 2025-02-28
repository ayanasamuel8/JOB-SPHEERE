import Jobtype from "./jobType"
import DoubleRange from "./double_range"
export default function Filter(){
    return(
        <>
            <div className="flex justify-center">
                <div className="inline-flex shadow-md m-5 p-5">
                    <div className="flex flex-col gap-5 justify-center">
                        <h2>Filter</h2>
                        <div className="flex flex-col gap-2">
                            <h5>Date Posted</h5>
                            <select name="time" id="select-time" className="border-2 w-full rounded-md px-2 focus:outline-none">
                                <option value="last-24">last-24</option>
                                <option value="last-48">last-48</option>
                                <option value="last-72">last-72</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h5>Job Type</h5>
                            <div>
                                <div className='border inline-flex flex-col p-4 shadow-md w-full rounded-lg'>
                                    <Jobtype type='Full-Time'/>
                                    <Jobtype type='part-time'/>
                                    <Jobtype type='internship'/>
                                    <Jobtype type='contract'/>
                                    <Jobtype type='volunter'/>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h5>Location</h5>
                            <input type="location" name="" id="" placeholder="Enter Location" className='border-2 rounded-md w-full px-2' />
                        </div>
                        <div className="flex flex-col gap-2">
                            <h5>Experience Lever</h5>
                            <select name="time" id="select-time" className="border-2  w-full rounded-md px-2 focus:outline-none">
                                <option value="Beginner">Beginner</option>
                                <option value="intermidate">Intermidate</option>
                                <option value="Expert">Expert</option>
                            </select>
                        </div>

                        <div className="flex flex-col gap-2">
                            <h5>Salary Range</h5>
                            <DoubleRange min_range={0} max_range={100}/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <span>Input Manualy</span>
                            <div className="flex">
                                <section>
                                    from <input type="number" name="" id="" className="w-24 border"/>
                                </section>
                                <section>
                                    to <input type="number" name="" id="" className="w-24 border"/>
                                </section>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h5> Currency</h5>
                            <select name="time" id="select-time" className="border-2  w-full rounded-md px-2 focus:outline-none">
                                <option value="Dolar">Dollar($)</option>
                                <option value="birr">ETB</option>
                                <option value="Pound">Pound(£)</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}