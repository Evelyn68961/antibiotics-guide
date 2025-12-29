import { useState } from 'react'
import './App.css'
import AntibioticCard from './components/AntibioticCard'
import antibiotics from './data/antibiotics'

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('')
  const [indicationFilter, setIndicationFilter] = useState('')
  const [coverageFilter, setCoverageFilter] = useState('')

  const filteredAntibiotics = antibiotics.filter(abx => {
    const matchesSearch = abx.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = categoryFilter === '' || abx.category === categoryFilter
    const matchesIndication = indicationFilter === '' || abx.indications.includes(indicationFilter)
    const matchesCoverage = coverageFilter === '' || abx.coverage.includes(coverageFilter)
    return matchesSearch && matchesCategory && matchesIndication && matchesCoverage
  })

  return (
    <div className="app">
      <h1>Antibiotics Guide</h1>

      <input
        type="text"
        placeholder="Search antibiotics..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <div className="filters">
        <select 
          value={categoryFilter} 
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="Carbapenem">Carbapenem</option>
          <option value="Glycopeptide">Glycopeptide</option>
          <option value="Cephalosporin">Cephalosporin</option>
        </select>

        <select 
          value={indicationFilter} 
          onChange={(e) => setIndicationFilter(e.target.value)}
        >
          <option value="">All Indications</option>
          <option value="UTI">UTI</option>
          <option value="Pneumonia">Pneumonia</option>
          <option value="Bacteremia">Bacteremia</option>
          <option value="SSTI">SSTI</option>
          <option value="IAI">IAI</option>
          <option value="Meningitis">Meningitis</option>
          <option value="Endocarditis">Endocarditis</option>
        </select>

        <select 
          value={coverageFilter} 
          onChange={(e) => setCoverageFilter(e.target.value)}
        >
          <option value="">All Coverage</option>
          <option value="MSSA">MSSA</option>
          <option value="MRSA">MRSA</option>
          <option value="Pseudomonas">Pseudomonas</option>
          <option value="E.coli">E.coli</option>
          <option value="Klebsiella">Klebsiella</option>
          <option value="Streptococcus">Streptococcus</option>
          <option value="Enterococcus">Enterococcus</option>
        </select>
      </div>

      <div className="cards-grid">
        {filteredAntibiotics.map(abx => (
          <AntibioticCard
            key={abx.id}
            name={abx.name}
            category={abx.category}
            coverage={abx.coverage}
            indications={abx.indications}
            adultDose={abx.adultDose}
            renalDose={abx.renalDose}
            notes={abx.notes}
          />
        ))}
      </div>
    </div>
  )
}

export default App
