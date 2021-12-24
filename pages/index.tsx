import { useEffect, useState } from "react";

export default function Home({ register, socket }: any) {
  const [username, setUsername] = useState("");

  return (
    <main className="flex justify-center content-center h-screen">
      <form
        className="m-auto"
        onSubmit={(event) => {
          event.preventDefault();
          register(true);
          socket.auth = { username };
          socket.connect();
        }}
      >
        <input
          type="text"
          placeholder="Username"
          onChange={(event) => setUsername(event.target.value)}
        />
        <input type="submit" value="submit" />
      </form>
    </main>
  );
}
