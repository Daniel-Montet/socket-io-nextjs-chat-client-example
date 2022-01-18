import { useRouter } from "next/router";
import { useEffect } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import ChatPanel from "../../components/chatPanel";
import Message from "../../components/message";
import { user } from "../_app";

export default function Inbox({
  activeUsers,
  socket,
  selectedUser,
  setSelectedUser,
  isRegistered,
  setActiveUsers,
}: any) {
  const router = useRouter();
  useEffect(() => {
    //if not logged in reroute to login page
    if (!isRegistered) {
      router.push("/");
    }
  });

  let messages = activeUsers.map((user: user) => {
    return (
      <Message
        key={user.userID}
        user={user}
        setSelectedUser={setSelectedUser}
        updateUsers={setActiveUsers}
        allUsers={activeUsers}
      />
    );
  });

  return (
    <main className="px-40 pt-5 grid grid-rows-24 bg-secondary max-h-screen min-h-screen h-screen relative">
      <section className="header grid grid-cols-2 row-start-1 row-end-1">
        <div className="logo flex">
          <img src="/logo.png" alt="" className="h-10" />
          <p className="font-semibold self-center ml-5">ChatAPP</p>
        </div>
        <img
          src="/notification.png"
          alt=""
          className="notify self-center justify-self-end h-5"
        />
      </section>
      <section className="body  row-span-22	">
        <section className="utils grid grid-cols-2 w-full mt-10">
          <div className="search-input bg-white relative rounded-3xl flex w-2/5">
            <span className="w-1/6 flex justify-center pl-3.5">
              <img
                className="h-5 self-center"
                src="/search.png"
                alt="search-icon"
              />
            </span>
            <input
              className="h-8 w-5/6 m-2 p-2 justify-self-end outline-none w-1/3 text-sm"
              type="text"
              name="search"
              id="search"
              placeholder="SEARCH - NOT IMPLIMENTED YET"
            />
          </div>
          <button className="bg-white w-1/4 justify-self-end rounded-3xl text-sm">
            LOG OUT
          </button>
        </section>
        <section className="content relative flex flex-row gap-5 mt-4 h-5/6 min-h-5/6">
          <section className="nav bg-white w-2/5 rounded-3xl">
            <PerfectScrollbar>
              <span className="p-4">{messages}</span>
            </PerfectScrollbar>
          </section>
          <section className="chat bg-white w-4/5 rounded-3xl">
            <ChatPanel
              selectedUser={selectedUser}
              setSelectedUser={setSelectedUser}
              socket={socket}
              activeUsers={activeUsers}
              setActiveUsers={setActiveUsers}
            />
          </section>
        </section>
      </section>
    </main>
  );
}
