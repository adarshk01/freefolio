interface propsType {
  status: boolean;
  updateState: () => void;
}

export function MailCard({ status, updateState }: propsType) {
  return (
    <div
      className={`transition ease-in-out duration-300 ${
        status
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="fixed top-[3200px] -left-24 bg-zinc-800 h-fit w-fit px-10 rounded-xl border border-lime-400">
        <div className="flex my-10  gap-5">
          <div className="mt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-10 text-lime-400"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </div>
          <div>
            <div className="text-lg font-semibold text-zinc-900 dark:text-white ">
              Your email has been sent successfully.
            </div>
            <div className="text-sm text-zinc-600 dark:text-zinc-300 mt-1">
              I’ll get back to you as soon as I can. Thank you for reaching out!
            </div>
          </div>
        </div>
        <div className="flex justify-end mb-2.5">
          <div
            className=" text-black bg-stone-500 px-2.5 py-1.5 rounded-lg cursor-pointer hover:bg-stone-600"
            onClick={updateState}
          >
            close
          </div>
        </div>
      </div>
    </div>
  );
}
