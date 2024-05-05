import Header from '@/components/1/header';
import homeImg from '/public/img/home.jpg';
import Hero from '@/components/1/hero';

export default function Home() {
  return (
    <>
      <Header />
      <Hero
        imgData={homeImg}
        imgAlt='car factory'
        title='Professional Cloud Hosting'
      />
    </>
  );
}
