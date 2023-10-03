import { Link } from "react-router-dom";

const Auth = ({image, formTemplate}) => {
    return (
        <div className="flex h-screen">
            <div className="w-4/12 bg-primary">
                <p className="font-bold text-3xl text-white mt-10 ml-10">TASKBOLT</p>
                <div className="flex mt-20 justify-end">
                    <img src={ image } alt=""></img>
                </div>
                
            </div>
            <div className="w-8/12">
                <div className='mt-12 ml-12'>
                    <Link to="#" className="text-lg text-primary underline">Need Any Help?</Link>
                    <div className='ml-36 mt-48'>
                        { formTemplate }
                    </div>
                </div>
                
            </div>
        </div>
    );
}
 
export default Auth;