import performanceImg from '/public/img/performance.jpg';
import Hero from '@/components/1/hero';

export default function PerformancePage() {
  return (
    <Hero
      imgData={performanceImg}
      imgAlt='welding'
      title='We serve high performance applications'
    />
  );
}
