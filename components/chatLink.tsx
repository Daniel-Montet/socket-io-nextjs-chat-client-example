export default function ChatLink() {
  return (
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
  );
}
