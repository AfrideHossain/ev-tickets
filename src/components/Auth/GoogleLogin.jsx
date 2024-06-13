import { useLocation, useNavigate } from "react-router-dom";
import useAuthContext from "../../hooks/useAuthContext";

const GoogleLogin = () => {
  const { loginWithGoogle } = useAuthContext();

  // navigate, location hooks
  const navigate = useNavigate();
  const location = useLocation();

  // from location
  const from = location.state?.from?.pathname || "/";

  const handleGoogleLogin = () => {
    loginWithGoogle().then((result) => {
      const currentUser = result.user;
      fetch(`${import.meta.env.VITE_BASE_URL}/createuser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: currentUser.displayName,
          email: currentUser.email,
        }),
      })
        .then((res) => res.json())
        .then(() => {
          navigate(from, { replace: true });
        });
    });
  };
  return (
    <>
      <button
        className="w-full btn text-base hover:bg-gray-300 gap-3"
        onClick={() => handleGoogleLogin()}
      >
        <img src="/images/icons/google.png" alt="Google" className="w-6 h-6" />
        Sign in with google
      </button>
    </>
  );
};

export default GoogleLogin;
