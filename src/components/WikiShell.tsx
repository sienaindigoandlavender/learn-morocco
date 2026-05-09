import { WikiHeader } from "./WikiHeader";
import { WikiFooter } from "./WikiFooter";

export function WikiShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <WikiHeader />
      <main className="max-w-content mx-auto px-6 py-16">{children}</main>
      <WikiFooter />
    </>
  );
}
