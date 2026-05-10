import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { STRINGS, format } from './strings'

const STORAGE_KEY = 'apothecary.lang'

const LanguageContext = createContext({
  lang: 'en',
  setLang: () => {},
  t: (key) => key,
  tf: (key) => key,
})

function detectInitial() {
  if (typeof window === 'undefined') return 'en'
  const stored = window.localStorage?.getItem(STORAGE_KEY)
  if (stored === 'en' || stored === 'zh') return stored
  const nav = (window.navigator?.language || '').toLowerCase()
  if (nav.startsWith('zh')) return 'zh'
  return 'en'
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(detectInitial)

  useEffect(() => {
    try {
      window.localStorage?.setItem(STORAGE_KEY, lang)
    } catch (e) {
      void e
    }
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang === 'zh' ? 'zh-Hant' : 'en'
    }
  }, [lang])

  const setLang = useCallback((next) => {
    setLangState(next === 'zh' ? 'zh' : 'en')
  }, [])

  const dict = STRINGS[lang] || STRINGS.en

  const t = useCallback(
    (key) => {
      const v = dict[key]
      return v == null ? key : v
    },
    [dict],
  )

  // tf: translate + format. For function-typed entries, call with `vars`
  // (e.g. detailIntroAfterCategory). For string entries, substitute {key}.
  const tf = useCallback(
    (key, vars) => {
      const v = dict[key]
      if (v == null) return key
      if (typeof v === 'function') return v(vars)
      return format(v, vars)
    },
    [dict],
  )

  const value = useMemo(() => ({ lang, setLang, t, tf }), [lang, setLang, t, tf])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  return useContext(LanguageContext)
}
