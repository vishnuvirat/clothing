import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Newest from "./components/Newest";
export const dynamic = "force-dynamic";
export const revalidate = 0;
export default function Home() {
    return (
        <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
            <Hero />
            <Newest />
            <Footer />
        </div>
    );
}
