import SliderSection from '@/components/sections/SliderSection';
import PostsSection from '@/components/sections/PostsSection';

export default function Home() {
  return (
    <main className="container">
      <SliderSection />
      <PostsSection />

      <section>Contacts</section>
    </main>
  );
}
