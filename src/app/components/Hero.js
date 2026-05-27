export default function Hero() {
  return (
    <section style={{
      padding: '80px 32px 64px',
      borderBottom: '0.5px solid var(--border)',
    }}>
      <div className="container">
        <p className="mono" style={{
          fontSize: '12px',
          color: 'var(--accent)',
          letterSpacing: '0.1em',
          marginBottom: '16px',
          opacity: 0.8,
        }}>
          // Technology. Leadership. Security. Always learning.
        </p>

        <h1 style={{
          fontSize: '52px',
          fontWeight: 300,
          letterSpacing: '-0.02em',
          lineHeight: 1.1,
          marginBottom: '8px',
        }}>
          Hi, I'm <span style={{ color: 'var(--accent)', fontWeight: 500 }}>Brian</span>.
        </h1>

        <p style={{
          fontSize: '20px',
          fontWeight: 300,
          color: 'var(--text-secondary)',
          marginBottom: '32px',
          lineHeight: 1.5,
        }}>
          I build teams, ship technology, and explore what's next.
        </p>

        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '40px' }}>
          {[
            { label: 'Leader', color: 'var(--accent)' },
            { label: 'Builder', color: 'var(--green)' },
            { label: 'Apprentice', color: '#d29922' },
            { label: 'access_level=learning', color: '#bc8cff' },
          ].map(badge => (
            <span key={badge.label} className="mono" style={{
              fontSize: '11px',
              padding: '4px 10px',
              borderRadius: '4px',
              border: '0.5px solid',
              color: badge.color,
              borderColor: badge.color + '40',
              background: badge.color + '10',
            }}>
              {badge.label}
            </span>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '16px' }}>
          <a href="#contact" style={{
            display: 'inline-block',
            padding: '10px 20px',
            background: 'var(--accent)',
            color: '#0d1117',
            textDecoration: 'none',
            borderRadius: '4px',
            fontSize: '13px',
            fontWeight: 500,
          }}>
            Get in touch
          </a>
          <a href="#projects" style={{
            display: 'inline-block',
            padding: '10px 20px',
            border: '0.5px solid var(--border)',
            color: 'var(--text-secondary)',
            textDecoration: 'none',
            borderRadius: '4px',
            fontSize: '13px',
          }}>
            View projects
          </a>
        </div>
      </div>
    </section>
  )
}