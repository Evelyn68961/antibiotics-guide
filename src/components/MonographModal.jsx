import { useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

function MonographModal({ antibiotic, onClose }) {
  // Close on Escape so the keyboard works like users expect
  useEffect(() => {
    function handleKey(e) {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  if (!antibiotic) return null

  const heading = antibiotic.brandName
    ? `${antibiotic.brandName} (${antibiotic.genericName})`
    : antibiotic.genericName

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        role="dialog"
        aria-modal="true"
        aria-label={`${heading} full monograph`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <h2>{heading}</h2>
          <button className="modal-close" onClick={onClose} aria-label="Close">
            ×
          </button>
        </div>

        <div className="monograph">
          {antibiotic.monograph ? (
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {antibiotic.monograph}
            </ReactMarkdown>
          ) : (
            <p className="monograph-empty">
              No monograph content available yet for this antibiotic.
            </p>
          )}
          {antibiotic.url && (
            <p className="monograph-source">
              <a href={antibiotic.url} target="_blank" rel="noreferrer">
                View in Notion ↗
              </a>
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default MonographModal
