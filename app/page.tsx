import SliderSection from '@/components/sections/SliderSection';
import PostsSection from '@/components/sections/PostsSection';
import { ContactsSection } from '@/components/sections/ContactsSection';

export default function Home() {
  return (
    <main className='page'>
      <SliderSection />
      <PostsSection />
      <ContactsSection />
    </main>
  );
}
