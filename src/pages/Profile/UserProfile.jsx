import { HiOutlinePencilSquare } from "react-icons/hi2";
import { Link, useLoaderData } from "react-router-dom";

const UserProfile = () => {
  const userInfo = useLoaderData();
  console.log(userInfo);
  return (
    <div className="flex justify-center items-center min-h-screen w-full">
      <div className="card w-96 bg-white border border-gray-300 shadow-xl">
        <div className="card-body">
          <div className="flex justify-center">
            <div className="avatar">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img
                  src={userInfo?.photo || "https://placehold.co/200"}
                  alt="Profile"
                />
              </div>
              {/* update user's profile picture button */}
              <button
                className="absolute -bottom-2 -right-2 z-10 bg-white p-2 rounded-full"
                onClick={() =>
                  document.getElementById("updateProfileModal").showModal()
                }
              >
                <HiOutlinePencilSquare className="w-5 h-5" />
              </button>
            </div>
          </div>
          <h2 className="text-center text-2xl font-bold mt-4">
            {userInfo?.name || userInfo?.username || "john doe"}
          </h2>
          <p className="text-center text-gray-600">
            {userInfo.email || "john doe"}
          </p>
          <div className="mt-4 space-y-2">
            <div className="flex justify-between">
              <span className="font-medium">Username:</span>
              <span>{userInfo.username || "john doe"}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Phone:</span>
              <span>{userInfo.phone || "--"}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Location:</span>
              <span>{userInfo.location || "--, --"}</span>
            </div>
          </div>
          <div className="card-actions justify-center mt-6">
            <Link to="/editprofile" className="btn btn-primary">
              Edit Profile
            </Link>
          </div>
        </div>
      </div>

      {/* Modal: profile picture update */}
      <dialog id="updateProfileModal" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Change profile picture</h3>
          <form>
            <div className="form-control my-4">
              <input
                type="file"
                className="file-input file-input-bordered w-full"
              />
            </div>
            <button type="submit" className="btn btn-primary float-right">
              Upload
            </button>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default UserProfile;
