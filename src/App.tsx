import { useEffect, useState } from 'react';
import { Plus, Minus, ArrowRight, MapPin, Phone, Mail } from 'lucide-react';
import './index.css';

const App = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const toggleFaq = (index: number) => {
    if (activeFaq === index) {
      setActiveFaq(null);
    } else {
      setActiveFaq(index);
    }
  };

  return (
    <>
      {/* Sticky Header */}
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="logo">OAK & IVORY</div>
          <nav className="nav-links">
            <a href="#about">The Studio</a>
            <a href="#services">Services</a>
            <a href="#lookbook">Lookbook</a>
            <a href="#team">Barbers</a>
          </nav>
          <a href="#book" className="btn btn-primary">Book a Chair</a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container grid-2">
          <div className="hero-content reveal">
            <h1>Refined Cuts. Absolute Precision.</h1>
            <p>More than a haircut. A complete grooming experience built for the modern gentleman who values detail.</p>
            <div className="hero-actions">
              <a href="#book" className="btn btn-primary">Book Appointment</a>
              <a href="#services" className="btn btn-outline">Our Services</a>
            </div>
          </div>
          <div className="hero-image reveal" style={{ transitionDelay: '0.2s' }}>
            <img src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=1400&auto=format&fit=crop" alt="Barber cutting hair" />
          </div>
        </div>
      </section>

      {/* Brand Promise Strip */}
      <section className="promise-strip">
        <div className="container">
          <div className="promise-item reveal">
            <span>Precision Cuts</span>
          </div>
          <div className="promise-item reveal" style={{ transitionDelay: '0.1s' }}>
            <span>Beard Grooming</span>
          </div>
          <div className="promise-item reveal" style={{ transitionDelay: '0.2s' }}>
            <span>Hot Towel Finish</span>
          </div>
          <div className="promise-item reveal" style={{ transitionDelay: '0.3s' }}>
            <span>Easy Booking</span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container grid-2">
          <div className="about-image reveal">
            <img src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=800&auto=format&fit=crop" alt="Barber shop details" />
          </div>
          <div className="about-content reveal" style={{ transitionDelay: '0.2s' }}>
            <span className="section-label">Our Signature</span>
            <h2>A Return to Classic Grooming</h2>
            <p>Oak & Ivory was born from a simple idea: that a haircut should be a ritual, not a chore. We blend timeless barbering techniques with modern sensibilities in a space designed for relaxation.</p>
            <p>Every detail of our studio is crafted to elevate your experience. Take a seat, enjoy a complimentary beverage, and let our master barbers handle the rest.</p>
            <a href="#team" className="btn btn-outline" style={{ marginTop: '1.5rem' }}>Meet Our Barbers <ArrowRight size={16} style={{ marginLeft: '8px' }}/></a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services" style={{ backgroundColor: 'var(--surface-color)' }}>
        <div className="container">
          <div className="text-center reveal" style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
            <span className="section-label">The Menu</span>
            <h2>Curated Grooming</h2>
            <p>Simple, effective, and executed to perfection.</p>
          </div>
          
          <div className="services-list reveal" style={{ maxWidth: '800px', margin: '3rem auto 0' }}>
            <div className="service-item">
              <div className="service-info">
                <div className="service-name">Classic Haircut</div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.25rem' }}>Precision cut, wash, and style</div>
              </div>
              <div className="service-price">$45</div>
            </div>
            <div className="service-item">
              <div className="service-info">
                <div className="service-name">Skin Fade</div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.25rem' }}>Zero fade with straight razor finish</div>
              </div>
              <div className="service-price">$55</div>
            </div>
            <div className="service-item">
              <div className="service-info">
                <div className="service-name">Beard Sculpting</div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.25rem' }}>Line up, trim, and conditioning oil</div>
              </div>
              <div className="service-price">$30</div>
            </div>
            <div className="service-item">
              <div className="service-info">
                <div className="service-name">Haircut & Beard</div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.25rem' }}>The complete signature experience</div>
              </div>
              <div className="service-price">$70</div>
            </div>
            <div className="service-item">
              <div className="service-info">
                <div className="service-name">Hot Towel Shave</div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.25rem' }}>Traditional straight razor shave</div>
              </div>
              <div className="service-price">$40</div>
            </div>
            <div className="service-item">
              <div className="service-info">
                <div className="service-name">Kids Cut (Under 12)</div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.25rem' }}>Classic cuts for the next generation</div>
              </div>
              <div className="service-price">$35</div>
            </div>
          </div>
        </div>
      </section>

      {/* Lookbook */}
      <section id="lookbook" className="lookbook">
        <div className="container">
          <div className="reveal" style={{ textAlign: 'center' }}>
            <span className="section-label">Lookbook</span>
            <h2>Our Craft in Detail</h2>
          </div>
          <div className="lookbook-grid">
            <div className="lookbook-item reveal">
              <img src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=600&auto=format&fit=crop" alt="Skin Fade Detail" />
            </div>
            <div className="lookbook-item reveal" style={{ transitionDelay: '0.2s' }}>
              <img src="https://images.unsplash.com/photo-1567894340315-735d7c361db0?q=80&w=600&auto=format&fit=crop" alt="Classic Haircut" />
            </div>
            <div className="lookbook-item reveal" style={{ transitionDelay: '0.4s' }}>
              <img src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?q=80&w=600&auto=format&fit=crop" alt="Beard Grooming" />
            </div>
          </div>
        </div>
      </section>

      {/* Studio Experience */}
      <section className="experience">
        <div className="container">
          <div className="reveal">
            <span className="section-label">Atmosphere</span>
            <h2>A Space to Unwind</h2>
            <p>Step away from the noise. Our studio is designed to be a calm, refined sanctuary where you can relax, have a drink, and enjoy the craft of barbering.</p>
          </div>
        </div>
        <div className="experience-images reveal">
          <div className="exp-main-img">
            <img src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=1400&auto=format&fit=crop" alt="Barber Studio Interior" />
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="team">
        <div className="container">
          <div className="reveal" style={{ textAlign: 'center' }}>
            <span className="section-label">The Masters</span>
            <h2>Meet the Barbers</h2>
          </div>
          <div className="team-grid">
            <div className="team-member reveal">
              <div className="team-image">
                <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=500&auto=format&fit=crop" alt="Arthur Pendelton" />
              </div>
              <h3 className="team-name">Arthur Pendelton</h3>
              <div className="team-role">Founder & Master Barber</div>
            </div>
            <div className="team-member reveal" style={{ transitionDelay: '0.2s' }}>
              <div className="team-image">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop" alt="Julian Hayes" />
              </div>
              <h3 className="team-name">Julian Hayes</h3>
              <div className="team-role">Senior Barber</div>
            </div>
            <div className="team-member reveal" style={{ transitionDelay: '0.4s' }}>
              <div className="team-image">
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=500&auto=format&fit=crop" alt="Marcus Cole" />
              </div>
              <h3 className="team-name">Marcus Cole</h3>
              <div className="team-role">Fading Specialist</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing / Packages */}
      <section className="pricing" style={{ backgroundColor: 'var(--surface-color)' }}>
        <div className="container">
          <div className="reveal" style={{ textAlign: 'center' }}>
            <span className="section-label">Packages</span>
            <h2>Grooming Tiers</h2>
          </div>
          <div className="pricing-grid">
            <div className="pricing-card reveal">
              <h3 className="pricing-title">The Standard</h3>
              <div className="pricing-price">$45</div>
              <ul className="pricing-features">
                <li>Personal Consultation</li>
                <li>Precision Haircut</li>
                <li>Neck Shave</li>
                <li>Hot Towel Finish</li>
              </ul>
              <a href="#book" className="btn btn-outline" style={{ width: '100%' }}>Select</a>
            </div>
            <div className="pricing-card highlight reveal" style={{ transitionDelay: '0.2s' }}>
              <h3 className="pricing-title">The Gentleman</h3>
              <div className="pricing-price">$70</div>
              <ul className="pricing-features">
                <li>Everything in Standard</li>
                <li>Beard Sculpting</li>
                <li>Conditioning Treatment</li>
                <li>Complimentary Beverage</li>
              </ul>
              <a href="#book" className="btn btn-primary" style={{ width: '100%' }}>Select</a>
            </div>
            <div className="pricing-card reveal" style={{ transitionDelay: '0.4s' }}>
              <h3 className="pricing-title">The Executive</h3>
              <div className="pricing-price">$95</div>
              <ul className="pricing-features">
                <li>Everything in Gentleman</li>
                <li>Traditional Hot Towel Shave</li>
                <li>Facial Massage</li>
                <li>Premium Styling Product</li>
              </ul>
              <a href="#book" className="btn btn-outline" style={{ width: '100%' }}>Select</a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="container">
          <div className="testimonial-grid">
            <div className="testimonial-card reveal">
              <p className="testimonial-text">"The attention to detail here is unmatched. Julian takes his time and ensures every fade is absolutely flawless. I won't go anywhere else."</p>
              <div className="testimonial-author">James W.</div>
            </div>
            <div className="testimonial-card reveal" style={{ transitionDelay: '0.2s' }}>
              <p className="testimonial-text">"A truly premium experience. The atmosphere is relaxing, the conversation is good, and you always leave looking sharper than when you walked in."</p>
              <div className="testimonial-author">Michael T.</div>
            </div>
            <div className="testimonial-card reveal" style={{ transitionDelay: '0.4s' }}>
              <p className="testimonial-text">"Arthur is a true craftsman. It's not just a haircut, it's an hour of feeling like a VIP. Highly recommend the executive package."</p>
              <div className="testimonial-author">David R.</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq">
        <div className="container">
          <div className="reveal" style={{ textAlign: 'center' }}>
            <span className="section-label">Questions</span>
            <h2>Need to Know</h2>
          </div>
          <div className="faq-list reveal" style={{ transitionDelay: '0.2s' }}>
            {[
              { q: 'Do I need to book in advance?', a: 'While we try to accommodate walk-ins when possible, we highly recommend booking in advance as our barbers schedules fill up quickly.' },
              { q: 'What is your cancellation policy?', a: 'We ask for at least 12 hours notice if you need to cancel or reschedule your appointment to avoid a 50% cancellation fee.' },
              { q: 'Do you offer services for children?', a: 'Yes, we offer classic haircuts for young gentlemen under 12, though we ask that they can sit comfortably for the duration of the cut.' },
              { q: 'What products do you use?', a: 'We exclusively use premium, professional-grade styling products and beard oils, which are also available for purchase in the studio.' }
            ].map((faq, idx) => (
              <div key={idx} className={`faq-item ${activeFaq === idx ? 'active' : ''}`} onClick={() => toggleFaq(idx)}>
                <div className="faq-question">
                  {faq.q}
                  <div className="faq-icon">
                    {activeFaq === idx ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </div>
                <div className="faq-answer">{faq.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="book" className="cta-section">
        <div className="container reveal">
          <h2 style={{ color: 'var(--bg-color)' }}>Ready for a Transformation?</h2>
          <p style={{ marginBottom: '2.5rem' }}>Book your chair today and experience the difference of true craftsmanship.</p>
          <a href="#" className="btn btn-primary" style={{ padding: '1.25rem 3rem', fontSize: '1rem' }}>Book Your Appointment</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="grid-2">
            <div>
              <div className="footer-logo">OAK & IVORY</div>
              <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '300px' }}>Refined grooming for the modern gentleman. Elevating the standard of barbering.</p>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
                <a href="#" style={{ color: 'white' }}>Insta</a>
              </div>
            </div>
            <div className="footer-info">
              <div>
                <h4>Contact</h4>
                <ul>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><MapPin size={16} /> 124 Heritage Blvd, NY</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Phone size={16} /> (555) 123-4567</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Mail size={16} /> hello@oakandivory.com</li>
                </ul>
              </div>
              <div>
                <h4>Hours</h4>
                <ul>
                  <li>Mon - Fri: 9am - 8pm</li>
                  <li>Saturday: 9am - 6pm</li>
                  <li>Sunday: Closed</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            &copy; {new Date().getFullYear()} Oak & Ivory Grooming. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
