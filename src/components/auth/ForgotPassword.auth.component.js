import forgot_password_desktop from '../../assets/forgot-password_desktop.svg'
import Auth from './Auth.auth.component';
import FormTemplate from '../../pages/Auth/forgot-password.auth.page';

const ForgotPassword = () => {
    
    return (
        <Auth image={ forgot_password_desktop } formTemplate={ <FormTemplate /> } />                 
    );
}
 
export default ForgotPassword;