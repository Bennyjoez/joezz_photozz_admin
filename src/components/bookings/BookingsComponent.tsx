import BookingCard from "./BookingCard";
import bookings from "../../data/bookingsData";
import { Link } from "react-router-dom";

const BookingsComponent = () => {
  return (
    <div className="w-[95%] md:w-[60vw] mx-auto sm:mx-4 mb-8">
      <div className="w-[100%] flex justify-between text-xl mb-3 text-primary-text">
        <span role="button">Upcoming</span>
        <Link to="/bookings"><span role="button">See All</span></Link>
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
