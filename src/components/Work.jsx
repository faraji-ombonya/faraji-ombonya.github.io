export default function Work() {
  const works = [
    {
      companyName: "Sparepap",
      role: "Full Stack Engineer",
      startDateTime: "2023",
      startDateDisplay: "Dec 2023",
      endDateTime: "",
      endDateDisplay: "Present",
      imageUrl: "/sparepap.jpeg",
    },
    {
      companyName: "Cintelcore",
      role: "Backend Engineer",
      startDateTime: "2023",
      startDateDisplay: "Nov 2023",
      endDateTime: "2023",
      endDateDisplay: "Nov 2023",
      imageUrl: "/cropped-Original-Cintel-Logo.webp",
    },
    {
      companyName: "EpicApp",
      role: "Backend Engineer",
      startDateTime: "2023",
      startDateDisplay: "Jun 2023",
      endDateTime: "2023",
      endDateDisplay: "Oct 2023",
      imageUrl: "/appinapp.webp",
    },
    {
      companyName: "Bukura Agricultural College",
      role: "Intern",
      startDateTime: "2021",
      startDateDisplay: "Nov 2021",
      endDateTime: "2022",
      endDateDisplay: "Jan 2022",
      imageUrl: "/logo-bac2.png",
    },
  ];

  return (
    <div class="rounded-2xl border border-zinc-100 p-6 ">
      <h2 class="flex text-sm font-semibold text-zinc-900 ">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
          class="h-6 w-6 flex-none"
        >
          <path
            d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
            class="fill-zinc-100 stroke-zinc-400  "
          ></path>
          <path
            d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
            class="stroke-zinc-400 "
          ></path>
        </svg>
        <span class="ml-3">Work</span>
      </h2>
      <ol class="mt-6 space-y-4">
        {works?.map((work) => (
          <li class="flex gap-4">
            <div class="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5">
              <img
                alt=""
                loading="lazy"
                width="32"
                height="32"
                decoding="async"
                data-nimg="1"
                class="h-7 w-7"
                style={{ color: "transparent" }}
                src={work?.imageUrl}
              />
            </div>
            <dl class="flex flex-auto flex-wrap gap-x-2">
              <dt class="sr-only">Company</dt>
              <dd class="w-full flex-none text-sm font-medium text-zinc-900 ">
                {work?.companyName}
              </dd>
              <dt class="sr-only">Role</dt>
              <dd class="text-xs text-zinc-500 ">{work?.role}</dd>
              <dt class="sr-only">Date</dt>
              <dd
                class="ml-auto text-xs text-zinc-400 "
                aria-label="2019 until Present"
              >
                <time datetime="2019">{work?.startDateDisplay}</time>{" "}
                <span aria-hidden="true">—</span>{" "}
                <time datetime="2024">{work?.endDateDisplay}</time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      <a
        target="blank"
        class="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 /50      group mt-6 w-full"
        href="https://docs.google.com/document/d/1M082yxrGS4b9d52GrI2y9Jp6BJ7KdINXc5jwTYZ4QzM/edit?usp=sharing"
      >
        Download CV
        <svg
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
          class="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600"
        >
          <path
            d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </a>
    </div>
  );
}
