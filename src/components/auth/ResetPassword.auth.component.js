import reset_password_desktop from '../../assets/reset-password_desktop.svg'
import Auth from './Auth.auth.component';
import FormTemplate from '../../pages/Auth/reset-password.auth.page';

const ResetPassword = () => {
    
    return (
        <Auth image={ reset_password_desktop } formTemplate={ <FormTemplate /> } />                 
    );
}
 
export default ResetPassword;