import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";


const Register = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const { creatUser } = useContext(AuthContext)
    const onSubmit = (data) => {
        console.log(data);
        creatUser(data.email, data.password)
            .then(result => {
                const userLogged = result.user;
                console.log(userLogged);
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>

                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text"  {...register("name", { required: true })} placeholder="Name" className="input input-bordered" />
                            {errors.name && <span className=" text-red-600">Name field is required</span>}

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                            {errors.email && <span className=" text-red-600">email field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password"  {...register("password", { required: true })} placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <input className="btn btn-primary" type="button" value="Register" />

                    </form>
                    <div className=' text-center '>
                        {
                            <p> Alrady have an account? please <Link className=' ml-4 font-bold text-orange-500 underline text-xl' to="/login">Login</Link></p>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;