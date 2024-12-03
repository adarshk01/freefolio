interface propsType {
  status: boolean;
}

export function MailCard({ status }: propsType) {
  return (
    <div
      className={`transition ease-in duration-300 ${
        status ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="absolute top-20 -left-24 bg-zinc-800 h-fit w-fit px-10 rounded-xl border border-lime-400">
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
      </div>
    </div>
  );
}
