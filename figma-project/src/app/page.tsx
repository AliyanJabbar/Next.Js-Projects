import FeaturedPosts from "./components/featuredPosts";
import Hero from "./components/hero";
import RecentPosts from "./components/recentposts";

export default function Home() {
  return (
    <div>
      <Hero/>
      <RecentPosts/>
      <FeaturedPosts/>
    </div>
  );
}
