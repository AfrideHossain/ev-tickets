import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Create new account</h1>
            <p className="py-2">Create a new account.</p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-300">
            <div className="flex flex-col w-full card-body border-opacity-50">
              <form>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
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
                  />
                  <label className="label label-text-alt justify-start gap-1">
                    Don{"'"}t have an account?
                    <Link to={"/"} className="link link-hover">
                      Create now!
                    </Link>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
              </form>
              <div className="divider">OR</div>
              <div className="grid card place-items-center">
                <Link className="w-full btn text-base-100 bg-white hover:bg-gray-400 gap-3">
                  <img
                    src="/images/icons/google.png"
                    alt="Google"
                    className="w-6 h-6"
                  />
                  Sign in with google
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
