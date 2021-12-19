export default function Home() {
  return (
    <main className="px-10 pt-5 bg-secondary min-h-screen h-screen relative">
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
        <section className="content relative flex flex-row gap-4 mt-4 h-5/6 min-h-5/6">
          <section className="nav bg-white w-1/4 rounded-2xl pt-3 overflow-y-scroll">
            <div className="user p-4 w-full flex flex-row">
              <div className="w-1/5">
                <img
                  src="https://picsum.photos/200/300"
                  alt=""
                  className="h-12 w-12 rounded-full"
                />
              </div>
              <div className="meta flex flex-row ml-2 pb-3 justify-between w-4/5	border-b">
                <div className="info">
                  <h1 className="name text-base">John Doe</h1>
                  <span className="excerpt text-sm text-slate-500">
                    Hello hi how are yuh
                  </span>
                </div>
                <span className="stamp text-sm">8:00</span>
              </div>
            </div>
            <div className="user p-4 w-full flex flex-row">
              <div className="w-1/5">
                <img
                  src="https://picsum.photos/200/300"
                  alt=""
                  className="h-12 w-12 rounded-full"
                />
              </div>
              <div className="meta flex flex-row ml-2 pb-3 justify-between w-4/5	border-b">
                <div className="info">
                  <h1 className="name text-base">John Doe</h1>
                  <span className="excerpt text-sm text-slate-500">
                    Hello hi how are yuh
                  </span>
                </div>
                <span className="stamp text-sm">8:00</span>
              </div>
            </div>
            <div className="user p-4 w-full flex flex-row">
              <div className="w-1/5">
                <img
                  src="https://picsum.photos/200/300"
                  alt=""
                  className="h-12 w-12 rounded-full"
                />
              </div>
              <div className="meta flex flex-row ml-2 pb-3 justify-between w-4/5	border-b">
                <div className="info">
                  <h1 className="name text-base">John Doe</h1>
                  <span className="excerpt text-sm text-slate-500">
                    Hello hi how are yuh
                  </span>
                </div>
                <span className="stamp text-sm">8:00</span>
              </div>
            </div>
            <div className="user p-4 w-full flex flex-row">
              <div className="w-1/5">
                <img
                  src="https://picsum.photos/200/300"
                  alt=""
                  className="h-12 w-12 rounded-full"
                />
              </div>
              <div className="meta flex flex-row ml-2 pb-3 justify-between w-4/5	border-b">
                <div className="info">
                  <h1 className="name text-base">John Doe</h1>
                  <span className="excerpt text-sm text-slate-500">
                    Hello hi how are yuh
                  </span>
                </div>
                <span className="stamp text-sm">8:00</span>
              </div>
            </div>
            <div className="user p-4 w-full flex flex-row">
              <div className="w-1/5">
                <img
                  src="https://picsum.photos/200/300"
                  alt=""
                  className="h-12 w-12 rounded-full"
                />
              </div>
              <div className="meta flex flex-row ml-2 pb-3 justify-between w-4/5	border-b">
                <div className="info">
                  <h1 className="name text-base">John Doe</h1>
                  <span className="excerpt text-sm text-slate-500">
                    Hello hi how are yuh
                  </span>
                </div>
                <span className="stamp text-sm">8:00</span>
              </div>
            </div>
          </section>
          <section className="chat bg-white w-3/4 rounded-xl"></section>
        </section>
      </section>
    </main>
  );
}
