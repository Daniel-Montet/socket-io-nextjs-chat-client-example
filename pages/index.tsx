import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, useState } from "react";

export default function Home({ register, socket, isRegistered }: any) {
  const [username, setUsername] = useState("");
  const router = useRouter();
  if (isRegistered) {
    router.push("/inbox");
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    register(true);
    socket.auth = { username };
    socket.connect();
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  return (
    <div className="min-h-full flex items-center justify-center content-center h-screen  px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img className="mx-auto h-12 w-auto" src="/logo.png" alt="logo" />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in using a username of your choice
          </h2>
        </div>
        <form
          className="mt-8 space-y-6"
          onSubmit={(event) => handleSubmit(event)}
        >
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="username"
                autoComplete="username"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="E.g Jack"
                onChange={(event) => handleChange(event)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
