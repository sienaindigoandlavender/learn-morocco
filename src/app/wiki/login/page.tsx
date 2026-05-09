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
      <h1 className="font-serif text-3xl text-stone-900">Slow Morocco Wiki</h1>
      <p className="mt-2 text-sm text-stone-600">Private. Sign in to continue.</p>

      <form action={login} className="mt-8 flex flex-col gap-3">
        <input type="hidden" name="next" value={next} />
        <label className="text-sm text-stone-700" htmlFor="password">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          autoFocus
          autoComplete="current-password"
          required
          className="rounded border border-stone-300 px-3 py-2 text-base focus:border-stone-500 focus:outline-none"
        />
        {showError && (
          <p className="text-sm text-red-700">Incorrect password.</p>
        )}
        <button
          type="submit"
          className="mt-2 rounded bg-stone-900 px-4 py-2 text-sm text-white hover:bg-stone-800"
        >
          Enter
        </button>
      </form>
    </main>
  );
}
