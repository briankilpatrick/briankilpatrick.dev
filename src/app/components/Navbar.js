'use client'
import { useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const linkStyle = {
    fontSize: '12px',
    color: 'var(--text-secondary)',
    textDecoration: 'none',
    letterSpacing: '0.03em',
  }

  const mobileLinkStyle = {
    fontSize: '14px',
    color: 'var(--text-secondary)',
    textDecoration: 'none',
    letterSpacing: '0.03em',
  }

  return (
    <nav style={{
      borderBottom: '0.5px solid var(--border)',
      background: 'var(--bg-primary)',
      position: 'sticky',
      top: 0,
      zIndex: 100,
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '16px 32px',
      }}>
        <a href="#" style={{ textDecoration: 'none' }}>
          <div className="mono" style={{ color: 'var(--accent)', fontSize: '13px', letterSpacing: '0.05em' }}>
            bk@briankilpatrick.dev:~$
            <span style={{
              display: 'inline-block',
              width: '8px',
              height: '14px',
              background: 'var(--accent)',
              verticalAlign: 'middle',
              marginLeft: '4px',
              animation: 'blink 1.2s step-end infinite',
            }} />
          </div>
        </a>

        <div className="desktop-nav" style={{ display: 'flex', gap: '24px' }}>
          <a href="#about" className="mono" style={linkStyle}>./about</a>
          <a href="#experience" className="mono" style={linkStyle}>./experience</a>
          <a href="#projects" className="mono" style={linkStyle}>./projects</a>
          <a href="#cyber" className="mono" style={linkStyle}>./cyber</a>
          <a href="#blog" className="mono" style={linkStyle}>./blog</a>
          <a href="#contact" className="mono" style={linkStyle}>./contact</a>
        </div>

        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '4px',
            display: 'none',
            flexDirection: 'column',
            gap: '5px',
          }}
        >
          <span style={{ display: 'block', width: '22px', height: '1px', background: 'var(--text-secondary)' }} />
          <span style={{ display: 'block', width: '22px', height: '1px', background: 'var(--text-secondary)' }} />
          <span style={{ display: 'block', width: '22px', height: '1px', background: 'var(--text-secondary)' }} />
        </button>
      </div>

      {menuOpen && (
        <div className="mobile-menu" style={{
          display: 'none',
          flexDirection: 'column',
          padding: '16px 32px 24px',
          borderTop: '0.5px solid var(--border)',
          gap: '16px',
        }}>
          <a href="#about" className="mono" onClick={() => setMenuOpen(false)} style={mobileLinkStyle}>./about</a>
          <a href="#experience" className="mono" onClick={() => setMenuOpen(false)} style={mobileLinkStyle}>./experience</a>
          <a href="#projects" className="mono" onClick={() => setMenuOpen(false)} style={mobileLinkStyle}>./projects</a>
          <a href="#cyber" className="mono" onClick={() => setMenuOpen(false)} style={mobileLinkStyle}>./cyber</a>
          <a href="#blog" className="mono" onClick={() => setMenuOpen(false)} style={mobileLinkStyle}>./blog</a>
          <a href="#contact" className="mono" onClick={() => setMenuOpen(false)} style={mobileLinkStyle}>./contact</a>
        </div>
      )}
    </nav>
  )
}