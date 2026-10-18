
import Image from "next/image";

async function getArticle(artId) {
  const response = await fetch(
    `https://news-api-v2.vercel.app/api/article/${artId}`,
    { next: { revalidate: 300 } }
  );

  if (!response.ok) {
    return null;
  }

  const result = await response.json();
  return result.data;
}

export default async function PostDetailsPage({ params }) {
  const { artId } = await params;
  const news = await getArticle(artId);

  if (!news) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-24 text-center">
        <h1 className="text-3xl font-bold">সংবাদ পাওয়া যায়নি</h1>
        <p className="mt-3 text-base-content/60">
          অনুগ্রহ করে সঠিক article link ব্যবহার করুন।
        </p>
      </main>
    );
  }

  const author = news.byline?.[0];

  const publishedDate = news.firstPublished
    ? new Date(news.firstPublished).toLocaleDateString("bn-BD", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "";

  const description = news.description?.blocks
    ?.flatMap((item) => item.model?.blocks || [])
    .flatMap((item) => item.model?.blocks || [])
    .map((item) => item.model?.text || "")
    .filter(Boolean)
    .join(" ");

  const tags = news.tags || [];
  const topics = news.topics || [];
  const body = news.body || [];

  return (
    <main className="min-h-screen bg-base-100 text-base-content">
      {/* Article Content */}
      <article className="mx-auto max-w-7xl px-4 py-10 sm:px-6 md:py-14">

        <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,760px)_260px] lg:justify-center lg:gap-16">

          {/* Main Article */}
          <div className="min-w-0">

            {/* Article Body */}
            <div className="article-content text-base leading-8 sm:text-lg sm:leading-9">

              {body.map((item, index) => {
                // Paragraph
                if (item.type === "text") {
                  // Skip this specific promotional paragraph.
                  if (item.text?.includes("হোয়াটসঅ্যাপ চ্যানেল")) {
                    return null;
                  }

                  return (
                    <p
                      key={`text-${index}`}
                      className="mb-7 whitespace-pre-line break-words"
                    >
                      {item.text}
                    </p>
                  );
                }

                // Section Heading
                if (item.type === "subheading") {
                  return (
                    <h2
                      key={`heading-${index}`}
                      className="mb-6 mt-12 border-l-4 border-primary pl-4 text-2xl font-extrabold leading-snug sm:text-3xl"
                    >
                      {item.text}
                    </h2>
                  );
                }

                // Inline Image
                if (item.type === "image" && item.url) {
                  return (
                    <figure
                      key={`image-${index}`}
                      className="my-9"
                    >
                      <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-base-200">
                        <Image
                          src={item.url}
                          alt={item.altText || item.caption || news.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 760px"
                          className="object-cover"
                        />
                      </div>

                      {item.caption && (
                        <figcaption className="mt-3 border-b border-base-300 pb-3 text-sm leading-6 text-base-content/60">
                          {item.caption}
                        </figcaption>
                      )}
                    </figure>
                  );
                }

                return null;
              })}
            </div>

            {/* Tags */}
            {tags.length > 0 && (
              <section className="mt-12 border-t border-base-300 pt-7">
                <h2 className="mb-4 text-lg font-bold">
                  এই প্রতিবেদনের বিষয়
                </h2>

                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, index) => (
                    <span
                      key={`${tag}-${index}`}
                      className="badge badge-lg badge-ghost"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {/* Original Source */}
            <section className="card mt-10 border border-base-300 bg-base-200/50 shadow-sm">
              <div className="card-body">
                <p className="text-sm text-base-content/60">
                  প্রতিবেদন সূত্র
                </p>

                <h2 className="card-title">
                  {news.source || "মূল সংবাদমাধ্যম"}
                </h2>

                <a
                  href={news.sourceUrl || news.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link link-primary mt-2 w-fit"
                >
                  মূল প্রতিবেদন পড়ুন ↗
                </a>
              </div>
            </section>
          </div>

          {/* Article Information Sidebar */}
          <aside className="space-y-5 lg:sticky lg:top-6">

            <section className="card border border-base-300 bg-base-100 shadow-sm">
              <div className="card-body">
                <h2 className="card-title text-lg">
                  প্রতিবেদনের তথ্য
                </h2>

                <div className="divider my-1" />

                <div className="space-y-5 text-sm">
                  <div>
                    <p className="text-base-content/50">লেখক</p>
                    <p className="mt-1 font-semibold">
                      {author?.name || "উল্লেখ নেই"}
                    </p>
                    {author?.role && (
                      <p className="mt-1 text-base-content/60">
                        {author.role}
                      </p>
                    )}
                  </div>

                  <div>
                    <p className="text-base-content/50">
                      প্রকাশের তারিখ
                    </p>
                    <p className="mt-1 font-semibold">
                      {publishedDate || "উল্লেখ নেই"}
                    </p>
                  </div>

                  <div>
                    <p className="text-base-content/50">
                      শব্দ সংখ্যা
                    </p>
                    <p className="mt-1 font-semibold">
                      {news.wordCount
                        ? news.wordCount.toLocaleString("bn-BD")
                        : "উল্লেখ নেই"}
                    </p>
                  </div>

                  {topics.length > 0 && (
                    <div>
                      <p className="mb-2 text-base-content/50">
                        ক্যাটাগরি
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {topics.map((topic) => (
                          <span
                            key={topic.id}
                            className="badge badge-outline"
                          >
                            {topic.name.trim()}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </section>

            <section className="rounded-xl bg-base-200 p-5">
              <p className="text-xs font-bold uppercase tracking-widest text-base-content/50">
                SOURCE
              </p>

              <h2 className="mt-2 text-xl font-black">
                {news.source || "News"}
              </h2>

              <p className="mt-2 text-sm leading-6 text-base-content/70">
                মূল প্রকাশিত প্রতিবেদনের তথ্য ও সূত্র দেখুন।
              </p>

              <a
                href={news.sourceUrl || news.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary mt-4 w-full"
              >
                মূল সংবাদ পড়ুন ↗
              </a>
            </section>
          </aside>
        </div>
      </article>
    </main>
  );
}
