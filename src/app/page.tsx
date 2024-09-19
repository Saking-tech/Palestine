import BlogSection from "./Components/display";
import Footer from "./Components/footer";
import Navbar from "./Components/navbar";
import LiberationVideo from "./Components/video";
import BlogTypingSection from "./Components/blog";

export default function Home() {
  return (
    <main>
        <Navbar />
        <BlogTypingSection />
        <BlogSection />
        <LiberationVideo />
        <Footer />
    </main>
  );
}
