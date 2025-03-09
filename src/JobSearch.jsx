import {save,share} from './assets'
export default function JobSearch({logo, title,company, type, salary, description}){//prop
    return(
        <>
            <div className="inline-flex w-fit border rounded-md shadow-md m-2">
                <div className="flex flex-col p-4">
                    <div className="flex flex-row">
                        <img src={logo} alt="profile" className="w-10 h-9 p-2 h-auto rounded-full" />
                        <div className="pr-2">
                            <h3>{title}</h3>
                            <p className="text-xs">{company}</p>
                            <section className="flex gap-1">
                                <code className="bg-gray-100 px-0.5 py-0.5 rounded font-sans text-xs">{type}</code>
                                <code className="bg-gray-100 px-0.5 py-0.5 rounded font-sans text-xs">{salary}</code>
                            </section>
                        <p>{description}</p>
                        </div>
                            <div className="flex gap-2">
                                <img src={save} alt="save" className="w-5 h-5"/>
                                <img src={share} alt="share" className="w-5 h-5"/>
                            </div>
                    </div>
                </div>
                </div>
        </>
    )
}