import { useLoaderData } from "react-router-dom";
import useSecureAxios from "../../hooks/useSecureAxios";
import { toast } from "react-toastify";

const EventDetails = () => {
  const event = useLoaderData();
  const axiosSecure = useSecureAxios();

  const handleBookingNow = (id) => {
    axiosSecure.put(`/booking/${id}`).then((data) => {
      if (data.data.success) {
        toast.success("Successfully booked your ticket");
      } else {
        toast.error(data.data.msg);
      }
    });
  };
  return (
    <div className="flex justify-center items-center min-h-screen w-full">
      <div className="card w-full max-w-lg bg-white border border-gray-300 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">{event.title}</h2>
          <p className="text-center text-gray-600">
            {new Date(event.date).toDateString()} at {event.time}
          </p>
          <div className="mt-4 space-y-3">
            <div className="space-y-1">
              <p className="font-semibold">Description</p>
              <p>{event.description}</p>
            </div>
            <div className="space-y-1">
              <p className="font-semibold">Location</p>
              <p>{event.location}</p>
            </div>
            <p className="label-text flex items-center gap-2 font-semibold">
              Available tickets:
              <span className="font-normal">{event.tickets}</span>
            </p>
            <p className="label-text flex items-center gap-2 font-semibold">
              Price :<span className="font-normal">${event.price}</span>
            </p>

            <div className="flex items-center justify-center gap-4">
              <button
                className="btn btn-primary"
                onClick={() => handleBookingNow(event._id)}
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
