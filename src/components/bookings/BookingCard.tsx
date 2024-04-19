import profile from "/BEN.jpg";

interface BookingCardProps {
  booking: {
    client: string;
    event: string;
    reservationDate: string;
    shootLocation: string;
    message: string;
  };
}

const BookingCard: React.FC<BookingCardProps> = ({ booking }) => {
  const { client, event, reservationDate, shootLocation, message } = booking;

  return (
    <div className="flex flex-col w-full min-w-[300px] bg-white even:text-primary-text text-white odd:bg-card shadow-md sm:overflow-hidden rounded-3xl border">
      <div className="flex flex-1 flex-col px-6 pt-6">
        {" "}
        <div className="text-lg font-bold">
          {reservationDate}
        </div>
        <div className="text-sm text-red-400">
          {event} - <span>{shootLocation}</span>
        </div>
        <p className="text-base mb-2 even:text-black px-3">
          "{message}"
        </p>
        <div className="flex items-center mt-auto">
          <div className="w-8 h-8 bg-gray-200 rounded-full mr-2 flex items-center justify-center">
            <img
              src={profile}
              alt="Profile Photo"
              className="rounded-full w-full h-full object-cover"
            />
          </div>
          <div className="text-sm font-medium odd:text-[#AACCFF]">
            {client}
          </div>
        </div>
      </div>
      <div className="flex items-center mt-4 text-sm bg-card-lower p-6 rounded-b-3xl border border-t-gray-300">
        <svg
          className="w-4 h-4 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 8l12 12 9-9"
          ></path>
        </svg>
        <span>+1 (234) 567-8910</span>
      </div>
    </div>
  );
};

export default BookingCard;
