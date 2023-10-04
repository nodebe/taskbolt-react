import { Link } from "react-router-dom";

import icon_back from "../../assets/icon_back.svg"

const Auth = ({image, formTemplate}) => {
    return (
        <div className="flex flex-col md:flex-row h-screen relative">
            <div className="w-full md:w-4/12 bg-primary relative -z-10">
                <div className="flex justify-between px-4 py-6">
                    <div className="md:hidden">
                        <img src= { icon_back } alt=""></img>
                    </div>
                    <p className="font-bold text-3xl text-white md:mt-10 ml-10 md:justify-self-start">TASKBOLT</p>
                </div>
                <div className="md:mt-20 md:absolute md:-right-44 md:-mr-44 md:mt-20 mt-10 px-10 md:px-0 -mb-20">
                    <img src={ image } alt=""></img>
                </div>
            </div>
            <div className="w-full md:w-8/12 bg-white">
                <div className='mt-6 mb-12 md:mb-0 md:mt-12 md:ml-12'>
                    <Link to="#" className="text-lg text-primary underline flex justify-end md:justify-start mr-4 md:mr-0 ">Need Any Help?</Link>
                    <div className='md:ml-16 md:mt-48 mt-6 px-4'>
                        { formTemplate }
                    </div>
                </div>
                
            </div>
        </div>
    );
}
 
export default Auth;