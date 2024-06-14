import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const EventSmallCard = ({ event }) => {
  return (
    <div className="card card-compact bg-base-200 rounded-md w-full md:w-72">
      <figure className="w-full md:w-72">
        <img
          src={event?.photo || "https://placehold.co/600x400"}
          className="w-full object-cover"
          alt=""
        />
      </figure>
      <div className="card-body">
        <h1 className="card-title">{event.title || "None"}</h1>
        <div className="">
          <p>Available Tickets: {event.tickets || "0"}</p>
          <p>Ticket Price: $ {event.price || "0"}</p>
        </div>
        <div className="card-actions justify-end mt-auto">
          <Link to={`/event/${event._id}`} className="btn btn-primary">
            View Event
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventSmallCard;
