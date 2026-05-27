export default function About() {
  return (
    <section id="about" style={{
      padding: '80px 32px',
      borderBottom: '0.5px solid var(--border)',
    }}>
      <div style={{ maxWidth: '800px' }}>
        <p className="mono" style={{
          fontSize: '12px',
          color: 'var(--accent)',
          letterSpacing: '0.1em',
          marginBottom: '24px',
          opacity: 0.8,
        }}>
          // about
        </p>

        <h2 className="mono" style={{
          fontSize: '32px',
          fontWeight: 400,
          marginBottom: '32px',
          letterSpacing: '0.02em',
          color: 'var(--text-secondary)',
        }}>
          <span style={{ color: 'var(--accent)', marginRight: '8px' }}>$</span>
          whoami
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
            I spent thirteen years at WANdisco - later Cirata - growing from a junior QA engineer into a Director of Engineering, leading teams across the UK, US, Europe, India, and South America.
          </p>
          <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
            That journey wasn't a straight line. I moved through software development, scrum mastering, project management, and engineering management before stepping into the director role. Each step taught me something the last one couldn't.
          </p>
          <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
            What I'm most proud of isn't a product or a metric. It's the teams. Building engineers and managers into a self-organising unit that held itself accountable, cared about quality, and brought a genuine can-do attitude to hard problems - that's the work I'm most satisfied by.
          </p>
          <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
            Now I'm in a new chapter. Hands-on with AI tooling, working through a structured cyber security path, and building Guardian - a security intelligence tool for remote workers. Still leading where I can. Still learning. Always figuring out what's next.
          </p>
        </div>
      </div>
    </section>
  )
}