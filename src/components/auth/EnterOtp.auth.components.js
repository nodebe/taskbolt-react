import enter_otp_desktop from '../../assets/enter-otp_desktop.svg'
import Auth from './Auth.auth.component';
import FormTemplate from '../../pages/Auth/enter-otp.auth.page';

const EnterOtp = () => {
    return (
        <Auth image={ enter_otp_desktop } formTemplate={ <FormTemplate /> } />                 
    );
}
 
export default EnterOtp;