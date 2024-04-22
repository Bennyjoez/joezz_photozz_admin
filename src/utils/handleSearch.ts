import bookings from "../data/bookingsData";

const handleSearch = (query: string) => {
  const filtered = bookings.filter((booking) => {
    const lowerQuery = query.toLowerCase();
    return (
      booking.client.toLowerCase().includes(lowerQuery) ||
      booking.event.toLowerCase().includes(lowerQuery) ||
      booking.shootLocation.toLowerCase().includes(lowerQuery) ||
      booking.message.toLowerCase().includes(lowerQuery)
    );
  });
  return filtered;
  // TODO: Handle the returned filtered data
};

export default handleSearch;
