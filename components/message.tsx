import { user } from "../pages/_app";

export default function Message({
  user,
  setSelectedUser,
  allUsers,
  updateUsers,
  selectedUser,
}: any) {
  const handleClick = (e: any) => {
    // update hasnewMessages for selected user
    user.hasNewMessages = false;
    setSelectedUser(user);
    let users = allUsers.map((u: user) => {
      if (u.userID === user.userID) {
        return user;
      }
      return u;
    });
    updateUsers(users);
  };

  return (
    <div
      className={`grid grid-cols-12 cursor-pointer h-24 box-border p-4 
      ${
        user.userID === selectedUser.userID
          ? "bg-blue-600 rounded-lg text-white font-semibold"
          : "bg-white"
      }`}
      onClick={(e: any) => {
        handleClick(e);
      }}
    >
      <div className="col-span-2">
        <img src={user.image} alt="" className="h-12 w-12 rounded-full" />
      </div>
      <div className="col-span-10	grid grid-rows-2 border-b gap-y-1">
        <div className="flex items-center justify-between ">
          <h1>
            {user.username}
            {`${user.self ? " - (You)" : ""}`}
          </h1>
          <span className={`stamp text-sm`}>8:00</span>
        </div>
        <div className="grid grid-cols-12 ">
          {user.hasNewMessages ? (
            <span
              className={`col-span-6 text-sm font-semibold text-green-500 animate-pulse`}
            >
              new message(s)
            </span>
          ) : (
            ""
          )}
          <span className="col-start-12 relative grid">
            <span
              className={`status rounded-full absolute h-1/4 w-1/4 justify-self-center self-center ${
                user.connected ? "bg-green-500" : "bg-gray-500"
              }`}
            ></span>
          </span>
        </div>
      </div>
    </div>
  );
}
