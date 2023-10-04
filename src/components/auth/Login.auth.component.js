import login_desktop from '../../assets/otp_image.svg'
import Auth from './Auth.auth.component';
import FormTemplate from '../../pages/Auth/login.auth.page';

const Login = () => {
    return (
        <Auth image={ login_desktop } formTemplate={ <FormTemplate /> } />                 
    );
}
 
export default Login;