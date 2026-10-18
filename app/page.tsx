'use client'

import { useState } from 'react'
import { ArrowUpRight, Check, Menu, X } from 'lucide-react'

const services = [
  {
    number: '01',
    title: 'Websites & hosting',
    copy: 'Fast, reliable websites and hosting built to be the home base for everything else your business does online.',
    size: 'feature',
  },
  {
    number: '02',
    title: 'E-commerce',
    copy: 'Storefronts, listings and the operations behind them — set up to sell today and built to scale tomorrow.',
    size: 'medium',
  },
  {
    number: '03',
    title: 'SEO & GEO',
    copy: 'Get found in traditional search and in AI-powered answer engines, around the searches your customers actually make.',
    size: 'medium',
  },
  {
    number: '04',
    title: 'Ads',
    copy: 'Build, test and optimize paid campaigns around acquisition — not vanity metrics.',
    size: 'small',
  },
  {
    number: '05',
    title: 'Analytics',
    copy: 'Turn scattered numbers into clear signals about what is working and what to do next.',
    size: 'small',
  },
  {
    number: '06',
    title: 'Technology & operations',
    copy: 'The tools, systems and processes that keep your business running smoothly as it grows.',
    size: 'small',
  },
  {
    number: '07',
    title: 'End-to-end solutions',
    copy: 'Strategy, build, launch and growth under one roof — one partner for everything your business needs to get started and keep going.',
    size: 'wide',
  },
]

