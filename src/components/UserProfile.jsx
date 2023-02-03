import React from "react";

const UserProfile = ({ avatar_url, login, html_url }) => {
  return (
    <div className="flex justify-center items-center flex-col gap-4 bg-lightGray rounded-lg py-10">
      <img
        src={avatar_url}
        alt=""
        className="w-24 p-2 border-[2px] border-solid border-purple rounded-full object-cover"
      />
      <div className="text-[1.2rem] font-bold">{login}</div>
      <a
        href={html_url}
        className="text-sm bg-purple p-2 text-white rounded-md"
      >
        View profile
      </a>
    </div>
  );
};

export default UserProfile;
