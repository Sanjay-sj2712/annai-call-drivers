'use client';

import * as React from 'react';

const LOGO_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCA_GGlu3cLwR2FHDw_T9tMdbveVky84EqFYPfzaTHqjcwhMLatqYl8vkL1lQ0cxFK9Cnh_ibOFmNOfBUMtEhe7Z08yj-4hflVlL5rDfJcVMWLUfuKi_YuvKKi-oKNqr13w_oj8yW3MU6mfjSXZa5Hw3tfr2AGvc5O7YUsiciLaAwcAxd9Jq243B9syQiAZbRrSXmqofrE1wKOd-ojoS1tUfHbfT3kScr3kVTkvm362O4wru7HX0TbnJlL4X2BcJ1Qv2BkwE4oHwnPY';

const PHONE_DISPLAY = '+91 94444 82386';
const PHONE_TEL = 'tel:+919444482386';

export default function SuspensionNotice() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Oswald:wght@600;700&display=swap');

        *, *::before, *::after {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        .sn-root {
          min-height: 100vh;
          background-color: #0a0a0a;
          color: #ffffff;
          font-family: 'Inter', sans-serif;
          overflow-x: hidden;
        }

        /* Ticker */
        .sn-ticker {
          background: #b91c1c;
          border-bottom: 2px solid #ef4444;
          overflow: hidden;
          white-space: nowrap;
          padding: 10px 0;
          position: relative;
          z-index: 50;
        }
        .sn-ticker-inner {
          display: inline-flex;
          gap: 0;
          animation: ticker-scroll 28s linear infinite;
          will-change: transform;
        }
        .sn-ticker-text {
          display: inline-block;
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #ffffff;
          padding-right: 80px;
        }
        @keyframes ticker-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        /* Hero */
        .sn-hero {
          min-height: calc(100vh - 44px);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 60px 24px 40px;
          text-align: center;
          position: relative;
        }
        .sn-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 70% 60% at 50% 40%, rgba(185,28,28,0.13) 0%, transparent 70%);
          pointer-events: none;
          animation: pulse-glow 3.5s ease-in-out infinite alternate;
        }
        @keyframes pulse-glow {
          from { opacity: 0.6; }
          to   { opacity: 1; }
        }

        /* Logo */
        .sn-logo-wrap { position: relative; margin-bottom: 36px; }
        .sn-logo-ring {
          width: 168px;
          height: 168px;
          border-radius: 50%;
          border: 3px solid #ef4444;
          padding: 6px;
          animation: ring-pulse 2.5s ease-in-out infinite;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(185,28,28,0.08);
        }
        @keyframes ring-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(239,68,68,0.6); }
          50%       { box-shadow: 0 0 0 14px rgba(239,68,68,0); }
        }
        .sn-logo-img {
          width: 148px;
          height: 148px;
          border-radius: 50%;
          object-fit: cover;
          display: block;
        }

        /* Badge */
        .sn-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(185,28,28,0.25);
          border: 1px solid #ef4444;
          border-radius: 4px;
          padding: 6px 18px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #fca5a5;
          margin-bottom: 24px;
        }

        /* Headings */
        .sn-heading-suspended {
          font-family: 'Oswald', 'Inter', sans-serif;
          font-size: clamp(42px, 9vw, 96px);
          font-weight: 700;
          letter-spacing: -0.01em;
          line-height: 1;
          color: #ef4444;
          text-shadow: 0 0 40px rgba(239,68,68,0.4);
          margin-bottom: 16px;
          animation: flicker 5s ease-in-out infinite;
        }
        @keyframes flicker {
          0%, 93%, 95%, 97%, 100% { opacity: 1; }
          94%, 96%                { opacity: 0.85; }
        }
        .sn-heading-dispute {
          font-family: 'Oswald', 'Inter', sans-serif;
          font-size: clamp(16px, 3.5vw, 30px);
          font-weight: 600;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #9ca3af;
          margin-bottom: 48px;
        }

        /* Divider */
        .sn-divider {
          width: 100%;
          max-width: 600px;
          height: 1px;
          background: linear-gradient(90deg, transparent, #ef4444, transparent);
          margin: 0 auto 48px;
        }

        /* Notice Card */
        .sn-notice-card {
          max-width: 720px;
          width: 100%;
          background: rgba(20, 18, 18, 0.85);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(239,68,68,0.35);
          border-radius: 8px;
          padding: 40px;
          margin-bottom: 48px;
          position: relative;
          overflow: hidden;
        }
        .sn-notice-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #b91c1c, #ef4444, #b91c1c);
        }
        .sn-notice-label {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #ef4444;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }
        .sn-notice-label::before,
        .sn-notice-label::after {
          content: '';
          flex: 1;
          height: 1px;
          background: rgba(239,68,68,0.3);
          max-width: 60px;
        }
        .sn-notice-text {
          font-size: clamp(15px, 2vw, 18px);
          font-weight: 500;
          line-height: 1.75;
          color: #e5e7eb;
          margin-bottom: 20px;
        }
        .sn-notice-text-sub {
          font-size: clamp(13px, 1.6vw, 15px);
          font-weight: 400;
          line-height: 1.7;
          color: #9ca3af;
        }

        /* Contact Section */
        .sn-contact {
          background: rgba(14, 12, 12, 0.95);
          border-top: 2px solid rgba(239,68,68,0.4);
          border-bottom: 2px solid rgba(239,68,68,0.4);
          padding: 64px 24px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .sn-contact::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 60% 80% at 50% 50%, rgba(185,28,28,0.1) 0%, transparent 70%);
          pointer-events: none;
        }
        .sn-contact-inner {
          max-width: 800px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }
        .sn-contact-label {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #9ca3af;
          margin-bottom: 12px;
        }
        .sn-contact-heading {
          font-size: clamp(13px, 2vw, 17px);
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #d1d5db;
          margin-bottom: 28px;
        }
        .sn-phone {
          display: block;
          font-family: 'Oswald', 'Inter', sans-serif;
          font-size: clamp(44px, 10vw, 96px);
          font-weight: 700;
          letter-spacing: 0.02em;
          line-height: 1;
          color: #ffffff;
          text-decoration: none;
          text-shadow: 0 2px 24px rgba(255,255,255,0.12);
          transition: color 0.2s ease, text-shadow 0.2s ease;
          margin-bottom: 36px;
        }
        .sn-phone:hover {
          color: #ef4444;
          text-shadow: 0 0 40px rgba(239,68,68,0.5);
        }
        .sn-call-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          background: #b91c1c;
          color: #ffffff;
          text-decoration: none;
          font-size: clamp(14px, 2vw, 16px);
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          padding: 20px 56px;
          border-radius: 4px;
          border: 2px solid #ef4444;
          min-height: 60px;
          cursor: pointer;
          transition: background 0.2s ease, box-shadow 0.2s ease, transform 0.15s ease;
        }
        .sn-call-btn:hover {
          background: #ef4444;
          box-shadow: 0 0 24px rgba(239,68,68,0.55);
          transform: translateY(-2px);
        }
        .sn-call-btn:active { transform: translateY(0); }

        /* Footer */
        .sn-footer {
          background: #0a0a0a;
          border-top: 1px solid rgba(255,255,255,0.06);
          padding: 28px 24px;
          text-align: center;
        }
        .sn-footer-logo-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-bottom: 12px;
        }
        .sn-footer-logo-img {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          object-fit: cover;
          border: 1px solid rgba(239,68,68,0.4);
        }
        .sn-footer-brand {
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #6b7280;
        }
        .sn-footer-copy {
          font-size: 11px;
          letter-spacing: 0.1em;
          color: #374151;
          text-transform: uppercase;
        }

        /* Tamil sub-text */
        .sn-tamil {
          display: block;
          font-size: 0.78em;
          font-weight: 400;
          letter-spacing: 0.02em;
          color: inherit;
          opacity: 0.7;
          margin-top: 4px;
          line-height: 1.5;
        }
        .sn-tamil-sm {
          display: block;
          font-size: 0.72em;
          opacity: 0.65;
          margin-top: 3px;
          line-height: 1.5;
        }

        /* Mobile */
        @media (max-width: 600px) {
          .sn-logo-ring { width: 130px; height: 130px; }
          .sn-logo-img  { width: 112px; height: 112px; }
          .sn-notice-card { padding: 28px 20px; }
          .sn-call-btn {
            width: 100%;
            max-width: 400px;
          }
        }
      `}</style>

      <div className="sn-root">

        {/* Ticker Banner */}
        <div className="sn-ticker" aria-label="Website Suspension Notice">
          <div className="sn-ticker-inner">
            {[...Array(2)].map((_, i) => (
              <span key={i} className="sn-ticker-text">
                {'\u26A0\u00A0\u00A0'}WEBSITE CURRENTLY SUSPENDED{'\u00A0'}—{'\u00A0'}PAYMENT DISPUTE PENDING{'\u00A0\u00A0\u26A0\u00A0\u00A0\u00A0\u00A0'}
                {'\u26A0\u00A0\u00A0'}WEBSITE CURRENTLY SUSPENDED{'\u00A0'}—{'\u00A0'}PAYMENT DISPUTE PENDING{'\u00A0\u00A0\u26A0\u00A0\u00A0\u00A0\u00A0'}
                {'\u26A0\u00A0\u00A0'}WEBSITE CURRENTLY SUSPENDED{'\u00A0'}—{'\u00A0'}PAYMENT DISPUTE PENDING{'\u00A0\u00A0\u26A0\u00A0\u00A0\u00A0\u00A0'}
              </span>
            ))}
          </div>
        </div>

        {/* Hero */}
        <section className="sn-hero">
          <div className="sn-logo-wrap">
            <div className="sn-logo-ring">
              <img src={LOGO_URL} alt="Annai Call Drivers Logo" className="sn-logo-img" />
            </div>
          </div>

          <div className="sn-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            Service Unavailable
            <span className="sn-tamil" style={{textTransform:'none'}}>சேவை நிறுத்தப்பட்டுள்ளது</span>
          </div>

          <h1 className="sn-heading-suspended">
            &#9888; FRAUD ALERT
            <span className="sn-tamil" style={{fontSize:'0.38em', letterSpacing:'0.05em', display:'block', marginTop:'8px'}}>மோசடி எச்சரிக்கை</span>
          </h1>
          <p className="sn-heading-dispute">
            ANNAI CALL DRIVERS
            <span className="sn-tamil" style={{fontSize:'0.6em', letterSpacing:'0.05em', display:'block', marginTop:'4px', color:'#6b7280'}}>அன்னை கால் டிரைவர்ஸ்</span>
          </p>

          <div className="sn-divider" role="separator" />

          <div className="sn-notice-card" role="alert">
            <p className="sn-notice-label">
              Official Notice
              <span className="sn-tamil" style={{display:'inline', marginLeft:'8px', fontSize:'0.85em'}}>— அதிகாரப்பூர்வ அறிவிப்பு</span>
            </p>
            <p className="sn-notice-text">
              Please avoid using Annai Call Drivers <br />for cab, call-driver or wallet-parking services.
              <span className="sn-tamil">
                கேப், கால்-டிரைவர் அல்லது வாலட் பார்க்கிங் சேவைகளுக்கு<br />
                அன்னை கால் டிரைவர்களை பயன்படுத்துவதை தவிர்க்கவும்.
              </span>
            </p>
            <p className="sn-notice-text-sub">
              We experienced a serious payment-related dispute in our dealings with them. We are sharing this notice so that others can be aware and exercise caution before making payments or using their services.
              <span className="sn-tamil">
                அவர்களுடனான எங்கள் பரிவர்த்தனையில் கட்டண சம்பந்தமான தகராறு ஏற்பட்டது.
                மற்றவர்கள் விழிப்புடன் இருக்கவும், கட்டணம் செலுத்துவதற்கு அல்லது சேவையை
                பயன்படுத்துவதற்கு முன்பு எச்சரிக்கையாக இருக்கவும் இந்த அறிவிப்பை பகிர்கிறோம்.
              </span>
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="sn-contact" id="contact">
          <div className="sn-contact-inner">
            <p className="sn-contact-heading">
              This is the contact of this person
              <span className="sn-tamil" style={{display:'block', fontSize:'0.75em', marginTop:'6px', color:'#9ca3af', letterSpacing:'0.05em'}}>இவரின் தொடர்பு விவரம்</span>
            </p>

            <a href={PHONE_TEL} className="sn-phone" aria-label={`Call ${PHONE_DISPLAY}`}>
              {PHONE_DISPLAY}
            </a>

            <a href={PHONE_TEL} className="sn-call-btn" id="call-now-btn" aria-label="Call now to discuss this notice">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.59a16 16 0 0 0 5.5 5.5l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span style={{display:'flex', flexDirection:'column', alignItems:'center', gap:'2px'}}>
                <span>CALL NOW</span>
                <span style={{fontSize:'0.65em', fontWeight:400, letterSpacing:'0.05em', opacity:0.85}}>இப்போது அழைக்கவும்</span>
              </span>
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="sn-footer">
          <div className="sn-footer-logo-row">
            <img src={LOGO_URL} alt="Annai Call Drivers Logo" className="sn-footer-logo-img" />
            <span className="sn-footer-brand">ANNAI CALL DRIVERS</span>
          </div>
          <p className="sn-footer-copy">
            &copy; 2024 Annai Call Drivers &amp; Valet Services. All Rights Reserved.
            <span className="sn-tamil-sm" style={{marginTop:'4px', color:'#374151'}}>© 2024 அன்னை கால் டிரைவர்ஸ் &amp; வாலட் சர்வீசஸ். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.</span>
          </p>
        </footer>

      </div>
    </>
  );
}
