"use client";

import React, { useEffect } from "react";
import { useAuth } from "./AuthProvider";
import { useRouter } from "next/navigation";

interface ProtectedRouteProps {
  children: React.ReactNode;
  fallbackPath?: string;
}

export function ProtectedRoute({ children, fallbackPath = "/login" }: ProtectedRouteProps) {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !user) {
      router.push(fallbackPath);
    }
  }, [user, isLoading, router, fallbackPath]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin" />
          <p className="text-gray-500 font-mono text-xs uppercase tracking-widest">
            Verifying Identity...
          </p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null; // Will redirect via useEffect
  }

  return <>{children}</>;
}
