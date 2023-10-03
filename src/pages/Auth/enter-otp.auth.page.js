const FormTemplate = () => {
    return (
        <>
            <p className='font-medium text-3xl text-secondary-grey leading-10'>Enter OTP</p>
            <p className='font-normal text-base text-secondary-light-grey leading-6 mt-2'>Enter one time code that was sent to your email address for account confirmation</p>
            <div className='mt-8 w-3/5'>
                <form className="flex flex-col space-y-6">
                    <div className='flex flex-row space-x-6'>
                        <input
                            type="text"
                            class="form-input h border-2 focus:bg-primary-transparent text-primary border-solid border-paleGrey text-darkGrey rounded-md text-4xl text-center py-6 px-2.5 md:w-1/4" maxlength="1"
                        />
                        <input
                            type="text"
                            class="form-input h border-2 focus:bg-primary-transparent text-primary border-solid border-paleGrey text-darkGrey rounded-md text-4xl text-center py-4 px-2.5 w-full md:w-1/4" maxlength="1"
                        />
                        <input
                            type="text"
                            class="form-input h border-2 focus:bg-primary-transparent text-primary border-solid border-paleGrey text-darkGrey rounded-md text-4xl text-center py-4 px-2.5 w-full md:w-1/4" maxlength="1"
                        />
                        <input
                            type="text"
                            class="form-input h border-2 focus:bg-primary-transparent text-primary border-solid border-paleGrey text-darkGrey rounded-md text-4xl text-center py-4 px-2.5 w-full md:w-1/4" maxlength="1"
                        />
                        <input
                            type="text"
                            class="form-input h border-2 focus:bg-primary-transparent text-primary border-solid border-paleGrey text-darkGrey rounded-md text-4xl text-center py-4 px-2.5 w-full md:w-1/4" maxlength="1"
                        />
                    </div>
                        <p className='font-normal text-lg text-center text-secondary-light-grey mt-4 w-full'>Resend code in <span className="text-primary">00 : 59</span></p>
                        <button className='col-span-full bg-secondary-light-grey rounded-lg text-white text-xl font-normal p-4'>Verify Account</button>
                </form>
            </div>
        </>
    )
}

export default FormTemplate;