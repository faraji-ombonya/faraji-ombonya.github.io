import { useParams } from "react-router-dom";
import { getPost } from "../utils";
import { useNavigate } from "react-router-dom";
import RenderContent from "./RenderContent";

export default function ArticleDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const post = getPost(slug);

  return (
    <main className="flex-auto w-full">
      <div className="sm:px-8 mt-16 lg:mt-32">
        <div className="mx-auto w-full max-w-7xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <div className="xl:relative">
                <div className="mx-auto max-w-2xl">
                  <button
                    onClick={() => navigate(-1)}
                    type="button"
                    aria-label="Go back to articles"
                    className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 transition lg:absolute lg:-left-5 lg:-mt-2 lg:mb-0 xl:-top-1.5 xl:left-0 xl:mt-0 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20"
                  >
                    <svg
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden="true"
                      className="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400"
                    >
                      <path
                        d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </button>
                  <article>
                    <header className="flex flex-col">
                      <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                        {post?.title}
                      </h1>
                      <time
                        dateTime={post?.date?.datetime}
                        className="order-first flex items-center text-base text-zinc-400 dark:text-zinc-500"
                      >
                        <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"></span>
                        <span className="ml-3">{post?.date?.display}</span>
                      </time>
                    </header>
                    <div
                      className="mt-8 prose dark:prose-invert"
                      data-mdx-content="true"
                    >
                      <p>{post?.lead}</p>
                      <img
                        src={post?.graphic.src}
                        alt={post?.graphic.alt}
                        width="1310"
                        height="872"
                      />

                      <RenderContent content={post?.content} />
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
