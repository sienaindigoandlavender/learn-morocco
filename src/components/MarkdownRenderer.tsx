import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Link from "next/link";

export function MarkdownRenderer({ content }: { content: string }) {
  return (
    <div className="wiki-prose">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          a({ href, title, children, ...rest }) {
            const isInternal = typeof href === "string" && href.startsWith("/wiki/");
            const isBroken = title === "wiki-link-broken";
            if (isInternal) {
              return (
                <Link
                  href={href!}
                  className={
                    isBroken
                      ? "text-red-600 underline decoration-red-300 hover:decoration-red-600"
                      : "text-stone-900 underline decoration-stone-400 hover:decoration-stone-900"
                  }
                >
                  {children}
                </Link>
              );
            }
            return (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-900 underline decoration-stone-400 hover:decoration-stone-900"
                {...rest}
              >
                {children}
              </a>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
