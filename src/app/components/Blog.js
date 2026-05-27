export default function Blog() {
  return (
    <section id="blog" style={{
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
          // blog
        </p>

        <h2 style={{
          fontSize: '32px',
          fontWeight: 300,
          marginBottom: '16px',
          letterSpacing: '-0.01em',
        }}>
          From the field
        </h2>

        <p style={{
          fontSize: '16px',
          color: 'var(--text-secondary)',
          lineHeight: 1.8,
          marginBottom: '48px',
          maxWidth: '600px',
        }}>
          I'll be using this space to share thoughts on engineering leadership, AI, cyber security, delivery, and the technology challenges shaping modern organisations. Some posts will be technical, some strategic, and some simply lessons learned along the way.
        </p>

        <div style={{
          background: 'var(--bg-secondary)',
          border: '0.5px solid var(--border)',
          borderRadius: '8px',
          padding: '32px',
          textAlign: 'center',
        }}>
          <p className="mono" style={{
            fontSize: '13px',
            color: 'var(--text-secondary)',
            marginBottom: '8px',
          }}>
            // no posts yet
          </p>
          <p style={{
            fontSize: '14px',
            color: 'var(--text-secondary)',
            opacity: 0.6,
          }}>
            First post coming soon.
          </p>
        </div>
      </div>
    </section>
  )
}