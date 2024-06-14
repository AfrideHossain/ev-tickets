import { useEffect, useState } from "react";
import EventSmallCard from "../../shared/EventSmallCard/EventSmallCard";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}/getEvents`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      setEvents(data);
      setLoading(false);
    };
    fetchEvents();
  }, []);
  return (
    <>
      <div className="max-w-full grid gap-4 grid-cols-1 md:grid-cols-3">
        {events &&
          events?.map((event) => {
            return <EventSmallCard key={event.id} event={event} />;
          })}
      </div>
    </>
  );
};

export default Events;
