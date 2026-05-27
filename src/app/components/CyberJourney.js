export default function CyberJourney() {
  const milestones = [
    {
      code: 'SEC0',
      label: 'Security Fundamentals',
      provider: 'TryHackMe',
      status: 'active',
      note: 'Almost complete',
    },
    {
      code: 'SEC1',
      label: 'Security Level 1',
      provider: 'TryHackMe',
      status: 'upcoming',
      note: 'Next',
    },
    {
      code: 'SAL1',
      label: 'Security Analyst Level 1',
      provider: 'TryHackMe',
      status: 'locked',
      note: null,
    },
    {
      code: 'SAL2',
      label: 'Security Analyst Level 2',
      provider: 'TryHackMe',
      status: 'locked',
      note: null,
    },
    {
      code: 'CISM',
      label: 'Certified Information Security Manager',
      provider: 'ISACA',
      status: 'locked',
      note: null,
    },
    {
      code: 'CISSP',
      label: 'Certified Information Systems Security Professional',
      provider: 'ISC2',
      status: 'locked',
      note: null,
    },
  ]

  const getStatusColor = (status) => {
    if (status === 'active') return 'var(--accent)'
    if (status === 'upcoming') return '#d29922'
    return 'var(--border)'
  }

  const getStatusLabel = (status) => {
    if (status === 'active') return 'in progress'
    if (status === 'upcoming') return 'next'
    return 'locked'
  }

  return (
    <section id="cyber" style={{
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
          // side quest: cyber security
        </p>

        <h2 style={{
          fontSize: '32px',
          fontWeight: 300,
          marginBottom: '16px',
          letterSpacing: '-0.01em',
        }}>
          The learning path
        </h2>

        <p style={{
          fontSize: '16px',
          color: 'var(--text-secondary)',
          lineHeight: 1.8,
          marginBottom: '48px',
          maxWidth: '600px',
        }}>
          A structured path from security fundamentals through to professional certification. Currently working through TryHackMe with CISM and CISSP as the long-term goal.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {milestones.map((milestone, index) => (
            <div key={milestone.code} style={{
              display: 'flex',
              gap: '24px',
              paddingBottom: index < milestones.length - 1 ? '32px' : '0',
            }}>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                flexShrink: 0,
              }}>
                <div style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  background: milestone.status === 'active' ? 'var(--accent)' : 'transparent',
                  border: '2px solid',
                  borderColor: getStatusColor(milestone.status),
                  flexShrink: 0,
                  marginTop: '4px',
                  animation: milestone.status === 'active' ? 'pulse 2s ease-in-out infinite' : 'none',
                }} />
                {index < milestones.length - 1 && (
                  <div style={{
                    width: '1px',
                    flex: 1,
                    background: milestone.status === 'locked' ? 'var(--border)' : 'var(--accent)',
                    marginTop: '8px',
                    opacity: milestone.status === 'locked' ? 0.3 : 0.5,
                  }} />
                )}
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '4px' }}>
                  <h3 className="mono" style={{
                    fontSize: '16px',
                    fontWeight: 500,
                    color: milestone.status === 'locked' ? 'var(--text-secondary)' : 'var(--text-primary)',
                    opacity: milestone.status === 'locked' ? 0.5 : 1,
                  }}>
                    {milestone.code}
                  </h3>
                  <span className="mono" style={{
                    fontSize: '10px',
                    padding: '2px 6px',
                    borderRadius: '4px',
                    color: getStatusColor(milestone.status),
                    border: '0.5px solid',
                    borderColor: getStatusColor(milestone.status),
                    background: getStatusColor(milestone.status) + '15',
                    opacity: milestone.status === 'locked' ? 0.4 : 1,
                  }}>
                    {getStatusLabel(milestone.status)}
                  </span>
                  {milestone.note && (
                    <span className="mono" style={{
                      fontSize: '10px',
                      color: 'var(--accent)',
                      opacity: 0.7,
                    }}>
                      // {milestone.note}
                    </span>
                  )}
                </div>
                <p style={{
                  fontSize: '13px',
                  color: 'var(--text-secondary)',
                  marginBottom: '2px',
                  opacity: milestone.status === 'locked' ? 0.5 : 1,
                }}>
                  {milestone.label}
                </p>
                <p className="mono" style={{
                  fontSize: '11px',
                  color: 'var(--text-secondary)',
                  opacity: milestone.status === 'locked' ? 0.3 : 0.6,
                }}>
                  {milestone.provider}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}