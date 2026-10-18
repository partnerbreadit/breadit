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
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')

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
            {/* <div className="work-art work-art-one">
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
            <div className="work-art work-art-one">
  <span>STRATEGY</span>
  <strong>
    Know the
    <br />
    market.
    <br />
    Then move.
  </strong>
</div> */}

<div>
  <span className="work-tag">Case study</span>
  <h3>Market research &amp; consulting platform setup</h3>
  <p>
    Market research and platform planning for a consulting business, plus
    competitor analysis, product listing optimisation across Amazon,
    Flipkart and Blinkit, and the founder&apos;s personal branding.
  </p>
  <ul className="work-skills">
    <li>Market research</li>
    <li>Competitor analysis</li>
    <li>Consulting platform development</li>
    <li>Business strategy</li>
    <li>Marketplace research</li>
    <li>Personal branding</li>
  </ul>
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

      {/* <section className="capabilities">
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
      </section> */}

    
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
    onSubmit={async (event) => {
      event.preventDefault()

      const form = event.currentTarget
      setSubmitting(true)
      setSubmitError('')

      try {
        const response = await fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: { Accept: 'application/json' },
        })

        const result = await response.json().catch(() => null)

        if (!response.ok) {
          const message = result?.errors
            ?.map((item: { message: string }) => item.message)
            .join(' ')

          throw new Error(
            message || 'Your request could not be sent. Please try again.'
          )
        }

        form.reset()
        setSubmitted(true)
      } catch (error) {
        setSubmitError(
          error instanceof Error
            ? error.message
            : 'A connection error occurred. Please try again.'
        )
      } finally {
        setSubmitting(false)
      }
    }}
  >
    {submitted ? (
      <div className="success">
        <div className="success-icon">
          <Check />
        </div>

        <h3>Perfect. Your request is toasted.</h3>
        <p>We&apos;ll be in touch to talk through what comes next.</p>

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
            <input
              name="name"
              type="text"
              autoComplete="name"
              required
              placeholder="Your name"
            />
          </label>

          <label>
            Email
            <input
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="you@company.com"
            />
          </label>
        </div>

        <div className="form-row">
          <label>
            Company name
            <input
              name="company"
              type="text"
              autoComplete="organization"
              placeholder="Your company"
            />
          </label>

          <label>
            Business stage
            <select name="business_stage" defaultValue="">
              <option value="" disabled>
                Select one
              </option>
              <option value="Idea">Idea</option>
              <option value="Pre-launch">Pre-launch</option>
              <option value="Early-stage">Early-stage</option>
              <option value="Growing">Growing</option>
              <option value="Established">Established</option>
            </select>
          </label>
        </div>

        <label>
          Services interested in
          <select name="services_interested_in" defaultValue="">
            <option value="" disabled>
              What can we help with?
            </option>
            <option value="Website & hosting">Website &amp; hosting</option>
            <option value="E-commerce">E-commerce</option>
            <option value="SEO / GEO">SEO / GEO</option>
            <option value="Ads / performance">Ads / performance</option>
            <option value="Technology & operations">
              Technology &amp; operations
            </option>
            <option value="End-to-end solutions">
              End-to-end solutions
            </option>
          </select>
        </label>

        <label>
          Tell us a little about the requirement
          <textarea
            name="requirement"
            required
            placeholder="Where are you now, and what would a good next stage look like?"
            rows={4}
          />
        </label>

        {submitError && (
          <p className="form-error" role="alert">
            {submitError}
          </p>
        )}

        <button
          className="button"
          type="submit"
          disabled={submitting}
        >
          {submitting ? 'Sending…' : 'Book a Strategy Call'}
          <ArrowUpRight size={17} />
        </button>

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

              <span>Gurugram, Haryana, India</span>

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
