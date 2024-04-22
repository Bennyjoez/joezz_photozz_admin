import BookingCard from "./BookingCard";
import bookings from "../../data/bookingsData";

const BookingsComponent = () => {
  return (
    <div className="w-[90%] sm:w-[60%] mx-auto sm:mx-4">
      <div className="w-[100%] flex justify-between">
        <span role="button">Upcoming</span>
        <span role="button">See All</span>
      </div>
      <div className="flex md:flex-row  gap-2 overflow-x-scroll scrollbar-thin">
        {bookings.map((booking) => (
          <BookingCard key={booking.reservationDate} booking={booking} />
        ))}
      </div>
    </div>
  );
};

export default BookingsComponent;
