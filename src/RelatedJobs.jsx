import Job from "./Jobs"
export default function RelatedJobs({kind}){
    return (
        <>
            <div className="h-screen flex mt-4">
                <div className="inline-flex shadow-lg border rounded-lg h-2/3">
                    <div className="flex scrollbar-custom flex-col items-center">
                        <h1 className="mt-2">{kind}</h1>
                        <Job image_path='/' job_title='UI/UX Designer' company_name='Baron LLC.' location='Remote' salary_from={200} salary_to={800} />
                        <Job image_path='/' job_title='Social Media Manager' company_name='Big Khuna Burger Ltd.' location='On-site' salary_from={400} salary_to={1000} />
                        <Job image_path='/' job_title='Graphic Designer' company_name='Biffico Enterprises Ltd.' location='Remote' salary_from={200} salary_to={800} />
                        <Job image_path='/' job_title='Sales Executive' company_name='Acme Co.' location='Hybrid' salary_from={200} salary_to={800} />
                        <Job image_path='/' job_title='Sales Executive' company_name='Acme Co.' location='Hybrid' salary_from={200} salary_to={800} />
                        <Job image_path='/' job_title='Sales Executive' company_name='Acme Co.' location='Hybrid' salary_from={200} salary_to={800} />
                    </div>
                </div>
            </div>
        </>
    )
}