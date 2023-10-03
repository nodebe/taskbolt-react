import { Link } from 'react-router-dom';

const register = '/register'
const forgotPassword = '/forgot-password'

const FormTemplate = () => {
    return (
        <>
            <p className='font-medium text-3xl text-secondary-grey leading-10'>LogIn</p>
            <p className='font-normal text-base text-secondary-light-grey leading-6 mt-2'>Hello there! welcome back to TaskBolt</p>
            <div className='mt-8 w-3/5'>
                <form>
                    <div className='grid grid-cols-2 gap-x-6 gap-y-6'>
                        <div className='relative col-span-full'>
                            <input type="email" id="email" className="block p-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none dark:text-dark dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                            <label for="email" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:ml-4 peer-focus:text-primary-600 peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Email Address</label>
                        </div>
                        <div className='relative col-span-full'>
                            <input type="password" id="password" className="block p-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none dark:text-dark dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                            <label for="password" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:ml-4 peer-focus:text-primary-600 peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Password</label>
                        </div>
                        <Link to={ forgotPassword } className='-mt-2 text-lg font-medium text-primary underline'>Forgot Password</Link>
                        <button className='col-span-full bg-secondary-light-grey rounded-lg text-white text-xl font-normal p-4'>Log In</button>
                    </div>
                </form>
                <p className='font-normal text-lg text-center text-secondary-light-grey mt-4'>Don't have an account yet?  <span><Link to={ register } className='text-primary underline'>Register</Link></span></p>
            </div>
        </>
    )
}

export default FormTemplate;