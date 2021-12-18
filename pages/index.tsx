export default function Home() {
  return (
    <main className="px-10 pt-5 bg-secondary h-screen">
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
      <section className="main">
        <section className="utils"></section>
        <section className="content">
          <section className="nav"></section>
          <section className="chat"></section>
        </section>
      </section>
    </main>
  );
}
