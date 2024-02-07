import React, { useState } from 'react';
import CarCard from './CarCard';
import Form from '../CarBooking/Form';

function CarsList(props: any) {
  const [selectedCar, setSelectedCar] = useState<any>(null);

  const showModal = (car: any) => {
    setSelectedCar(car);
    const modal = document.getElementById('my_modal_4') as HTMLDialogElement | null;
    if (modal) {
      modal.showModal();
    }
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {props.carsList?.map((car: any, index: number) => (
        <div key={index} onClick={() => showModal(car)}>
          <CarCard car={car} />
        </div>
      ))}

      {/* Single modal outside the map */}
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <form method="dialog">
            <div className="border-b-[1px] pb-2">
              <h3 className="text-[30px] font-light text-gray-400">
                Rent A Car Now!
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div>{selectedCar && <CarCard car={selectedCar} />}</div>
              <div>
                <Form />
              </div>
            </div>
            <div className="modal-action">
              <button className="btn" onClick={() => setSelectedCar(null)}>
                Close
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default CarsList;
