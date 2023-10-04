import reset_password_desktop from '../../assets/otp_image.svg'
import Auth from './Auth.auth.component';
import FormTemplate from '../../pages/Auth/reset-password.auth.page';

const ResetPassword = () => {
    
    return (
        <Auth image={ reset_password_desktop } formTemplate={ <FormTemplate /> } />                 
    );
}
 
export default ResetPassword;