import React from "react";

interface CardProps {
  children: React.ReactNode;
}

export const Card = ({ children }: CardProps) => {
  return (
    <div className="rounded-xl border p-4 bg-white dark:bg-black">
      {children}
    </div>
  );
};
