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
                      ? "text-accent border-b border-dashed border-accent hover:opacity-80"
                      : "text-ink border-b border-accent hover:text-accent"
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
                className="text-ink border-b border-accent hover:text-accent"
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
