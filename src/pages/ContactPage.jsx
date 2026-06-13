import React from 'react';
import Contact from '../components/Contact';
import SEOHead from '../components/SEOHead';

export default function ContactPage() {
  return (
    <div className="page-wrapper">
      <SEOHead
        title="Contact NIR DESIGNS STUDIO | Free Interior Design Consultation | Ahmedabad & Unjha, Gujarat"
        description="Contact NIR DESIGNS STUDIO for a free interior design consultation. Visit our offices in Ahmedabad (Jagatpur Road) or Unjha. Call +91 98982 74832 or email nirdesignstudio9898@gmail.com. Best interior designer in Ahmedabad for residential, commercial, modular kitchen, and 3D visualization projects."
        keywords="contact interior designer Ahmedabad, free interior design consultation, NIR DESIGNS STUDIO contact, interior designer phone number Ahmedabad, interior design office Ahmedabad, interior designer Jagatpur, interior designer Unjha, book interior designer Gujarat, interior design enquiry Ahmedabad"
        path="/contact"
      />
      <Contact />
    </div>
  );
}
