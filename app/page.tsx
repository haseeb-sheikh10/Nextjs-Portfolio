import About from "@/components/About";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { FloatingNavbar } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative flex bg-black-100 min-h-screen flex-col items-center justify-center overflow-hidden mx-auto px-5 sm:px-10">
      <div className="max-w-7xl w-full">
        <FloatingNavbar navItems={navItems} />
        <Hero />
        {/* <About /> */}
        {/* <Projects /> */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="card-bg rounded-3xl relative p-4 dark:border-card-border/[0.4] border">
            <h1>haseeb</h1>
          </div>
          <div className="card-bg rounded-3xl relative p-4 dark:border-card-border/[0.4] border">
            <h1>haseeb</h1>
          </div>
          <div className="card-bg rounded-3xl relative p-4 dark:border-card-border/[0.4] border">
            <h1>haseeb</h1>
          </div>
          <div className="card-bg rounded-3xl relative p-4 dark:border-card-border/[0.4] border">
            <h1>haseeb</h1>
          </div>
        </div>
      </div>
    </main>
  );
}
