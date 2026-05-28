export default function Projects() {
  const projects = [
    {
      tag: '// active build',
      title: 'Guardian',
      subtitle: 'Environmental Security Intelligence',
      description: "The office has locks on the doors, controlled access, locked down WiFi, firewalls, and protected repositories. Your home has none of that. Most people now work from home, a coffee shop, or a hotel room without giving it a second thought. But your home network might have a dozen other devices on it - laptops, phones, smart TVs, doorbells, children's tablets, smart watches. Your device might be fine, but if it trusts another device on the same network that isn't, you're exposed. Guardian uses AI to monitor your network context and give you a heads-up before you're compromised too far. I've seen it happen - it's more common than people think.",
      status: 'In development',
      statusColor: '#d29922',
      badges: ['AI', 'Cyber Security', 'Python'],
    },
    {
      tag: '// active build',
      title: 'Enterprise Knowledge Assistant',
      subtitle: 'Private LLM - Document Intelligence & Conversational AI',
      description: "Most enterprise knowledge is locked away in documentation, codebases, training materials, and white papers that nobody can find when they need it. This project explores what happens when you give that content to a private, locally hosted LLM and let people ask it questions. Three use cases drive it: 1) customers getting instant accurate answers without waiting for support, 2) staff onboarding and training through conversation rather than manuals, and 3) support teams resolving issues faster with an AI that actually knows the product. The questions people ask are as valuable as the answers - every interaction is a signal about what's missing, unclear, or undocumented, feeding into product roadmaps, sales pipelines, training materials and better customer interactions.",
      status: 'In development',
      statusColor: '#d29922',
      badges: ['Python', 'Local LLM', 'RAG', 'Private AI'],
    },
    {
      tag: '// this site',
      title: 'briankilpatrick.dev',
      subtitle: 'Personal site and project hub',
      description: "Building projects keeps you sharp. It's been a while since I had reason to look at modern hosting, current frameworks, or what GenAI-assisted development actually feels like in practice. This site gave me all of that - a reason to get hands-on with a modern stack, iterate over something until it felt right, and end up with something useful. It hosts my projects, tracks my progression, and reminded me that building things is still something I enjoy.",
      status: 'Live',
      statusColor: 'var(--green)',
      badges: ['Next.js', 'Vercel', 'JavaScript'],
    },
    {
      tag: '// in progress',
      title: 'Holiday Rental Platform',
      subtitle: 'Full-stack booking platform - AWS',
      description: "A deliberately different stack to everything else I'm building. The goal is a fully functional holiday rental site - calendar, booking logic, payments, photo-heavy design - but the real purpose is learning cloud infrastructure properly. AWS for hosting and storage, Lambda for booking logic, a real database - likely Postgres, Stripe for payments. Different framework, different backend, different hosting. By the end it's a genuine breadth of experience across stacks, clouds, and real-world engineering challenges.",
      status: 'In progress / planning',
      statusColor: '#d29922',
      badges: ['AWS', 'React', 'Node.js', 'Stripe'],
    },
  ]

  return (
    <section id="projects" style={{
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
          // projects
        </p>

        <h2 style={{
          fontSize: '32px',
          fontWeight: 300,
          marginBottom: '48px',
          letterSpacing: '-0.01em',
        }}>
          What I'm building
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {projects.map(project => (
            <div key={project.title} style={{
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
                {project.tag}
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '4px' }}>
                <h3 style={{ fontSize: '20px', fontWeight: 500 }}>{project.title}</h3>
                <span className="mono" style={{
                  fontSize: '11px',
                  padding: '3px 8px',
                  borderRadius: '4px',
                  color: project.statusColor,
                  border: '0.5px solid',
                  borderColor: project.statusColor,
                  background: project.statusColor + '15',
                }}>
                  {project.status}
                </span>
              </div>
              <p style={{
                fontSize: '13px',
                color: 'var(--accent)',
                marginBottom: '16px',
                fontStyle: 'italic',
              }}>
                {project.subtitle}
              </p>
              <p style={{
                fontSize: '14px',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                marginBottom: '20px',
              }}>
                {project.description}
              </p>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {project.badges.map(badge => (
                  <span key={badge} className="mono" style={{
                    fontSize: '11px',
                    padding: '3px 8px',
                    borderRadius: '4px',
                    color: 'var(--text-secondary)',
                    border: '0.5px solid var(--border)',
                    background: 'var(--bg-tertiary)',
                  }}>
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}