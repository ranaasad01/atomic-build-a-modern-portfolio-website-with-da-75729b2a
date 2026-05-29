import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ThemeToggle />
      <Footer />
    </main>
  );
}