function Brand({ light = false }: { light?: boolean }) {
  return (
    <a
      href="#top"
      className={`brand ${light ? 'brand-light' : ''}`}
      aria-label="BreadIt4U home"
    >
      <span className="brand-mark">◒</span>
      <span>
        BreadIt<span className="brand-four">4U</span>
      </span>
    </a>
  )
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <main id="top">
      <nav className="nav">
        <div className="nav-inner">
          <Brand />

          <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <a href="#about" onClick={closeMenu}>
              About
            </a>

            <a href="#services" onClick={closeMenu}>
              Services
            </a>

            <a href="#work" onClick={closeMenu}>
              Case Studies
            </a>

            <a href="#why" onClick={closeMenu}>
              Why Us
            </a>

            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>

            <a
              className="nav-mobile-cta"
              href="#contact"
              onClick={closeMenu}
            >
              Book a Strategy Call <ArrowUpRight size={15} />
            </a>
          </div>

          <a className="button button-small nav-cta" href="#contact">
            Book a Strategy Call <ArrowUpRight size={15} />
          </a>

          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      <section className="hero section-wrap">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="eyebrow-dot" /> Your all-in-one partner for
            ambitious teams
          </p>

          <h1>
            One partner for <em>everything</em> your business needs.
          </h1>

          <p className="hero-text">
            BreadIt4U is an end-to-end solutions partner for early-stage
            startups and emerging brands — from websites, hosting and
            e-commerce to marketing, analytics and technology, we help you
            launch, get seen, get customers and keep growing.
          </p>

          <div className="hero-actions">
            <a className="button" href="#contact">
              Book a Strategy Call <ArrowUpRight size={17} />
            </a>

            <a className="text-link" href="#services">
              See how we work <span>↓</span>
            </a>
          </div>

          <p className="hero-note">
            Built for founders who are ready to move.
          </p>
        </div>

        <div className="hero-art">
          <div className="art-label">
            Just toast,
            <br />
            <strong>and let us host.</strong>
          </div>

          <img
            src="/breadit-hero.png"
            alt="Toasted bread rising from a toaster and becoming an upward growth line"
          />

          <div className="art-stamp">
            EST.
            <br />
            <strong>2026</strong>
          </div>
        </div>
      </section>

      <section id="about" className="about section-wrap">
        <div className="section-kicker">01 / The partner behind the plan</div>

        <div className="about-grid">
          <div>
            <h2>
              Solutions built for the way startups{' '}
              <span>actually grow.</span>
            </h2>

            <p className="large-copy">
              Startups rarely need another vendor that hands over a deliverable
              and disappears.
            </p>
          </div>

          <div className="about-detail">
            <p>
              They need a partner who understands that priorities change
              quickly, budgets are limited, experimentation matters, and every
              solution has to connect to actual business outcomes.
            </p>

            <p>
              That is where we come in: hands-on, founder-led support that
              brings strategy, technology and doing under one roof.
            </p>

            <a href="#contact" className="arrow-link">
              Let&apos;s talk about your next move <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        <div className="principles">
          <div>
            <b>01</b>
            <span>Move with clarity</span>
          </div>

          <div>
            <b>02</b>
            <span>Keep it practical</span>
          </div>

          <div>
            <b>03</b>
            <span>Learn in public</span>
          </div>

          <div>
            <b>04</b>
            <span>Build for the next stage</span>
          </div>
        </div>
      </section>

      <section id="services" className="services section-wrap">
        <div className="section-heading">
          <div>
            <div className="section-kicker">02 / What we do</div>
            <h2>Everything your business needs to grow.</h2>
          </div>

          <p>
            One focused partner for the work that gets your business built,
            discovered, trusted and chosen.
          </p>
        </div>

        <div className="service-grid">
          {services.map((service, index) => (
            <article
              className={`service-card ${service.size}`}
              key={service.number}
            >
              <span className="service-number">{service.number}</span>

              <div>
                <h3>{service.title}</h3>
                <p>{service.copy}</p>
              </div>

              {index === 0 && (
                <div className="service-visual">
                  <span>↗</span>

                  <small>
                    build
                    <br />
                    launch
                    <br />
                    grow
                  </small>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      <section id="why" className="why section-wrap">
        <div className="why-visual">
          <div className="why-quote">
            Good work
            <br />
            <em>moves.</em>
          </div>

          <div className="line-path" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>

        <div className="why-copy">
          <div className="section-kicker">03 / Why startups</div>

          <h2>
            Startups don&apos;t need more vendors. They need one partner that{' '}
            <span>moves.</span>
          </h2>

          <div className="why-list">
            <div>
              <b>MOVE FAST</b>
              <p>Test, learn and adapt without six layers of approvals.</p>
            </div>

            <div>
              <b>STAY LEAN</b>
              <p>
                Focus budget and effort where they can create measurable
                movement.
              </p>
            </div>

            <div>
              <b>CONNECT THE DOTS</b>
              <p>
                Strategy, website, hosting, e-commerce, marketing and
                analytics should work together.
              </p>
            </div>

            <div>
              <b>BUILD FOR NOW — AND NEXT</b>
              <p>Your solutions should evolve as your startup does.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDERS */}
      <section className="founders section-wrap">
        <div className="section-heading">
          <div>
            <div className="section-kicker">04 / The people</div>
            <h2>Built from hands-on startup experience.</h2>
          </div>

          <p>
            Young enough to move fast. Experienced enough to know that the
            details matter.
          </p>
        </div>

        <div className="founder-grid">
          {/* SAKHYAM */}
          <article className="founder-card founder-one">
            <div className="founder-info">
              <span>Co-founder</span>

              <h3>Sakhyam Shree</h3>

              <p>Marketing · Growth · Business development</p>
            </div>

            <div className="founder-popup">
              <span>CO-FOUNDER</span>

              <h4>Sakhyam Shree</h4>

              <p>
                Marketing, growth and business development. Focused on
                building brands, driving growth and creating opportunities.
              </p>
            </div>
          </article>

          {/* SAHIBJOT */}
          <article className="founder-card founder-two">
            <div className="founder-info">
              <span>Founder</span>

              <h3>Sahibjot Singh</h3>

              <p>Operations · E-commerce · Technology</p>
            </div>

            <div className="founder-popup">
              <span>FOUNDER</span>

              <h4>Sahibjot Singh</h4>

              <p>
                Operations, e-commerce and technology. Focused on building the
                systems and technology that keep the business moving.
              </p>
            </div>
          </article>

          {/* MRIDUL */}
          <article className="founder-card founder-three">
            <div className="founder-info">
              <span>Co-founder</span>

              <h3>Mridul Harnal</h3>

              <p>Co-founder</p>
            </div>

            <div className="founder-popup">
              <span>CO-FOUNDER</span>

              <h4>Mridul Harnal</h4>

              <p>
                Co-founder at BreadIt4U. More information coming soon.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section id="work" className="work section-wrap">
        <div className="section-heading">
          <div>
            <div className="section-kicker">05 / Selected experience</div>

            <h2>Ideas worth putting to work.</h2>
          </div>

          <p>
            We are building our public portfolio. Until then, here is the kind
            of work we love to get our hands on.
          </p>
        </div>

        <div className="work-grid">
          <article className="work-feature">
            <div className="work-art work-art-one">
              <span>D2C</span>

              <strong>
                Make the
                <br />
                first click
                <br />
                count.
              </strong>
            </div>

            <div>
              <span className="work-tag">Growth experiment</span>

              <h3>E-commerce optimization</h3>

              <p>Sharper journeys from discovery to checkout.</p>
            </div>
          </article>

          <article className="work-card">
            <div className="work-art work-art-two">
              <span>WEB</span>

              <strong>
                Built to
                <br />
                be useful.
              </strong>
            </div>

            <span className="work-tag">Selected experience</span>

            <h3>Conversion-focused websites</h3>

            <p>Case study coming soon.</p>
          </article>

          <article className="work-card">
            <div className="work-art work-art-three">
              <span>SEARCH</span>

              <strong>
                Be found
                <br />
                in the right
                <br />
                conversation.
              </strong>
            </div>

            <span className="work-tag">Growth experiment</span>

            <h3>Organic visibility</h3>

            <p>Case study coming soon.</p>
          </article>
        </div>
      </section>

      <section className="capabilities">
        <div className="section-wrap">
          <div className="cap-header">
            <div className="section-kicker">06 / What you get</div>

            <h2>
              Less noise.
              <br />
              <span>More movement.</span>
            </h2>
          </div>

          <div className="cap-grid">
            <div>
              <strong>FULL-STACK</strong>

              <p>
                Websites + hosting + e-commerce + marketing + analytics +
                technology.
              </p>
            </div>

            <div>
              <strong>HANDS-ON</strong>

              <p>Strategy doesn&apos;t stop at a presentation.</p>
            </div>

            <div>
              <strong>FOUNDER-LED</strong>

              <p>
                Direct involvement from the people building the agency.
              </p>
            </div>

            <div>
              <strong>MULTIPLE INDUSTRIES</strong>

              <p>
                Experience across different startup and business environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact section-wrap">
  <div className="contact-intro">
    <div className="section-kicker">Make your next move</div>

    <h2>
      Ready to get <em>toasted</em> to the top?
    </h2>

    <p>Tell us where you are and where you want to go.</p>

    <div className="contact-aside">
      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=partner.breadit@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        partner.breadit@gmail.com <ArrowUpRight size={14} />
      </a>

      <a href="tel:+919453777109">
        +91 94537 77109 <ArrowUpRight size={14} />
      </a>
    </div>
  </div>

  <form
    className="contact-form"
    action="https://formspree.io/f/xdekkjke"
    method="POST"
    onSubmit={handleSubmit}
  >
    {submitted ? (
      <div className="success">
        <div className="success-icon">
          <Check />
        </div>
        <h3>Perfect. Your request is toasted.</h3>
        <p>We&apos;ll be in touch soon.</p>
        <button
          className="text-link"
          type="button"
          onClick={() => setSubmitted(false)}
        >
          Send another request
        </button>
      </div>
    ) : (
      <>
        <div className="form-row">
          <label>
            Name
            <input name="name" required placeholder="Your name" />
          </label>

          <label>
            Email
            <input
              name="email"
              required
              type="email"
              placeholder="you@company.com"
            />
          </label>
        </div>

        <label>
          Service
          <select name="service" defaultValue="">
            <option value="" disabled>
              What can we help with?
            </option>
            <option>Website & hosting</option>
            <option>E-commerce</option>
            <option>SEO / GEO</option>
            <option>Ads / performance</option>
            <option>Technology & operations</option>
            <option>End-to-end solutions</option>
          </select>
        </label>

        <label>
          Message
          <textarea
            name="message"
            required
            placeholder="Where are you now, and where do you want to be?"
            rows={4}
          />
        </label>

        <button className="button" type="submit">
          Book a Strategy Call <ArrowUpRight size={17} />
        </button>

        {error && (
          <p className="form-footnote">
            Something went wrong. Please try again or email us directly.
          </p>
        )}

        <p className="form-footnote">
          No hard sell. Just a useful first conversation.
        </p>
      </>
    )}
  </form>
</section>

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <Brand light />

            <p>
              Just toast,
              <br />
              <strong>and let us host.</strong>
            </p>
          </div>

          <div className="footer-links">
            <div>
              <b>Explore</b>

              <a href="#about">About</a>
              <a href="#services">Services</a>
              <a href="#work">Case Studies</a>
            </div>

            <div>
              <b>Services</b>

              <a href="#services">Websites & Hosting</a>
              <a href="#services">E-commerce</a>
              <a href="#services">SEO & GEO</a>
              <a href="#services">Analytics & Ads</a>
            </div>

            <div>
              <b>Find us</b>

              <span>Gurgoan, Haryana, India</span>

              <a href="tel:+919453777109">+91 94537 77109</a>

              <a href="tel:+919780475201">+91 97804 75201</a>

              <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=partner.breadit@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
>
  partner.breadit@gmail.com
</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 BreadIt4U. All rights reserved.</span>

          {/* <span>Built for founders who are ready to move.</span> */}
        </div>
      </footer>
    </main>
  )
}
