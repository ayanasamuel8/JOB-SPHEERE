import { cancel } from "./assets";
export default function Job({image_path,job_title,company_name,location,salary_from,salary_to}) {
  return (
  <>
    <div className="w-64 h-26 inline-flex border rounded-md shadow-md m-2">
        <div className="flex p-4">
            <img src={image_path} alt="profile" className="w-20 h-20 rounded-full" />
            <div className="pr-2">
                <h3>{job_title}</h3>
                <p className="text-xs">{company_name}</p>
                <section className="flex gap-1">
                    <code className="bg-gray-100 px-0.5 py-0.5 rounded font-mono text-xs">{location}</code>
                    <code className="bg-gray-100 px-0.5 py-0.5 rounded font-mono text-xs">${salary_from} - ${salary_to}</code>
                </section>
            </div>
            <img src={cancel} alt="delete" className="w-3 h-3" />
        </div>
    </div>
  </>
  );
}
