import { login } from "./actions";

export const metadata = {
  title: "Sign in",
  robots: { index: false, follow: false },
};

export default function LoginPage({
  searchParams,
}: {
  searchParams: { error?: string; next?: string };
}) {
  const showError = searchParams.error === "1";
  const next = searchParams.next ?? "/wiki";

  return (
    <main className="mx-auto flex min-h-screen max-w-sm flex-col justify-center px-6">
      <p className="font-mono text-meta uppercase tracking-wide text-tertiary mb-3">
        Slow Morocco
      </p>
      <h1 className="font-serif text-4xl leading-tight text-ink">
        Wiki
      </h1>
      <p className="mt-3 text-secondary">
        Private. Sign in to continue.
      </p>

      <form action={login} className="mt-10 flex flex-col gap-3">
        <input type="hidden" name="next" value={next} />
        <label
          className="font-mono text-meta uppercase tracking-wide text-tertiary"
          htmlFor="password"
        >
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          autoFocus
          autoComplete="current-password"
          required
          className="border border-border bg-white px-4 py-3 text-base font-sans text-ink placeholder:text-tertiary focus:border-ink focus:outline-none transition-colors"
        />
        {showError && (
          <p className="font-mono text-meta uppercase tracking-wide text-accent">
            Incorrect password.
          </p>
        )}
        <button
          type="submit"
          className="mt-2 bg-ink px-4 py-3 font-mono text-meta uppercase tracking-wide text-white hover:bg-accent transition-colors"
        >
          Enter
        </button>
      </form>
    </main>
  );
}
