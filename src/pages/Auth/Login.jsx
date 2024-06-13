import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuthContext from "../../hooks/useAuthContext";
import GoogleLogin from "../../components/Auth/GoogleLogin";

const Login = () => {
  const { userLoginWithPass } = useAuthContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // location, navigate hooks
  const navigate = useNavigate();
  const location = useLocation();

  // from location
  const from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    const { email, password } = data;
    userLoginWithPass(email, password).then(() => {
      navigate(from, { replace: true });
    });
  };
  return (
    <>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Login Now!</h1>
            <p className="py-2">
              Please enter your credentials to access your account.
            </p>
          </div>
          <div className="card shrink-0 w-full md:w-[384px] shadow-2xl bg-base-300">
            <div className="flex flex-col w-full card-body border-opacity-50">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                    {...register("email", { required: true })}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                    {...register("password", { required: true })}
                  />
                  <label className="label label-text-alt justify-start gap-1">
                    Don{"'"}t have an account?
                    <Link
                      to={"/auth/register"}
                      className="link link-hover text-blue-500"
                    >
                      Create now!
                    </Link>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-primary">
                    Login
                  </button>
                </div>
              </form>
              <div className="divider">OR</div>
              <div className="grid card place-items-center">
                <GoogleLogin />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
