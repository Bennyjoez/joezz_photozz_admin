import messages from "../../data/messagesData";
import MessageTile from "./MessageTile";

const RecentMessages = () => {
  return (
    <div className="md:w-[30vw] max-w-fit text-primary-text">
      <h1 className="text-xl mb-3">Recent Messages</h1>
      <div className="border rounded-3xl p-4 bg-white flex flex-col gap-">
        {
          messages.map(message => <MessageTile messageObj={message} />)
        }
      </div>
    </div>
  )
}

export default RecentMessages