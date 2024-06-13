const EventSmallCard = () => {
  return (
    <div className="card card-compact bg-base-200 rounded-md w-full md:w-72">
      <figure className="w-full md:w-72">
        <img
          src="/images/egimg/Internet-evolution-1200x876.png"
          className="w-full object-cover"
          alt=""
        />
      </figure>
      <div className="card-body">
        <h1 className="card-title">Event name</h1>
        <div className="">
          <p>Available Tickets: 20</p>
          <p>Ticket Price: $10</p>
        </div>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">View Event</button>
        </div>
      </div>
    </div>
  );
};

export default EventSmallCard;
