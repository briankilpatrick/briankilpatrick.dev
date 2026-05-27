export default function Contact() {
  return (
    <section id="contact" style={{
      padding: '80px 32px',
      borderBottom: '0.5px solid var(--border)',
    }}>
      <div className="container">
        <p className="mono" style={{
          fontSize: '12px',
          color: 'var(--accent)',
          letterSpacing: '0.1em',
          marginBottom: '24px',
          opacity: 0.8,
        }}>
          // contact
        </p>

        <h2 style={{
          fontSize: '32px',
          fontWeight: 300,
          marginBottom: '16px',
          letterSpacing: '-0.01em',
        }}>
          Get in touch
        </h2>

        <p style={{
          fontSize: '16px',
          color: 'var(--text-secondary)',
          lineHeight: 1.8,
          marginBottom: '48px',
          maxWidth: '600px',
        }}>
          Whether you're looking for an experienced engineering leader, want to collaborate on something interesting, or just want to connect - I'd love to hear from you.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <a href="mailto:hello@briankilpatrick.dev" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '16px 20px',
            background: 'var(--bg-secondary)',
            border: '0.5px solid var(--border)',
            borderRadius: '8px',
            textDecoration: 'none',
            color: 'var(--text-primary)',
            fontSize: '14px',
            maxWidth: '400px',
          }}>
            <span className="mono" style={{ color: 'var(--accent)', fontSize: '12px', minWidth: '80px' }}>// email</span>
            hello@briankilpatrick.dev
          </a>

          <a href="https://linkedin.com/in/briankilpatrick" target="_blank" rel="noopener noreferrer" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '16px 20px',
            background: 'var(--bg-secondary)',
            border: '0.5px solid var(--border)',
            borderRadius: '8px',
            textDecoration: 'none',
            color: 'var(--text-primary)',
            fontSize: '14px',
            maxWidth: '400px',
          }}>
            <span className="mono" style={{ color: 'var(--accent)', fontSize: '12px', minWidth: '80px' }}>// linkedin</span>
            Brian Kilpatrick
          </a>

          <a href="https://github.com/briankilpatrick" target="_blank" rel="noopener noreferrer" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '16px 20px',
            background: 'var(--bg-secondary)',
            border: '0.5px solid var(--border)',
            borderRadius: '8px',
            textDecoration: 'none',
            color: 'var(--text-primary)',
            fontSize: '14px',
            maxWidth: '400px',
          }}>
            <span className="mono" style={{ color: 'var(--accent)', fontSize: '12px', minWidth: '80px' }}>// github</span>
            briankilpatrick
          </a>

          <a href="/cv.pdf" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '16px 20px',
            background: 'var(--bg-secondary)',
            border: '0.5px solid var(--border)',
            borderRadius: '8px',
            textDecoration: 'none',
            color: 'var(--text-primary)',
            fontSize: '14px',
            maxWidth: '400px',
          }}>
            <span className="mono" style={{ color: 'var(--accent)', fontSize: '12px', minWidth: '80px' }}>// cv</span>
            Download CV
          </a>
        </div>
      </div>
    </section>
  )
}