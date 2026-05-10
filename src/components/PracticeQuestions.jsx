import { useMemo, useState } from 'react'
import { generateQuestions } from '../utils/generateQuestions'
import { useLanguage } from '../i18n/LanguageContext'

function PracticeQuestions({ antibiotic }) {
  const { lang, t, tf } = useLanguage()

  // Regenerate when the antibiotic OR language changes. Each visit produces
  // a new randomized set so studying the same drug feels fresh.
  const questions = useMemo(
    () => generateQuestions(antibiotic, { t, tf, lang }),
    [antibiotic, t, tf, lang],
  )
  const [answers, setAnswers] = useState({})
  const [seed, setSeed] = useState(0)

  function handleAnswer(idx, choice) {
    setAnswers((prev) => ({ ...prev, [idx]: choice }))
  }

  function reroll() {
    setAnswers({})
    setSeed((s) => s + 1)
  }

  // Re-derive questions when seed changes (force fresh random pull)
  const fresh = useMemo(
    () => generateQuestions(antibiotic, { t, tf, lang }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [antibiotic, seed, lang],
  )
  const list = seed === 0 ? questions : fresh

  if (!list || list.length === 0) {
    return (
      <div className="practice empty">
        <p>{t('practiceEmpty')}</p>
      </div>
    )
  }

  const correctCount = Object.entries(answers).filter(
    ([idx, ans]) => list[idx] && ans === list[idx].correct,
  ).length
  const answeredCount = Object.keys(answers).length

  return (
    <div className="practice">
      <div className="practice-header">
        <h3>{t('practiceTitle')}</h3>
        <button className="reroll-btn" onClick={reroll}>
          {t('practiceReroll')}
        </button>
      </div>

      <ol className="practice-list">
        {list.map((q, idx) => {
          const userAnswer = answers[idx]
          const answered = userAnswer != null
          return (
            <li key={idx} className="practice-item">
              <p className="practice-prompt">{q.prompt}</p>
              <div className="practice-options">
                {q.options.map((opt) => {
                  const isCorrect = opt === q.correct
                  const isPicked = opt === userAnswer
                  let cls = 'practice-option'
                  if (answered && isCorrect) cls += ' correct'
                  if (answered && isPicked && !isCorrect) cls += ' wrong'
                  if (!answered) cls += ' pending'
                  return (
                    <button
                      key={opt}
                      className={cls}
                      disabled={answered}
                      onClick={() => handleAnswer(idx, opt)}
                    >
                      {opt}
                    </button>
                  )
                })}
              </div>
              {answered && q.explanation && (
                <p className="practice-explanation">
                  {userAnswer === q.correct ? t('practiceCorrect') : t('practiceWrong')}{' '}
                  {q.explanation}
                </p>
              )}
            </li>
          )
        })}
      </ol>

      {answeredCount > 0 && (
        <div className="practice-score">
          {t('practiceScore')}: {correctCount} / {answeredCount}
          {answeredCount === list.length && correctCount === list.length && (
            <span className="practice-perfect">{t('practicePerfect')}</span>
          )}
        </div>
      )}
    </div>
  )
}

export default PracticeQuestions
