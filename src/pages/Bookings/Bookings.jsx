import { useEffect, useState } from "react";
import useSecureAxios from "../../hooks/useSecureAxios";
import { useNavigate } from "react-router-dom";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  const axiosSecure = useSecureAxios();

  const navigate = useNavigate();

  useEffect(() => {
    axiosSecure.get("/bookings").then((data) => {
      setBookings(data.data);
    });
  }, [axiosSecure]);
  return (
    <>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Available</th>
              <th>price</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {bookings?.map((booking, indx) => (
              <tr key={booking._id}>
                <th>{indx + 1}</th>
                <td>{booking.title}</td>
                <td>{booking.tickets}</td>
                <td>$ {booking.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-10">
          <button
            onClick={() => {
              navigate("/payment", {
                state: {
                  totalAmount: bookings.reduce(
                    (acc, booking) => acc + booking.price,
                    0
                  ),
                },
              });
            }}
            className="btn btn-primary"
          >
            Pay ${bookings.reduce((acc, booking) => acc + booking.price, 0)}
          </button>
        </div>
      </div>
    </>
  );
};

export default Bookings;
