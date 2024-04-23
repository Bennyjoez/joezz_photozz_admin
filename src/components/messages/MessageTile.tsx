import profile from "/BEN.jpg"; //TODO: replace with dynamic image

interface messageProps {
  messageObj: {
    name: string,
    email: string,
    message: string
    date: string,
  },
}

const MessageTile = ({ messageObj }: messageProps) => {
  const {name, message, date} = messageObj;
  const handleClick = () => {
    console.log("Handling the click!"); //TODO: handle the respond button click
  }
  return (
    <div className="flex items-center gap-1 lg:gap-3">
      <div className="min-w-[8%] max-w-10 max-h-10 bg-gray-200 rounded-full mr-2 flex items-center justify-center">
        <img src={profile} alt="profile" className="rounded-full w-full h-full object-cover" />
      </div>
      <div className="w-[60%]">
        <h2 className="font-bold">{name}</h2>
        <p className="truncate">{message}</p>
        <span className="italic text-sm text-gray-500">{date}</span>
      </div>
      <button onClick={handleClick} className="p-2 bg-accent rounded-lg h-fit text-primary-bg hover:text-orange-400 hover:shadow-lg">Chat</button>
    </div>
  )
}

export default MessageTile