import { useLanguage } from '../i18n/LanguageContext'

function LanguageToggle() {
  const { lang, setLang, t } = useLanguage()
  const next = lang === 'en' ? 'zh' : 'en'
  return (
    <button
      type="button"
      className="lang-toggle"
      onClick={() => setLang(next)}
      aria-label={t('langOtherAria')}
      title={t('langOtherAria')}
    >
      <span className="lang-toggle-current">{lang === 'en' ? 'EN' : '中'}</span>
      <span className="lang-toggle-sep">·</span>
      <span className="lang-toggle-other">{t('langOther')}</span>
    </button>
  )
}

export default LanguageToggle
