import homeImg from '/public/img/home.jpg';
import Hero from '@/components/hero';

export default function Home() {
  return (
    <Hero
      imgData={homeImg}
      imgAlt='car factory'
      title='Professional Cloud Hosting'
    />
  );
}
