import React from 'react';

function Form() {
  return (
    <div className='flex flex-col'>
      <div className="flex flex-col w-full mb-5">
        <label className="text-gray-400">Pickup Location</label>
        <select className="select select-bordered w-full max-w-lg">
          <option disabled selected>
            Pickup Location
          </option>
          <option>Han Solo</option>
          <option>Greedo</option>
        </select>
      </div>

      <div className="flex flex-row gap-5 mb-5">
        <div className="flex flex-col w-full">
          <label className="text-gray-400">Pick Up Date</label>
          <input
            type="date"
            placeholder="Type here"
            className="input input-bordered w-full max-w-lg"
          />
        </div>
        <div className="flex flex-col w-full">
          <label className=" text-gray-400">Drop Off Date</label>
          <input
            type="date"
            placeholder="Type here"
            className="input input-bordered w-full max-w-lg"
          />
        </div>
      </div>

      <div className="flex flex-row gap-5 mb-5">
        <div className="flex flex-col w-full">
          <label className="text-gray-400">Pick Up Time</label>
          <input
            type="time"
            placeholder="Type here"
            className="input input-bordered w-full max-w-lg"
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="text-gray-400">Drop Off Time</label>
          <input
            type="time"
            placeholder="Type here"
            className="input input-bordered w-full max-w-lg"
          />
        </div>
      </div>

      
        <div className="w-full">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Contact Number</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </label>
        </div>
    </div>
  );
}

export default Form;
