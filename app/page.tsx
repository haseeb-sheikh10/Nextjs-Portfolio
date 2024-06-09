import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNavbar } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/constants/navItems";

export default function Home() {
  return (
    <main className="relative flex bg-black-100 min-h-screen flex-col items-center justify-center overflow-hidden mx-auto px-5 sm:px-10">
      <div className="max-w-7xl w-full">
        <FloatingNavbar navItems={navItems} />
        <Hero />
        <Grid></Grid>
      </div>
    </main>
  );
}
