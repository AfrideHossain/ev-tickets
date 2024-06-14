import { useState } from "react";
import { useForm } from "react-hook-form";
import useSecureAxios from "../../hooks/useSecureAxios";
import { toast } from "react-toastify";

const AddEvent = () => {
  // useform
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // axiosSecure
  const axiosSecure = useSecureAxios();

  const onSubmitHandler = (eventDetails) => {
    console.log(eventDetails);
    axiosSecure.post(`/createEvent`, eventDetails).then((data) => {
      console.log(data);
      if (data.data.insertedId) {
        toast.success("Yay🥰! Event added");
        reset();
      } else {
        toast.error("😥 An error occured.");
      }
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="card w-96 bg-white shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">Add Event</h2>
          <form
            onSubmit={handleSubmit(onSubmitHandler)}
            className="mt-4 space-y-4"
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text">Event Title</span>
              </label>
              <input
                type="text"
                name="title"
                className="input input-bordered"
                required
                {...register("title", { required: true })}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea
                name="description"
                className="textarea textarea-bordered"
                required
                {...register("description", { required: true })}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input
                type="date"
                name="date"
                className="input input-bordered"
                required
                {...register("date", { required: true, valueAsDate: true })}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Time</span>
              </label>
              <input
                type="time"
                name="time"
                className="input input-bordered"
                required
                {...register("time", { required: true })}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Location</span>
              </label>
              <input
                type="text"
                name="location"
                className="input input-bordered"
                required
                {...register("location", { required: true })}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Available tickets</span>
              </label>
              <input
                type="number"
                name="tickets"
                className="input input-bordered"
                required
                {...register("tickets", {
                  required: true,
                  valueAsNumber: true,
                })}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Ticket price</span>
              </label>
              <input
                type="text"
                name="price"
                className="input input-bordered"
                required
                {...register("price", { required: true, valueAsNumber: true })}
              />
            </div>
            <div className="card-actions justify-center mt-6">
              <button type="submit" className="btn btn-primary">
                Add Event
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddEvent;
