export default function Footer() {
  return (
    <footer style={{
      padding: '24px 32px',
      borderTop: '0.5px solid var(--border)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span style={{
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          background: 'var(--green)',
          display: 'inline-block',
          animation: 'pulse 2s ease-in-out infinite',
        }} />
        <span className="mono" style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>
          open to opportunities
        </span>
      </div>

      <div style={{ display: 'flex', gap: '24px' }}>
        <a href="https://github.com/briankilpatrick" target="_blank" rel="noopener noreferrer" className="mono" style={{ fontSize: '11px', color: 'var(--text-secondary)', textDecoration: 'none' }}>github</a>
        <a href="https://www.linkedin.com/in/brian-kilpatrick-05a0a587/" target="_blank" rel="noopener noreferrer" className="mono" style={{ fontSize: '11px', color: 'var(--text-secondary)', textDecoration: 'none' }}>linkedin</a>
        <a href="/cv.pdf" className="mono" style={{ fontSize: '11px', color: 'var(--text-secondary)', textDecoration: 'none' }}>./cv.pdf</a>
      </div>
    </footer>
  )
}