import reliabilityImg from '/public/img/reliability.jpg';
import Hero from '@/components/1/hero';

export default function ReliabilityPage() {
  return (
    <Hero
      imgData={reliabilityImg}
      imgAlt='welding'
      title='Super high reliability hosting'
    />
  );
}
