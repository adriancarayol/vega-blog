import HeroSection from './components/HeroSection';
import BookShelf from './components/BookShelf';
import VideoSection from './components/VideoSection';
import PoemOfTheMonth from './components/PoemOfTheMonth';
import NewsSection from './components/NewsSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <BookShelf />
      <VideoSection />
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <PoemOfTheMonth />
        <NewsSection />
      </div>
    </div>
  );
}