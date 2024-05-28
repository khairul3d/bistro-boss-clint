
import { useContext, useEffect, useRef, useState } from 'react';
import { Link,useLocation, useNavigate } from 'react-router-dom';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Provider/AuthProvider';
const Login = () => {
    
    const location = useLocation()
    const navigate = useNavigate()
    const {signIn} = useContext(AuthContext)
    const captchaRef = useRef(null)
    const [disable, setDisable] = useState(true)

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])
    
    const handleLogin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const all = { password, email }
        console.log(all);
        signIn(email, password)
        .then(result => {
            console.log(result.user);
           navigate(location?.state ? location?.state : '/')
        })
        .chatch(error => {
            console.log(error);
        })
    }

    const handleCaptcha = () => {
        const user_Captcha_value = captchaRef.current.value;
        if (validateCaptcha(user_Captcha_value)) {
            setDisable(false)
        }
    }
    return (
        <div className=" ">
            <div className="hero-content flex-col  ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                   
                </div>
                <div className="card shrink-0 w-full  bg-base-100 ">
                    <form onSubmit={handleLogin} className="card-body lg:w-1/2 md:w-3/4 mx-auto">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <LoadCanvasTemplate />
                                <span className="label-text"></span>
                            </label>
                            <input type="text" ref={captchaRef} name="captcha" placeholder=" Fil Up the Captcha" className="input input-bordered" required />
                            <div className='text-center'>
                                <button onClick={handleCaptcha} className='btn'>validate</button>
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <input disabled={disable} className="btn btn-primary" type="button" value="Login" />
                        </div>
                    </form>
                    <div className=' text-center '>
                        {
                            <p> please Creat a new account? <Link className=' ml-4 font-bold text-orange-500 underline text-xl' to="/signup">Register</Link></p>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;