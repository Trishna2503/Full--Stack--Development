import { useState } from 'react'
import './App.css'

const initialForm = {
  name: '',
  password: '',
  email: '',
  age: '',
  phone: '',
  website: '',
  dob: '',
  time: '',
  dateTime: '',
  month: '',
  week: '',
  gender: '',
  skills: [],
  color: '#315a46',
  level: 50,
  search: '',
  hidden: 'Student',
  comments: '',
  course: '',
}

function App() {
  const [form, setForm] = useState(initialForm)
  const [message, setMessage] = useState('')
  const [formKey, setFormKey] = useState(0)

  function handleChange(event) {
    const { name, value, type, checked } = event.target
    setMessage('')

    if (type === 'checkbox' && name === 'skills') {
      setForm((currentForm) => ({
        ...currentForm,
        skills: checked
          ? [...currentForm.skills, value]
          : currentForm.skills.filter((skill) => skill !== value),
      }))
      return
    }

    setForm((currentForm) => ({
      ...currentForm,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    setMessage('Registration submitted successfully!')
  }

  function handleReset() {
    setForm(initialForm)
    setMessage('')
    setFormKey((currentKey) => currentKey + 1)
  }

  return (
    <main className="page-shell">
      <section className="registration-card" aria-labelledby="form-title">
        <aside className="intro-panel">
          <div className="brand">
            <span className="brand-mark" aria-hidden="true">N</span>
            <span>Northstar Academy</span>
          </div>

          <div className="intro-copy">
            <p className="eyebrow">STUDENT ENROLLMENT · 2026</p>
            <h1>Your next chapter starts here.</h1>
            <p className="intro-description">
              Tell us a little about yourself and take the first step toward
              something great.
            </p>
          </div>

          <div className="enrollment-note">
            <span className="note-icon" aria-hidden="true">✦</span>
            <p>
              <strong>Make it official.</strong>
              <span>Complete the form to begin your application.</span>
            </p>
          </div>
          <span className="panel-orbit orbit-one" aria-hidden="true" />
          <span className="panel-orbit orbit-two" aria-hidden="true" />
        </aside>

        <div className="form-panel">
          <header className="form-header">
            <p className="eyebrow">LET’S GET TO KNOW YOU</p>
            <h2 id="form-title">Student registration</h2>
            <p>Fields marked with <span className="required-mark">*</span> are required.</p>
          </header>

          <form key={formKey} onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="field">
                <label htmlFor="name">Full name <span className="required-mark">*</span></label>
                <input
                  autoComplete="name"
                  id="name"
                  maxLength="80"
                  name="name"
                  onChange={handleChange}
                  placeholder="e.g. Alex Morgan"
                  required
                  type="text"
                  value={form.name}
                />
              </div>

              <div className="field">
                <label htmlFor="password">Create password <span className="required-mark">*</span></label>
                <input
                  autoComplete="new-password"
                  id="password"
                  minLength="8"
                  name="password"
                  onChange={handleChange}
                  placeholder="At least 8 characters"
                  required
                  type="password"
                  value={form.password}
                />
              </div>

              <div className="field">
                <label htmlFor="email">Email address <span className="required-mark">*</span></label>
                <input
                  autoComplete="email"
                  id="email"
                  name="email"
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  type="email"
                  value={form.email}
                />
              </div>

              <div className="field">
                <label htmlFor="age">Age <span className="required-mark">*</span></label>
                <input
                  id="age"
                  max="60"
                  min="18"
                  name="age"
                  onChange={handleChange}
                  required
                  type="number"
                  value={form.age}
                />
              </div>

              <div className="field">
                <label htmlFor="phone">Phone number</label>
                <input
                  autoComplete="tel"
                  id="phone"
                  name="phone"
                  onChange={handleChange}
                  placeholder="+1 (555) 000-0000"
                  type="tel"
                  value={form.phone}
                />
              </div>

              <div className="field">
                <label htmlFor="website">Website</label>
                <input
                  autoComplete="url"
                  id="website"
                  name="website"
                  onChange={handleChange}
                  placeholder="https://example.com"
                  type="url"
                  value={form.website}
                />
              </div>

              <div className="field">
                <label htmlFor="dob">Date of birth</label>
                <input
                  autoComplete="bday"
                  id="dob"
                  name="dob"
                  onChange={handleChange}
                  type="date"
                  value={form.dob}
                />
              </div>

              <div className="field">
                <label htmlFor="time">Preferred time</label>
                <input
                  id="time"
                  name="time"
                  onChange={handleChange}
                  type="time"
                  value={form.time}
                />
              </div>

              <div className="field">
                <label htmlFor="dateTime">Date and time</label>
                <input
                  id="dateTime"
                  name="dateTime"
                  onChange={handleChange}
                  type="datetime-local"
                  value={form.dateTime}
                />
              </div>

              <div className="field">
                <label htmlFor="month">Starting month</label>
                <input
                  id="month"
                  name="month"
                  onChange={handleChange}
                  type="month"
                  value={form.month}
                />
              </div>

              <div className="field">
                <label htmlFor="week">Starting week</label>
                <input
                  id="week"
                  name="week"
                  onChange={handleChange}
                  type="week"
                  value={form.week}
                />
              </div>

              <fieldset className="field choice-field">
                <legend>Gender <span className="required-mark">*</span></legend>
                <div className="choice-row">
                  {['Male', 'Female', 'Other'].map((option) => (
                    <label className="radio-choice" key={option}>
                      <input
                        checked={form.gender === option}
                        name="gender"
                        onChange={handleChange}
                        required
                        type="radio"
                        value={option}
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <fieldset className="field choice-field">
                <legend>Skills</legend>
                <div className="choice-row">
                  {['HTML', 'CSS', 'React'].map((skill) => (
                    <label className="radio-choice" key={skill}>
                      <input
                        checked={form.skills.includes(skill)}
                        name="skills"
                        onChange={handleChange}
                        type="checkbox"
                        value={skill}
                      />
                      <span>{skill}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <div className="field">
                <label htmlFor="file">Upload a document</label>
                <input
                  accept=".pdf,.jpg,.jpeg,.png"
                  id="file"
                  name="file"
                  type="file"
                />
              </div>

              <div className="field">
                <label htmlFor="color">Favorite color</label>
                <input
                  className="color-input"
                  id="color"
                  name="color"
                  onChange={handleChange}
                  type="color"
                  value={form.color}
                />
              </div>

              <div className="field field-wide">
                <label htmlFor="level">Skill level <span className="range-value">{form.level}</span></label>
                <input
                  className="range-input"
                  id="level"
                  max="100"
                  min="0"
                  name="level"
                  onChange={handleChange}
                  type="range"
                  value={form.level}
                />
              </div>

              <div className="field field-wide">
                <label htmlFor="search">Search interests</label>
                <input
                  id="search"
                  name="search"
                  onChange={handleChange}
                  placeholder="Search a subject or area of interest"
                  type="search"
                  value={form.search}
                />
              </div>

              <div className="field">
                <label htmlFor="course">Course <span className="required-mark">*</span></label>
                <select
                  id="course"
                  name="course"
                  onChange={handleChange}
                  required
                  value={form.course}
                >
                  <option disabled value="">Select a course</option>
                  <option value="react">ReactJS</option>
                  <option value="javascript">JavaScript</option>
                  <option value="python">Python</option>
                </select>
              </div>

              <div className="field">
                <label htmlFor="comments">Comments</label>
                <textarea
                  id="comments"
                  maxLength="240"
                  name="comments"
                  onChange={handleChange}
                  placeholder="Anything else you’d like us to know?"
                  rows="2"
                  value={form.comments}
                />
              </div>
            </div>

            <input name="hidden" type="hidden" value={form.hidden} readOnly />

            <div className="form-actions">
              <button className="submit-button" type="submit">
                Submit registration <span aria-hidden="true">→</span>
              </button>
              <div className="secondary-actions">
                <button className="secondary-button" onClick={handleReset} type="button">
                  Reset form
                </button>
                <button
                  className="secondary-button"
                  onClick={() => setMessage('Button clicked!')}
                  type="button"
                >
                  Test button
                </button>
              </div>
            </div>

            <p className="privacy-note">
              Your information is only used to process your student registration.
            </p>
            <div className="success-message" aria-live="polite" role="status">
              {message && <p>{message}</p>}
            </div>
          </form>
        </div>
      </section>
      <footer className="page-footer">A bright future begins with one small step.</footer>
    </main>
  )
}

export default App
