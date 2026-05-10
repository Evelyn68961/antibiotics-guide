import { useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { expand } from '../data/abbreviations'
import { useLanguage } from '../i18n/LanguageContext'
import PracticeQuestions from './PracticeQuestions'

function TagRow({ items, className = '' }) {
  if (!items || items.length === 0) return null
  return (
    <div className={`detail-tags ${className}`}>
      {items.map((item) => (
        <span key={item} className="detail-tag" title={expand(item)}>
          {item}
        </span>
      ))}
    </div>
  )
}

function Section({ label, value }) {
  if (!value || value === '') return null
  return (
    <div className="detail-section">
      <h4 className="detail-label">{label}</h4>
      <p
        className="detail-value"
        dangerouslySetInnerHTML={{
          __html: String(value).replace(/<br\s*\/?>/gi, '<br/>'),
        }}
      />
    </div>
  )
}

function AntibioticDetail({ antibiotic, onClose }) {
  const { t, tf } = useLanguage()

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
    ? `${antibiotic.brandName}`
    : antibiotic.genericName
  const subheading = antibiotic.brandName ? antibiotic.genericName : null

  const introTail = antibiotic.category
    ? tf('detailIntroAfterCategory', antibiotic.category)
    : t('detailIntroAfterPlain')

  return (
    <div className="detail-overlay" onClick={onClose}>
      <article
        className="detail-page"
        role="dialog"
        aria-modal="true"
        aria-label={heading}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="detail-close"
          onClick={onClose}
          aria-label={t('close')}
        >
          ×
        </button>

        <header className="detail-header">
          <p className="detail-eyebrow">{t('detailEyebrow')}</p>
          <h1 className="detail-title">{heading}</h1>
          {subheading && <p className="detail-subtitle">{subheading}</p>}
          {antibiotic.category && (
            <p className="detail-category">{antibiotic.category}</p>
          )}
        </header>

        <section className="detail-intro">
          <p>
            {t('detailIntroBefore')}
            <strong>{antibiotic.genericName}</strong>
            {introTail}
          </p>
        </section>

        <div className="detail-grid">
          {antibiotic.coverage && antibiotic.coverage.length > 0 && (
            <div className="detail-section">
              <h4 className="detail-label">{t('coverage')}</h4>
              <TagRow items={antibiotic.coverage} className="coverage" />
            </div>
          )}

          {antibiotic.indications && antibiotic.indications.length > 0 && (
            <div className="detail-section">
              <h4 className="detail-label">{t('indications')}</h4>
              <TagRow items={antibiotic.indications} className="indications" />
            </div>
          )}

          <Section label={t('adultDose')} value={antibiotic.adultDose} />
          <Section label={t('pediatricDose')} value={antibiotic.pediatricDose} />
          <Section label={t('renalDose')} value={antibiotic.renalDose} />
          <Section label={t('hepaticDose')} value={antibiotic.hepaticDose} />
          <Section label={t('mechanism')} value={antibiotic.mechanism} />
          <Section label={t('drugInteractions')} value={antibiotic.drugInteractions} />
          <Section label={t('pregnancy')} value={antibiotic.pregnancy} />
          <Section label={t('breastfeeding')} value={antibiotic.breastfeeding} />

          {antibiotic.sideEffects && antibiotic.sideEffects.length > 0 && (
            <div className="detail-section">
              <h4 className="detail-label">{t('sideEffects')}</h4>
              <TagRow items={antibiotic.sideEffects} className="side-effects" />
            </div>
          )}

          {antibiotic.monitor && antibiotic.monitor.length > 0 && (
            <div className="detail-section">
              <h4 className="detail-label">{t('monitor')}</h4>
              <TagRow items={antibiotic.monitor} className="monitor" />
            </div>
          )}

          {antibiotic.notes && (
            <div className="detail-section detail-notes">
              <h4 className="detail-label">{t('notes')}</h4>
              <p
                className="detail-value"
                dangerouslySetInnerHTML={{
                  __html: String(antibiotic.notes).replace(
                    /<br\s*\/?>/gi,
                    '<br/>',
                  ),
                }}
              />
            </div>
          )}
        </div>

        {antibiotic.monograph && (
          <section className="detail-monograph">
            <h2 className="detail-section-heading">{t('fullTome')}</h2>
            <div className="monograph">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {antibiotic.monograph}
              </ReactMarkdown>
            </div>
          </section>
        )}

        <section className="detail-practice">
          <PracticeQuestions antibiotic={antibiotic} />
        </section>

        {antibiotic.url && (
          <p className="detail-source">
            <a href={antibiotic.url} target="_blank" rel="noreferrer">
              {t('notionLink')}
            </a>
          </p>
        )}
      </article>
    </div>
  )
}

export default AntibioticDetail
