import { useState } from 'react'

function AntibioticCard({ name, category, coverage, indications, adultDose, renalDose, notes }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className={`card ${expanded ? 'expanded' : ''}`} onClick={() => setExpanded(!expanded)}>
      <div className="card-header">
        <h2>{name}</h2>
        <span className="arrow">{expanded ? '▲' : '▼'}</span>
      </div>
      <p>Category: {category}</p>
      <p>Adult dose: {adultDose}</p>

      {expanded && (
        <>
          <p>Coverage: {coverage.join(', ')}</p>
          <p>Indications: {indications.join(', ')}</p>
          <p>Renal dose: {renalDose}</p>
          {notes && <p className="notes">⚠️ {notes}</p>}
        </>
      )}
    </div>
  )
}

export default AntibioticCard