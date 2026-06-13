import React from 'react';
import TestimonialMarquee from '../components/TestimonialMarquee';
import SEOHead from '../components/SEOHead';

const allTestimonials = [
    { name: "Aarav Desai", role: "Residential Project", text: "NIR DESIGNS transformed our apartment into a luxurious haven. Their attention to detail and ability to blend modern aesthetics with functional spaces is truly remarkable.", rating: 5, title: "A Masterpiece of Comfort" },
    { name: "Priya Sharma", role: "Commercial Office", text: "The workspace designed by NIR DESIGNS is both inspiring and highly productive. The team understood our brand vision perfectly and delivered beyond our expectations.", rating: 5, title: "Inspiring Workspace" },
    { name: "Vikram Mehta", role: "Villa Renovation", text: "Exceptional service from start to finish. The 3D visualizations helped us foresee the magic they were about to create. Highly professional and deeply creative.", rating: 5, title: "Flawless Execution" },
    { name: "Sneha Patel", role: "Interior Styling", text: "They have a meticulous eye for colors, textures, and lighting. My living room feels straight out of an architectural magazine. Simply brilliant!", rating: 5, title: "Stunning Aesthetics" },
    { name: "Rohit Joshi", role: "Custom Furniture", text: "The bespoke furniture pieces they designed fit perfectly into our home. It's rare to find designers who care so deeply about both form and function.", rating: 5, title: "Perfectly Tailored" },
    { name: "Meera Shah", role: "Luxury Apartment", text: "From the first consultation to the final handover, the experience was seamless. They brought our dream home to life with impeccable taste.", rating: 5, title: "Dream Home Realized" },
];

export default function TestimonialsPage() {
    return (
        <div className="page-transition" style={{ backgroundColor: 'var(--off-white)', minHeight: '100vh' }}>
            <SEOHead
                title="Client Reviews & Testimonials | Top-Rated Interior Designer Ahmedabad | NIR DESIGNS STUDIO"
                description="Read 5-star client reviews and testimonials for NIR DESIGNS STUDIO Ahmedabad. Our clients love our residential interior design, commercial interiors, 3D visualization, and turnkey solutions. 100% client satisfaction guaranteed."
                keywords="interior designer reviews Ahmedabad, NIR DESIGNS STUDIO testimonials, best interior designer reviews Gujarat, client feedback interior design, 5 star interior designer, trusted interior designer Ahmedabad, interior design client satisfaction"
                path="/testimonials"
            />
            {/* Header */}
            <section className="testimonials-header-section">
                <div className="testimonials-header-content">
                    <div className="testimonials-badge">
                        <span className="testimonials-badge-icon">★</span>
                        Client Trust
                    </div>
                    <h1 className="testimonials-title">
                        Stories of <span className="text-gold italic-font">Stunning Spaces</span>
                    </h1>
                    <p className="testimonials-subtitle">
                        Discover why discerning clients choose NIR DESIGNS for their interior architecture and styling journeys.
                    </p>
                </div>
            </section>

            {/* Marquee Section */}
            <TestimonialMarquee testimonials={allTestimonials} />
        </div>
    );
}
