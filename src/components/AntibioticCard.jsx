import { useState } from 'react'
import { expand } from '../data/abbreviations'

// Render a comma-separated list of "tag pills" — each one shows the short
// label and uses the expanded label as a tooltip, matching what the user
// has in Notion while still being readable.
function TagList({ items, className = '' }) {
  if (!items || items.length === 0) return <span className="empty">—</span>
  return (
    <span className={`tags ${className}`}>
      {items.map((item) => (
        <span key={item} className="tag" title={expand(item)}>
          {item}
        </span>
      ))}
    </span>
  )
}

// One field row inside the expanded card. Hidden if the value is empty.
function Field({ label, value, multiline = false }) {
  if (!value || value === '') return null
  return (
    <div className="field">
      <span className="field-label">{label}</span>
      <span
        className={`field-value ${multiline ? 'multiline' : ''}`}
        // Notion stores line breaks as <br>; render them as newlines
        dangerouslySetInnerHTML={{
          __html: String(value).replace(/<br\s*\/?>/gi, '\n'),
        }}
      />
    </div>
  )
}

function AntibioticCard({ antibiotic, onOpenMonograph }) {
  const [expanded, setExpanded] = useState(false)

  const {
    brandName,
    genericName,
    category,
    coverage,
    indications,
    adultDose,
    pediatricDose,
    renalDose,
    hepaticDose,
    pregnancy,
    breastfeeding,
    mechanism,
    drugInteractions,
    sideEffects,
    monitor,
    notes,
    monograph,
  } = antibiotic

  const heading = brandName ? (
    <>
      <span className="brand">{brandName}</span>{' '}
      <span className="generic">({genericName})</span>
    </>
  ) : (
    <span className="brand">{genericName}</span>
  )

  return (
    <div
      className={`card ${expanded ? 'expanded' : ''}`}
      onClick={() => setExpanded(!expanded)}
    >
      <div className="card-header">
        <h2>{heading}</h2>
        <span className="arrow">{expanded ? '▲' : '▼'}</span>
      </div>

      {category && <p className="category">{category}</p>}
      {adultDose && (
        <Field label="Adult dose" value={adultDose} multiline />
      )}

      {expanded && (
        <div className="card-body">
          <div className="field">
            <span className="field-label">Coverage</span>
            <TagList items={coverage} className="coverage" />
          </div>

          <div className="field">
            <span className="field-label">Indications</span>
            <TagList items={indications} className="indications" />
          </div>

          <Field label="Pediatric dose" value={pediatricDose} multiline />
          <Field label="Renal / HD / CRRT" value={renalDose} multiline />
          <Field label="Hepatic dose" value={hepaticDose} multiline />
          <Field label="Mechanism" value={mechanism} multiline />
          <Field label="Drug interactions" value={drugInteractions} multiline />
          <Field label="Pregnancy" value={pregnancy} multiline />
          <Field label="Breastfeeding" value={breastfeeding} multiline />

          {sideEffects && sideEffects.length > 0 && (
            <div className="field">
              <span className="field-label">Side effects</span>
              <TagList items={sideEffects} className="side-effects" />
            </div>
          )}

          {monitor && monitor.length > 0 && (
            <div className="field">
              <span className="field-label">Monitor</span>
              <TagList items={monitor} className="monitor" />
            </div>
          )}

          {notes && (
            <p
              className="notes"
              dangerouslySetInnerHTML={{
                __html: '⚠️ ' + String(notes).replace(/<br\s*\/?>/gi, '<br/>'),
              }}
            />
          )}

          {monograph && (
            <button
              className="monograph-button"
              onClick={(e) => {
                e.stopPropagation()
                onOpenMonograph(antibiotic)
              }}
            >
              View full monograph →
            </button>
          )}
        </div>
      )}
    </div>
  )
}

export default AntibioticCard
