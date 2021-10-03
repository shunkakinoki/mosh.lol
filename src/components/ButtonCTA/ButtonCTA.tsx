import type { FC } from "react";

import { useModalWindow } from "@/hooks/useModalWindow";

export const ButtonCTA: FC = () => {
  const [, setModalOpen] = useModalWindow();

  const openModal = () => {
    setModalOpen(true);
  };

  return (
    <div className="flex justify-center pt-6">
      <div className="inline-flex space-x-6">
        <a
          href="https://app.mosh.lol"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex justify-center items-center py-2 px-4 text-sm font-medium leading-6 text-center text-trueGray-50 bg-gradient-to-r from-pink-400 hover:from-pink-300 via-purple-400 hover:via-purple-300 to-indigo-500 hover:to-indigo-400 rounded-md border hover:border-2 border-gray-600 shadow-xl hover:scale-105"
        >
          Enter App
        </a>
        <button
          className="inline-flex justify-center items-center py-2 px-4 text-sm font-medium leading-6 text-center text-pink-400 bg-pink-100 hover:bg-pink-200 rounded-md border border-transparent hover:border-red-400 focus:ring-pink-500"
          onClick={openModal}
        >
          Learn More
        </button>
      </div>
    </div>
  );
};
