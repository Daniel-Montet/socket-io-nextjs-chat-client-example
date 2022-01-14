import { useState } from "react";
import { updateLanguageServiceSourceFile } from "typescript";
import { user } from "../pages/_app";

export default function Message({
  user,
  setSelectedUser,
  allUsers,
  updateUsers,
}: any) {
  // const primary = {
  //   bgColor: "bg-white",
  //   titleColor: "",
  //   excerptColor: "text-slate-500",
  // };

  // const secondary = {
  //   bgColor: "bg-amber-400",
  //   titleColor: "bg-sky-900",
  //   excerptColor: "text-white",
  // };

  // let theme;
  // if (user.hasNewMessages) {
  //   theme = secondary;
  // } else {
  //   theme = primary;
  // }
  // console.log("users", allUsers);

  const handleClick = (e: any) => {
    // update hasnewMessages for selected user
    // user.hasNewMessages = false;
    setSelectedUser(user);
    // let users = allUsers.map((u: user) => {
    //   if (u.userID === user.userID) {
    //     return user;
    //   }
    //   return u;
    // });
    // updateUsers(users);
    // console.log("users after click", users);
  };

  return (
    <div
      className={`message p-4 w-full flex flex-row bg-white`}
      onClick={(e: any) => {
        handleClick(e);
      }}
    >
      <div className="w-1/5">
        <img src={user.image} alt="" className="h-12 w-12 rounded-full" />
      </div>
      <div className="meta flex flex-row ml-2 pb-3 justify-between w-4/5	border-b">
        <div className="info">
          <h1 className={`name`}>{user.username}</h1>
          <span className={`excerpt text-sm text-slate-500`}>
            Hello hi how are yuh
          </span>
        </div>
        <div className="flex flex-col">
          <span className={`stamp text-sm`}>8:00</span>
          <span className="h-2/4	relative flex justify-center	items-center">
            <span
              className={`status rounded-full h-1/4 w-1/4 ${
                user.connected ? "bg-green-500" : "bg-gray-500"
              }`}
            ></span>
          </span>
        </div>
      </div>
    </div>
  );
}
