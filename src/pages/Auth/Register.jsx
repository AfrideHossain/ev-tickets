import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useAuthContext from "../../hooks/useAuthContext";
import GoogleLogin from "../../components/Auth/GoogleLogin";

const Register = () => {
  const { userRegisterWithPass } = useAuthContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { username, email, password } = data;
    userRegisterWithPass(email, password).then((result) => {
      // console.log(result);
      fetch(`${import.meta.env.VITE_BASE_URL}/createuser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email }),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    });
  };
  return (
    <>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Join us, Now!</h1>
            <p className="py-2">Create a new account to join us.</p>
          </div>
          <div className="card shrink-0 w-full md:w-[448px] shadow-2xl bg-base-300">
            <div className="flex flex-col w-full card-body border-opacity-50">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Username</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Username (eg: JohnDoe)"
                    className="input input-bordered"
                    required
                    {...register("username", { required: true })}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Email (eg: johndoe@email.com)"
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
                    placeholder="Password (at least 8 characters)"
                    className="input input-bordered"
                    required
                    {...register("password", { required: true, minLength: 8 })}
                  />
                  {errors.password && (
                    <label className="label">
                      <span className="label-text text-red-600">
                        Password must be at least 8 characters long
                      </span>
                    </label>
                  )}
                  <label className="label label-text-alt justify-start gap-1">
                    Already have an account?
                    <Link
                      to={"/auth"}
                      className="link link-hover text-blue-500"
                    >
                      Login now!
                    </Link>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-primary">
                    Join
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

export default Register;
