import INPUT from "./input_form"
import {apple_logo,google_logo,linkedin_logo,facebook_logo,job_sphere} from './assets'
import { email, profile,padlock } from "./assets"
import Logos from "./logos"
export default function Authentication({action, headline, elements}){
    return(
        <>
            <div className="flex justify-center items-center h-full">
                <div className="">
                    <section className="w-fit inline-flex flex-col gap-4">
                        <header className="m-2">
                            <div>
                                <img src={job_sphere} alt="Job-Sphere" className="w-28 my-1 h-12 rounded-lg"/>
                                <h2>{headline}</h2>
                            </div>
                        </header>
                        <form action={action} className="flex flex-col gap-4">
                            { action == 'Signup' ? (
                                <>
                                    <INPUT type={'name'} placeholder={'Fist name'} image_path={profile}/>
                                    <INPUT type={'name'} placeholder={'Last name'} image_path={profile}/>
                                    <INPUT type={'email'} placeholder={'Enter your email'} image_path={email}/>
                                    <INPUT type={'password'} placeholder={'password'} image_path={padlock}/>
                                    <INPUT type={'password'} placeholder={'Confirm password'} image_path={padlock}/>
                                    <button className="blue-solid-button">Create Account</button>
                                </>
                            ):
                            <>
                                <INPUT type={'email'} placeholder={'Enter your email'} image_path={email}/>
                                <INPUT type={'password'} placeholder={'password'} image_path={padlock}/>
                                <button className="blue-solid-button">Sign in </button>
                            </>
                            }
                        </form>
                        <footer className="flex flex-col gap-4">
                            <div className="flex justify-between items-center">
                                <hr className="flex-grow border-t border-gray-300 " />
                                <span className="mx-2"><strong>OR</strong></span>
                                <hr className="flex-grow border-t border-gray-300" />
                            </div>
                            <div className="flex justify-between">
                                <Logos logo={google_logo}/>
                                <Logos logo={apple_logo}/>
                                <Logos logo={facebook_logo}/>
                                <Logos logo={linkedin_logo}/>
                            </div>
                            <div className="flex justify-around">
                                {action == 'Signup' ? (
                                    <>
                                        <span> <strong>Aready have an account?</strong> </span>
                                        <span><strong className="text-customBlue">Login</strong></span>
                                    </>
                                ):
                                <>
                                    <span> <strong>Didn't have an account?</strong> </span>
                                    <span><strong className="text-customBlue">Signup</strong></span>
                                </>
                                }
                            </div>
                        </footer>
                    </section>
                </div>
            </div>
        </>
    )
}