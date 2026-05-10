import { useMemo, useState } from 'react'
import './App.css'
import AntibioticCard from './components/AntibioticCard'
import MonographModal from './components/MonographModal'
import antibiotics from './data/antibiotics'
import { expand } from './data/abbreviations'

// Collect every unique value from a property (string or string[]) across all
// records, sort it, and return it. Used to build filter dropdowns dynamically
// so adding a new entry in Notion never requires a code change.
function uniqueValues(records, accessor) {
  const set = new Set()
  for (const r of records) {
    const v = accessor(r)
    if (Array.isArray(v)) {
      for (const item of v) {
        if (item) set.add(item)
      }
    } else if (v) {
      set.add(v)
    }
  }
  return Array.from(set).sort((a, b) => a.localeCompare(b))
}

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('')
  const [indicationFilter, setIndicationFilter] = useState('')
  const [coverageFilter, setCoverageFilter] = useState('')
  const [openMonograph, setOpenMonograph] = useState(null)

  const categories = useMemo(
    () => uniqueValues(antibiotics, (r) => r.category),
    [],
  )
  const indications = useMemo(
    () => uniqueValues(antibiotics, (r) => r.indications),
    [],
  )
  const coverages = useMemo(
    () => uniqueValues(antibiotics, (r) => r.coverage),
    [],
  )

  const filtered = antibiotics.filter((abx) => {
    const q = searchQuery.toLowerCase()
    const matchesSearch =
      !q ||
      (abx.genericName || '').toLowerCase().includes(q) ||
      (abx.brandName || '').toLowerCase().includes(q) ||
      (abx.name || '').toLowerCase().includes(q)
    const matchesCategory =
      categoryFilter === '' || abx.category === categoryFilter
    const matchesIndication =
      indicationFilter === '' ||
      (abx.indications || []).includes(indicationFilter)
    const matchesCoverage =
      coverageFilter === '' || (abx.coverage || []).includes(coverageFilter)
    return matchesSearch && matchesCategory && matchesIndication && matchesCoverage
  })

  return (
    <div className="app">
      <h1>Antibiotics Guide</h1>

      <input
        type="text"
        placeholder="Search by brand or generic name…"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <div className="filters">
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <option value="">All Categories</option>
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>

        <select
          value={indicationFilter}
          onChange={(e) => setIndicationFilter(e.target.value)}
        >
          <option value="">All Indications</option>
          {indications.map((i) => (
            <option key={i} value={i}>
              {expand(i)}
            </option>
          ))}
        </select>

        <select
          value={coverageFilter}
          onChange={(e) => setCoverageFilter(e.target.value)}
        >
          <option value="">All Coverage</option>
          {coverages.map((c) => (
            <option key={c} value={c}>
              {expand(c)}
            </option>
          ))}
        </select>

        <span className="result-count">
          {filtered.length} of {antibiotics.length}
        </span>
      </div>

      <div className="cards-grid">
        {filtered.map((abx) => (
          <AntibioticCard
            key={abx.id || abx.name}
            antibiotic={abx}
            onOpenMonograph={setOpenMonograph}
          />
        ))}
      </div>

      {openMonograph && (
        <MonographModal
          antibiotic={openMonograph}
          onClose={() => setOpenMonograph(null)}
        />
      )}
    </div>
  )
}

export default App
