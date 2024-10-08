import { useState } from "react";
import { useLocation, Link } from "react-router-dom";

export default function Header() {
  let location = useLocation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      class="pointer-events-none relative z-50 flex flex-none flex-col"
      style={{
        height: "var(--header-height)",
        marginBottom: "var(--header-mb)",
      }}
    >
      <div
        class="top-0 z-10 h-16 pt-6"
        style={{ position: "var(--header-position)" }}
      >
        <div
          class="sm:px-8 top-[var(--header-top,theme(spacing.6))] w-full"
          style={{ position: "var(--header-inner-position)" }}
        >
          <div class="mx-auto w-full max-w-7xl lg:px-8">
            <div class="relative px-4 sm:px-8 lg:px-12">
              <div class="mx-auto max-w-2xl lg:max-w-5xl">
                <div class="relative flex gap-4">
                  <div class="flex flex-1">
                    <div class="h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur  ">
                      <Link
                        aria-label="Home"
                        class="pointer-events-auto"
                        to="/"
                      >
                        <img
                          alt=""
                          fetchpriority="high"
                          width="512"
                          height="512"
                          decoding="async"
                          data-nimg="1"
                          class="rounded-full bg-zinc-100 object-cover dark:bg-zinc-800 h-9 w-9"
                          style={{ color: "transparent" }}
                          sizes="2.25rem"
                          src="/66465098.png"
                        />
                      </Link>
                    </div>
                  </div>
                  <div class="flex flex-1 justify-end md:justify-center">
                    <div
                      class="pointer-events-auto md:hidden"
                      data-headlessui-state="open"
                    >
                      <button
                        class="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur    "
                        type="button"
                        aria-expanded="false"
                        data-headlessui-state="open active"
                        id="headlessui-popover-button-:Rbmiqja:"
                        onClick={toggleMenu}
                      >
                        Menu
                        <svg
                          viewBox="0 0 8 6"
                          aria-hidden="true"
                          class="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 "
                        >
                          <path
                            d="M1.75 1.75 4 4.25l2.25-2.5"
                            fill="none"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </button>

                      {isMenuOpen && (
                        <>
                          <div
                            class="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm duration-150 data-[closed]:opacity-0 data-[enter]:ease-out data-[leave]:ease-in dark:bg-black/80"
                            id="headlessui-popover-backdrop-:Rjmiqja:"
                            aria-hidden="true"
                          ></div>

                          <div
                            class="transition ease-in-out  fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 duration-150 data-[closed]:scale-95 data-[closed]:opacity-0 data-[enter]:ease-out data-[leave]:ease-in"
                            id="headlessui-popover-panel-:Rrmiqja:"
                            tabindex="-1"
                            // style="--button-width: 88.73333740234375px;"
                            data-headlessui-state="open"
                            data-open=""
                          >
                            <div class="flex flex-row-reverse items-center justify-between">
                              <button
                                aria-label="Close menu"
                                class="-m-1 p-1"
                                type="button"
                                data-headlessui-state="open active"
                                data-open=""
                                data-active=""
                                onClick={toggleMenu}
                              >
                                <svg
                                  viewBox="0 0 24 24"
                                  aria-hidden="true"
                                  class="h-6 w-6 text-zinc-500 "
                                >
                                  <path
                                    d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  ></path>
                                </svg>
                              </button>
                              <h2 class="text-sm font-medium text-zinc-600 ">
                                Navigation
                              </h2>
                            </div>
                            <nav class="mt-6">
                              <ul class="-my-2 divide-y divide-zinc-100 text-base text-zinc-800  ">
                                <li>
                                  <Link
                                    onClick={closeMenu}
                                    class="block py-2"
                                    data-headlessui-state="open active"
                                    data-open=""
                                    data-active=""
                                    to="/about"
                                  >
                                    About
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    onClick={closeMenu}
                                    class="block py-2"
                                    data-headlessui-state="open active"
                                    data-open=""
                                    data-active=""
                                    to="/articles"
                                  >
                                    Articles
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    onClick={closeMenu}
                                    class="block py-2"
                                    data-headlessui-state="open active"
                                    data-open=""
                                    data-active=""
                                    to="/projects"
                                  >
                                    Projects
                                  </Link>
                                </li>
                                {/* <li>
                                  <a
                                    class="block py-2"
                                    data-headlessui-state="open active"
                                    data-open=""
                                    data-active=""
                                    href="/speaking"
                                  >
                                    Speaking
                                  </a>
                                </li> */}
                                {/* <li>
                                  <a
                                    class="block py-2"
                                    data-headlessui-state="open active"
                                    data-open=""
                                    data-active=""
                                    href="/uses"
                                  >
                                    Uses
                                  </a>
                                </li> */}
                              </ul>
                            </nav>
                          </div>
                        </>
                      )}
                    </div>
                    <div
                      // hidden=""
                      style={{
                        position: "fixed",
                        top: "1px",
                        left: "1px",
                        width: "1px",
                        height: 0,
                        padding: 0,
                        margin: "-1px",
                        overflow: "hidden",
                        clip: "rect(0, 0, 0, 0)",
                        whitesSpace: "nowrap",
                        borderWidth: 0,
                        display: "none",
                      }}
                    ></div>
                    <nav class="pointer-events-auto hidden md:block">
                      <ul class="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur   ">
                        <li>
                          <Link
                            class={`relative block px-3 py-2 transition hover:text-teal-500  ${
                              location.pathname == "/about" && "text-teal-500"
                            } `}
                            to="/about"
                          >
                            About
                            {location.pathname == "/about" && (
                              <span class="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0"></span>
                            )}
                          </Link>
                        </li>
                        <li>
                          <Link
                            class={`relative block px-3 py-2 transition hover:text-teal-500  ${
                              location.pathname == "/articles" &&
                              "text-teal-500"
                            } `}
                            to="/articles"
                          >
                            Articles
                            {location.pathname == "/articles" && (
                              <span class="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0"></span>
                            )}
                          </Link>
                        </li>
                        <li>
                          <Link
                            class={`relative block px-3 py-2 transition hover:text-teal-500  ${
                              location.pathname == "/projects" &&
                              "text-teal-500"
                            } `}
                            to="/projects"
                          >
                            Projects
                            {location.pathname == "/projects" && (
                              <span class="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0"></span>
                            )}
                          </Link>
                        </li>
                        {/* <li>
                          <Link
                            class={`relative block px-3 py-2 transition hover:text-teal-500  ${
                              location.pathname == "/speaking" &&
                              "text-teal-500"
                            } `}
                            to="/speaking"
                          >
                            Speaking
                            {location.pathname == "/speaking" && (
                              <span class="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0"></span>
                            )}
                          </Link>
                        </li> */}
                        {/* <li>
                          <Link
                            class={`relative block px-3 py-2 transition hover:text-teal-500  ${
                              location.pathname == "/uses" && "text-teal-500"
                            } `}
                            to="/uses"
                          >
                            Uses
                            {location.pathname == "/uses" && (
                              <span class="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0"></span>
                            )}
                          </Link>
                        </li> */}
                      </ul>
                    </nav>
                  </div>
                  <div class="flex justify-end md:flex-1">
                    <div class="pointer-events-auto">
                      <button
                        type="button"
                        aria-label="Switch to dark theme"
                        class="group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition   "
                      >
                        <svg
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          aria-hidden="true"
                          class="h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-teal-50 [@media(prefers-color-scheme:dark)]:stroke-teal-500 [@media(prefers-color-scheme:dark)]:group-hover:fill-teal-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-teal-600"
                        >
                          <path d="M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z"></path>
                          <path
                            d="M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061"
                            fill="none"
                          ></path>
                        </svg>
                        <svg
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          class="hidden h-6 w-6 fill-zinc-700 stroke-zinc-500 transition  [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-400 [@media_not_(prefers-color-scheme:dark)]:fill-teal-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-teal-500"
                        >
                          <path
                            d="M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
