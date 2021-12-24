import Message from "../../components/message";
import socket from "../../lib/socketClient";

export default function MessageBoard({ activeUsers }: any) {
  let messages = activeUsers.map((user: any) => {
    return <Message key={user.userID} user={user} />;
  });

  return (
    <main className="px-40 pt-5 bg-secondary min-h-screen h-screen relative">
      <section className="header grid grid-cols-2">
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
      <section className="body h-5/6">
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
              placeholder="SEARCH"
            />
          </div>
          <button className="bg-white w-1/4 justify-self-end rounded-3xl text-sm">
            CLEAR CHAT
          </button>
        </section>
        <section className="content relative flex flex-row gap-5 mt-4 h-5/6 min-h-5/6">
          <section className="nav bg-white w-2/5 rounded-3xl overflow-y-scroll">
            <span className="p-4">{messages}</span>
          </section>
          <section className="chat bg-white w-4/5 rounded-3xl">
            <div className="pt-6 pl-5 flex flex-col relative">
              <div className="message-in flex gap-4 mb-4">
                <img
                  src="https://picsum.photos/200/300"
                  alt=""
                  className="h-12 w-12 rounded-full"
                />
                <p className="p-4 max-w-prose w-2/4 bg-secondary rounded-3xl rounded-tl-none">
                  Hello this is a sample message. I should be a long message but
                  I should keep it very very short.
                </p>
              </div>
              <div className="message-out ml-auto w-2/4 p-2">
                <p className="p-4 max-w-prose  bg-secondary rounded-3xl rounded-tl-none">
                  Hello this is a sample message. I should be a long message but
                  I should keep it very very short.
                </p>
              </div>
              <form
                className="textArea"
                onSubmit={(event) => {
                  event.preventDefault();
                }}
              >
                <input
                  type="text"
                  onChange={(e) => socket.emit("chat message", e.target.value)}
                />
                <button type="submit">submit</button>
              </form>
            </div>
          </section>
        </section>
      </section>
    </main>
  );
}
