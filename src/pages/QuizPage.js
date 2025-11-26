import { useMemo, useState } from 'react';

const QUESTIONS = [
  {
    id: 'utilisation',
    question: 'What’s a healthy credit card utilisation to keep your score happy?',
    options: ['Under 30% of your limit', '50-60% of your limit', 'Max it out then pay later'],
    answer: 'Under 30% of your limit',
  },
  {
    id: 'foir',
    question: 'FOIR measures what?',
    options: [
      'Fixed obligations to income ratio',
      'Future options in reserve',
      'Funds on instant request',
    ],
    answer: 'Fixed obligations to income ratio',
  },
  {
    id: 'prepay',
    question: 'When is it smart to prepay a loan?',
    options: [
      'When you have surplus cash and no foreclosure fee',
      'Only at the end of the tenure',
      'Never—stick to schedule',
    ],
    answer: 'When you have surplus cash and no foreclosure fee',
  },
];

const BADGES = [
  { label: 'Weekly drops', value: 'New quizzes' },
  { label: 'Win perks', value: 'Unlock badges' },
  { label: 'No jargon', value: 'Bite-sized' },
];

function QuizPage() {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const score = useMemo(() => {
    return QUESTIONS.reduce((acc, q) => {
      return acc + (answers[q.id] === q.answer ? 1 : 0);
    }, 0);
  }, [answers]);

  const handleSelect = (id, option) => {
    setSubmitted(false);
    setAnswers((prev) => ({ ...prev, [id]: option }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="page quiz-page">
      <section className="quiz-hero">
        <div className="quiz-hero__copy">
          <span className="info-pill">Finance Quiz</span>
          <h1>Test your money IQ in minutes</h1>
          <p>
            Quick questions on credit, EMIs, and smart borrowing. Beat your own high score and grab new badges every
            week—no jargon, just practical money tips.
          </p>
          <div className="quiz-badges">
            {BADGES.map((badge) => (
              <span key={badge.label}>
                <strong>{badge.value}</strong>
                <small>{badge.label}</small>
              </span>
            ))}
          </div>
        </div>
        <div className="quiz-hero__card">
          <div className="quiz-stat">
            <p className="eyebrow">Current streak</p>
            <h2>03 days</h2>
            <p className="quiz-note">Keep it up to unlock the Gold badge.</p>
          </div>
          <div className="quiz-stats-row">
            <div>
              <strong>8</strong>
              <span>Categories</span>
            </div>
            <div>
              <strong>2L+</strong>
              <span>Players</span>
            </div>
            <div>
              <strong>6 mins</strong>
              <span>Avg session</span>
            </div>
          </div>
        </div>
      </section>

      <section className="quiz-body">
        <form className="quiz-card" onSubmit={handleSubmit}>
          <header>
            <p className="eyebrow">Weekly challenge</p>
            <h2>Answer & check your score</h2>
          </header>
          <div className="quiz-questions">
            {QUESTIONS.map((q, index) => (
              <div key={q.id} className="quiz-question">
                <span className="quiz-question__index">0{index + 1}</span>
                <div>
                  <h3>{q.question}</h3>
                  <div className="quiz-options">
                    {q.options.map((option) => (
                      <label
                        key={option}
                        className={`quiz-option ${answers[q.id] === option ? 'selected' : ''}`}
                      >
                        <input
                          type="radio"
                          name={q.id}
                          value={option}
                          checked={answers[q.id] === option}
                          onChange={() => handleSelect(q.id, option)}
                        />
                        <span>{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button type="submit" className="primary-btn">
            Check answers
          </button>
          {submitted && (
            <p className="form-note success">
              You got {score} / {QUESTIONS.length}. Keep your streak alive with tomorrow’s drop!
            </p>
          )}
        </form>

        <aside className="quiz-aside">
          <div className="quiz-tip-card">
            <h3>How scoring works</h3>
            <ul>
              <li>Correct answers earn +1. No negative marks.</li>
              <li>Play daily to build a streak and unlock badges.</li>
              <li>Leaderboard resets every Monday with new themes.</li>
            </ul>
          </div>
          <div className="quiz-tip-card">
            <h3>Coming up next</h3>
            <ul>
              <li>EMI planning for wedding season</li>
              <li>Credit card myths—busted</li>
              <li>EV finance starter pack</li>
            </ul>
          </div>
        </aside>
      </section>
    </div>
  );
}

export default QuizPage;
