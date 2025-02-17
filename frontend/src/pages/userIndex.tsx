"use client";

import React from "react";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import apiRouter from "@/api/router";

interface User {
  id: number;
  user_profile_url: string;
  first_name: string;
  last_name: string;
  year: string;
  email: string;
}

const UserIndex: React.FC = () => {
  const { data: users, isLoading, error } = useQuery({
    queryKey: ["getUsers"],
    queryFn: apiRouter.users.getUsers,
  });

  if (isLoading) return <div className="text-white text-xl">Loading users...</div>;
  if (error) return <div className="text-red-500 text-xl">Error loading users</div>;

  return (
    <div className="relative w-screen h-screen flex justify-center items-center">
      {/* Navigation Bar */}
      <nav className="absolute top-5 right-10 flex gap-3 z-20">
        {[
          { name: "Home", path: "/" },
          { name: "Index", path: "/userIndex" },
          { name: "Profile", path: "/profile" },
          { name: "Login", path: "/login" },
        ].map((item) => (
          <Link
            key={item.name}
            href={item.path}
            className="px-4 py-2 text-[--popcol] bg-[--dark2] rounded-md shadow-lg transition 
                       hover:bg-[--popcol] hover:text-[--dark2] hover:scale-105"
          >
            {item.name}
          </Link>
        ))}
      </nav>

      <div className="w-screen h-screen px-[5%] flex flex-col justify-start items-center gap-[48px] p-10">
        <div className="mt-5 pt-[12px]">
          <h1 className="text-center text-5xl font-bold text-white">User Index</h1>
        </div>

        <div className="w-[80%] h-[80%] bg-[--dark2] rounded-2xl shadow-xl p-[2%]">
          <div className="gap-[12px] h-[100%] flex flex-col overflow-y-scroll overflow-x-hidden relative">
            {users?.map((user: User) => (
              <div
                className="relative w-full h-[20%] border-4 border-[--grey1] rounded-[15px] cursor-pointer hover:border-[--popcol] hover:text-[--popcol] flex"
                key={user.id}
              >
                <div className="w-[auto] min-w-[64px] h-full flex flex-col">
                  <img
                    src={user.user_profile_url || "/profilePix/default.jpg"} // Fallback image
                    alt={`${user.first_name} ${user.last_name}`}
                    className="w-auto h-full rounded-l-[10px] object-cover aspect-square"
                  />
                </div>
                <div className="w-[auto] h-full flex flex-col pl-[24px] gap-[12px] justify-center">
                  <h2 className="text-2xl">{user.first_name} {user.last_name}</h2>
                  <h3 className="text-lg">{user.year}</h3>
                  <p className="text-sm text-gray-400">{user.email}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserIndex;
