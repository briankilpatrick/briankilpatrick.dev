export default function Experience() {
  const chapters = [
    {
      title: 'The Foundation',
      role: 'QA Engineer',
      period: '2013 - 2014',
      description: "Where it started. I joined WANdisco as a junior QA engineer and quickly found myself taking on more than the job description suggested - including early responsibility managing a remote team in Chennai, India. It set the tone for everything that followed."
    },
    {
      title: 'The Craft',
      role: 'Software Developer',
      period: '2014 - 2018',
      description: "I moved into software development working on Java-based enterprise products, getting deep into build and release processes. I led a remote automation team across South America and later India. This is where I learned how software actually gets made - and how easily it can go wrong."
    },
    {
      title: 'The Pivot',
      role: 'Project Manager / Scrum Master',
      period: '2018 - 2022',
      description: "The role that changed everything. I helped lead the transition from Waterfall to Agile across the organisation, introduced structured delivery practices, and helped shift release cadence from two delayed releases a year to four consistent quarterly deliveries. I found my thing - making teams work better."
    },
    {
      title: 'The Leadership',
      role: 'Engineering Manager',
      period: '2022 - 2024',
      description: "Building and growing people became the job. Recruitment, coaching, career development, performance - and working closely with Product and Testing to improve how we delivered together. This is where I understood what leadership actually means."
    },
    {
      title: 'The Director',
      role: 'Director of Engineering',
      period: '2024 - 2025',
      description: "Leading a global engineering organisation of thirty people across five direct reports and multiple product lines. Accountable for delivery, quality, and performance across distributed teams serving enterprise customers worldwide."
    },
  ]

  return (
    <section id="experience" style={{
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
          // experience
        </p>

        <h2 style={{
          fontSize: '32px',
          fontWeight: 300,
          marginBottom: '16px',
          letterSpacing: '-0.01em',
        }}>
          The journey
        </h2>

        <p className="mono" style={{
          fontSize: '12px',
          color: 'var(--text-secondary)',
          marginBottom: '48px',
        }}>
          WANdisco / Cirata - 2013 to 2025
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {chapters.map((chapter, index) => (
            <div key={chapter.title} style={{
              display: 'flex',
              gap: '24px',
              paddingBottom: '40px',
            }}>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                flexShrink: 0,
              }}>
                <div style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  background: index === 4 ? 'var(--accent)' : 'var(--border)',
                  border: '2px solid',
                  borderColor: index === 4 ? 'var(--accent)' : 'var(--text-secondary)',
                  flexShrink: 0,
                  marginTop: '4px',
                }} />
                {index < 4 && (
                  <div style={{
                    width: '1px',
                    flex: 1,
                    background: 'var(--border)',
                    marginTop: '8px',
                  }} />
                )}
              </div>
              <div style={{ paddingBottom: index < 4 ? '0' : '0' }}>
                <p className="mono" style={{
                  fontSize: '11px',
                  color: 'var(--accent)',
                  marginBottom: '4px',
                  opacity: 0.7,
                }}>
                  {chapter.period}
                </p>
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: 500,
                  marginBottom: '4px',
                }}>
                  {chapter.title}
                </h3>
                <p style={{
                  fontSize: '13px',
                  color: 'var(--text-secondary)',
                  marginBottom: '12px',
                  fontStyle: 'italic',
                }}>
                  {chapter.role}
                </p>
                <p style={{
                  fontSize: '15px',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                }}>
                  {chapter.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '16px' }}>
          <a href="/cv.pdf" className="mono" style={{
            fontSize: '12px',
            color: 'var(--accent)',
            textDecoration: 'none',
          }}>
            download full cv →
          </a>
          <div style={{ marginTop: '48px' }}>
            <p className="mono" style={{
              fontSize: '12px',
              color: 'var(--accent)',
              letterSpacing: '0.1em',
              marginBottom: '24px',
              opacity: 0.8,
            }}>
              // credentials
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                { name: 'PRINCE2 v7 Foundation & Practitioner', year: '2026', status: 'complete' },
                { name: 'Change Management v3 Foundation & Practitioner', year: '2026', status: 'complete' },
                { name: 'CSM - Certified Scrum Master', year: null, status: 'complete' },
                { name: 'AI in Project Management', year: null, status: 'pending', note: 'studied, exam to be scheduled' },
                { name: 'ITIL', year: null, status: 'upcoming', note: 'planned' },
              ].map(cert => (
                <div key={cert.name} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    flexShrink: 0,
                    background: cert.status === 'complete' ? 'var(--green)' :
                                cert.status === 'pending' ? '#d29922' : 'transparent',
                    border: '2px solid',
                    borderColor: cert.status === 'complete' ? 'var(--green)' :
                                 cert.status === 'pending' ? '#d29922' : 'var(--border)',
                  }} />
                  <div>
                    <span style={{
                      fontSize: '14px',
                      color: cert.status === 'upcoming' ? 'var(--text-secondary)' : 'var(--text-primary)',
                      opacity: cert.status === 'upcoming' ? 0.5 : 1,
                    }}>
                      {cert.name}
                    </span>
                    {cert.year && (
                      <span className="mono" style={{ fontSize: '11px', color: 'var(--text-secondary)', marginLeft: '8px', opacity: 0.6 }}>
                        {cert.year}
                      </span>
                    )}
                    {cert.note && (
                      <span className="mono" style={{ fontSize: '11px', color: 'var(--accent)', marginLeft: '8px', opacity: 0.6 }}>
                        // {cert.note}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}