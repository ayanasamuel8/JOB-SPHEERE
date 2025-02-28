import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import {save,share,amazon} from './assets'

export default function JobDetail() {
  const [rating, setRating] = useState(0);
  

  return (
    <>
      <div className="h-2/3">
        <div className="inline-flex shadow-md p-4 mt-5">

        <div className="">
          <div className="flex gap-32">
            <img src={amazon} alt="Amazon-Logo" className="w-20 h-20"/>
            <div>
              <h1>Product Design</h1>
              <div className="flex gap-1">
                <h3 className="font-normal">Amazon</h3>
                {Array.from({ length: 5 }, (_, i) => (
                  <FaStar
                    key={i}
                    className={i < rating ? "text-yellow-500" : "text-gray-400"}
                    onClick={() => setRating(i + 1)}
                  />
                ))}
              </div>
            </div>
            <div>
                <section className="flex gap-2 justify-end p-4">
                    <img src={save} alt="save" className="w-5 h-5"/>
                    <img src={share} alt="share" className="w-5 h-5"/>
                </section>
                <button className="blue-solid-button"> Apply Now </button>
            </div>
          </div>
          <div className="flex gap-5 items-start m-5">
            <ul>
              <li>
                <div>
                  <h3 className="font-bold">Job Type:</h3>
                  <p>Full time</p>
                </div>
              </li>
              <li>
                <div>
                  <h3>Location:</h3>
                  <p>Logos (On-site)</p>
                </div>
              </li>
              <li>
                <div>
                  <h3>Experience:</h3>
                  <p>5 years</p>
                </div>
              </li>
              <li>
                <div>
                  <h3>Number of applicants:</h3>
                  <p>40</p>
                </div>
              </li>
            </ul>
            <ul>
              <li className="list-none">
                <h1>Job description</h1>
                <p>Describe the job role here.. djaklfadkadfkl dkl d  <br/> dfjfakjfkafjakldfjalkjdsf lkfa .</p>
              </li>
              <li className="list-none">
                <h1>Key Responsibilities</h1>
                <ul>
                  <li>Responsibility 1</li>
                  <li>Responsibility 2</li>
                  <li>Responsibility 3</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}
