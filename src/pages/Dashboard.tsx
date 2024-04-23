import BookingsComponent from "../components/bookings/BookingsComponent";
import RecentMessages from "../components/messages/RecentMessages";

const Dashboard = () => {
  return (
    <>
      <section className="md:flex md:max-h-[300px]">
        <BookingsComponent />
        <RecentMessages />
      </section>
    </>
  );
};

export default Dashboard;
