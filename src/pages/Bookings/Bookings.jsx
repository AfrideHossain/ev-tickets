import { useEffect, useState } from "react";
import useSecureAxios from "../../hooks/useSecureAxios";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  const axiosSecure = useSecureAxios();

  useEffect(() => {
    axiosSecure.get("/bookings");
  }, [axiosSecure]);
  return <div>Bookings</div>;
};

export default Bookings;
