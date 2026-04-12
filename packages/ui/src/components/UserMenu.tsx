"use client";

import React from "react";
import { useAuth } from "./AuthProvider";
import { LogOut, User as UserIcon, Settings } from "lucide-react";

export function UserMenu() {
  const { user, signOut } = useAuth();

  if (!user) return null;

  return (
    <div className="flex items-center gap-4 p-2 bg-gray-900/50 border border-gray-800 rounded-full pr-4">
      <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 flex items-center justify-center text-xs font-bold text-white uppercase">
        {user.email?.[0] || <UserIcon size={16} />}
      </div>
      <div className="hidden md:block">
        <p className="text-xs text-gray-400 font-mono leading-none mb-1">Authenticated</p>
        <p className="text-sm font-medium text-white leading-none max-w-[150px] truncate">
          {user.email}
        </p>
      </div>
      <div className="flex items-center gap-1 ml-2 border-l border-gray-800 pl-3">
        <button className="p-1.5 text-gray-500 hover:text-white transition-colors" title="Settings">
          <Settings size={16} />
        </button>
        <button
          onClick={() => signOut()}
          className="p-1.5 text-gray-500 hover:text-red-400 transition-colors"
          title="Sign Out"
        >
          <LogOut size={16} />
        </button>
      </div>
    </div>
  );
}
