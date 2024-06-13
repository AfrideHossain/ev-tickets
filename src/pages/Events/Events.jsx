import EventSmallCard from "../../shared/EventSmallCard/EventSmallCard";

const Events = () => {
  return (
    <>
      <div className="max-w-full grid gap-4 grid-cols-1 md:grid-cols-3">
        <EventSmallCard />
        <EventSmallCard />
        <EventSmallCard />
        <EventSmallCard />
      </div>
    </>
  );
};

export default Events;
