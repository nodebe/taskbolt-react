const FormTemplate = () => {
    return (
        <>
            <p className='font-medium md:text-3xl text-xl text-secondary leading-10'>Reset Password</p>
            <p className='font-normal text-base text-secondary-light-grey leading-6 hidden md:block md:mt-2'>Set a secure password.</p>
            <div className='mt-4 md:mt-6 md:w-4/5 w-full'>
                <form>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6'>
                        <div className='relative col-span-full'>
                            <input type="password" id="password" className="block p-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none dark:text-dark dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "/>
                            <label for="password" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:ml-4 peer-focus:text-primary-600 peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Create New Password</label>
                        </div>
                        <div className='relative col-span-full'>
                            <input type="password" id="confirmPassword" className="block p-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none dark:text-dark dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "/>
                            <label for="confirmPassword" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:ml-4 peer-focus:text-primary-600 peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Re-enter Password</label>
                        </div>
                        <button className='col-span-full bg-secondary-light-grey rounded-lg text-white text-xl font-normal p-4'>Enter To Confirm</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default FormTemplate;