export default function Navbar() {
  return (
    <nav style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '16px 32px',
      borderBottom: '0.5px solid var(--border)',
      background: 'var(--bg-primary)',
      position: 'sticky',
      top: 0,
      zIndex: 100,
    }}>
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
      <div style={{ display: 'flex', gap: '24px' }}>
        {['about', 'experience', 'projects', 'cyber', 'blog', 'contact'].map(item => (
          <a
            key={item}
            href={"#" + item}
            className="mono"
            style={{
              fontSize: '12px',
              color: 'var(--text-secondary)',
              textDecoration: 'none',
              letterSpacing: '0.03em',
            }}
          >
            ./{item}
          </a>
        ))}
      </div>
    </nav>
  )
}