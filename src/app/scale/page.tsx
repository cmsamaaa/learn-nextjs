import scaleImg from '/public/img/scale.jpg';
import Hero from '@/components/hero';

export default function ScalePage() {
  return (
    <Hero
      imgData={scaleImg}
      imgAlt='steel factory'
      title='Scale your app to infinity.'
    />
  );
}
