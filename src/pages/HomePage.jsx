import Categories from '../components/Categories';
import TextMarquee from '../components/TextMarquee';
import SEOHead from '../components/SEOHead';

export default function HomePage() {
  return (
    <>
      <SEOHead
        title="NIR DESIGNS STUDIO | Best Interior Designer in Ahmedabad, Gujarat | Architecture & Interior Design"
        description="NIR DESIGNS STUDIO is Ahmedabad's top-rated Architecture & Interior Design studio. 150+ luxury projects, 8+ years experience. Residential & commercial interior design, modular kitchen, 3D visualization, home renovation. Free consultation in Ahmedabad, Unjha, Mehsana, Gandhinagar."
        keywords="best interior designer Ahmedabad, interior design studio Gujarat, luxury interior designer, residential interior design, commercial interior design, modular kitchen Ahmedabad, 3D visualization, home renovation, NIR DESIGNS STUDIO, Niraj Patel architect"
        path="/"
      />
      <Categories />
      <TextMarquee />
    </>
  );
}
