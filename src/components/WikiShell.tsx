import { WikiHeader } from "./WikiHeader";

export function WikiShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <WikiHeader />
      <main className="mx-auto max-w-3xl px-6 py-10">{children}</main>
    </>
  );
}
