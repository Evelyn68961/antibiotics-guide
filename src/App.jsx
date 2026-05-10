import { useMemo, useState } from 'react'
import './App.css'
import AntibioticBottle from './components/AntibioticBottle'
import AntibioticDetail from './components/AntibioticDetail'
import LanguageToggle from './components/LanguageToggle'
import { Cobwebs, HangingClutter, Atmosphere, CurioFor } from './components/CupboardDecor'
import antibiotics from './data/antibiotics'
import { expand } from './data/abbreviations'
import { useLanguage } from './i18n/LanguageContext'

function uniqueValues(records, accessor) {
  const set = new Set()
  for (const r of records) {
    const v = accessor(r)
    if (Array.isArray(v)) v.forEach((x) => x && set.add(x))
    else if (v) set.add(v)
  }
  return [...set].sort((a, b) => a.localeCompare(b))
}

function intoShelves(items, perShelf) {
  const shelves = []
  for (let i = 0; i < items.length; i += perShelf) {
    shelves.push(items.slice(i, i + perShelf))
  }
  return shelves
}

function App() {
  const { lang, t, tf } = useLanguage()
  const [searchQuery, setSearchQuery] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('')
  const [indicationFilter, setIndicationFilter] = useState('')
  const [coverageFilter, setCoverageFilter] = useState('')
  const [openAbx, setOpenAbx] = useState(null)

  const categories = useMemo(() => uniqueValues(antibiotics, (r) => r.category), [])
  const indications = useMemo(() => uniqueValues(antibiotics, (r) => r.indications), [])
  const coverages = useMemo(() => uniqueValues(antibiotics, (r) => r.coverage), [])

  const filtered = antibiotics.filter((abx) => {
    const q = searchQuery.toLowerCase()
    const matchesSearch =
      !q ||
      (abx.genericName || '').toLowerCase().includes(q) ||
      (abx.brandName || '').toLowerCase().includes(q) ||
      (abx.name || '').toLowerCase().includes(q)
    const matchesCategory = categoryFilter === '' || abx.category === categoryFilter
    const matchesIndication = indicationFilter === '' || (abx.indications || []).includes(indicationFilter)
    const matchesCoverage = coverageFilter === '' || (abx.coverage || []).includes(coverageFilter)
    return matchesSearch && matchesCategory && matchesIndication && matchesCoverage
  })

  const sorted = [...filtered].sort((a, b) => {
    const ca = (a.category || 'zzz').localeCompare(b.category || 'zzz')
    if (ca !== 0) return ca
    return (a.genericName || '').localeCompare(b.genericName || '')
  })

  const shelves = intoShelves(sorted, 5)

  const subtitle = lang === 'zh'
    ? `${t('subtitle')} · The Antimicrobial Apothecary`
    : `${t('subtitle')} · 抗菌魔法藥櫥`

  return (
    <div className="cupboard">
      <Atmosphere />

      <div className="cupboard-toprow">
        <LanguageToggle />
      </div>

      <header className="cupboard-header">
        <h1 className="cupboard-title">{t('title')}</h1>
        <p className="cupboard-subtitle">{subtitle}</p>
      </header>

      <div className="cupboard-controls">
        <input
          type="text"
          className="cupboard-search"
          placeholder={t('searchPlaceholder')}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <div className="cupboard-filters">
          <select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}>
            <option value="">{t('allOrders')}</option>
            {categories.map((c) => (<option key={c} value={c}>{c}</option>))}
          </select>

          <select value={indicationFilter} onChange={(e) => setIndicationFilter(e.target.value)}>
            <option value="">{t('allMaladies')}</option>
            {indications.map((i) => (<option key={i} value={i}>{expand(i)}</option>))}
          </select>

          <select value={coverageFilter} onChange={(e) => setCoverageFilter(e.target.value)}>
            <option value="">{t('allFoes')}</option>
            {coverages.map((c) => (<option key={c} value={c}>{expand(c)}</option>))}
          </select>

          <span className="cupboard-count">
            {tf('countTemplate', { n: sorted.length, total: antibiotics.length })}
          </span>
        </div>
      </div>

      <div className="cupboard-frame">
        <Cobwebs />
        <HangingClutter />

        <div className="cupboard-shelves">
          {shelves.length === 0 && (
            <p className="cupboard-empty">{t('empty')}</p>
          )}
          {shelves.map((row, idx) => (
            <div className="shelf" key={idx}>
              <div className="shelf-bottles">
                <CurioFor shelf={idx} slot={0} />
                {row.map((abx) => (
                  <AntibioticBottle key={abx.id || abx.name} antibiotic={abx} onClick={setOpenAbx} />
                ))}
                <CurioFor shelf={idx} slot={1} />
              </div>
              <div className="shelf-plank" />
            </div>
          ))}
        </div>
      </div>

      <footer className="cupboard-footer">
        <p>{t('footer')}</p>
      </footer>

      {openAbx && (
        <AntibioticDetail antibiotic={openAbx} onClose={() => setOpenAbx(null)} />
      )}
    </div>
  )
}

export default App
