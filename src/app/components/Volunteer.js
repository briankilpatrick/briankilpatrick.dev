export default function Volunteer() {
  return (
    <section id="volunteering" style={{
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
          // volunteering
        </p>

        <h2 style={{
          fontSize: '32px',
          fontWeight: 300,
          marginBottom: '48px',
          letterSpacing: '-0.01em',
        }}>
          Giving back
        </h2>

        <div style={{
          background: 'var(--bg-secondary)',
          border: '0.5px solid var(--border)',
          borderRadius: '8px',
          padding: '28px',
        }}>
          <p className="mono" style={{
            fontSize: '11px',
            color: 'var(--accent)',
            marginBottom: '8px',
            opacity: 0.7,
          }}>
            // active
          </p>
          <h3 style={{ fontSize: '20px', fontWeight: 500, marginBottom: '4px' }}>
            Safer Waters
          </h3>
          <p style={{
            fontSize: '13px',
            color: 'var(--accent)',
            marginBottom: '16px',
            fontStyle: 'italic',
          }}>
            Safety Boat Crew - Bangor, Northern Ireland
          </p>
            <p style={{
            fontSize: '14px',
            color: 'var(--text-secondary)',
            lineHeight: 1.7,
          }}>
            Safer Waters is a Bangor-based charity dedicated to safety support and training for water users across Northern Ireland. Founded in 2020, they provide a voluntary safety boat service for community water-based events - regattas, open water swims, kayaking, paddle boarding and more - filling the gap between informal self-help and calling out the emergency services. They also operate as an RYA recognised training centre. I'm proud to be part of the crew.
          </p>
        </div>
      </div>
    </section>
  )
}