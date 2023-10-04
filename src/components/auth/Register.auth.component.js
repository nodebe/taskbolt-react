import register_desktop from '../../assets/otp_image.svg'
import Auth from './Auth.auth.component';
import FormTemplate from '../../pages/Auth/register.auth.page';

const Register = () => {
    
    return (
        <Auth image={ register_desktop } formTemplate={ <FormTemplate /> } />                 
    );
}
 
export default Register;