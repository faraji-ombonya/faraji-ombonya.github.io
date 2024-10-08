import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer class="mt-32 flex-none">
      <div class="sm:px-8">
        <div class="mx-auto w-full max-w-7xl lg:px-8">
          <div class="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40">
            <div class="relative px-4 sm:px-8 lg:px-12">
              <div class="mx-auto max-w-2xl lg:max-w-5xl">
                <div class="flex flex-col items-center justify-between gap-6 sm:flex-row">
                  <div class="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 ">
                    <Link class="transition hover:text-teal-500" to="/about">
                      About
                    </Link>
                    <Link class="transition hover:text-teal-500" to="/articles">
                      Articles
                    </Link>
                    <Link class="transition hover:text-teal-500" to="/projects">
                      Projects
                    </Link>
                  </div>
                  <p class="text-sm text-zinc-400">
                    © Faraji Ombonya. All rights reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
