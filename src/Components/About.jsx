export default function About() {
  return (
    <section id="about">
      <div className="about-container">
        <div className="about-me-section">
          <h2 className="about-heading">About Me</h2>
          <p className="about-body p1">
            Hello there! My name is Quyen (Q) and I&#39;m passionate about web
            development. My interest in programming started back when I took my
            first{' '}
            <a
              style={{ textDecoration: 'none', color: '#df49a6' }}
              href="https://web-app.usc.edu/soc/syllabus/20201/31881.pdf"
              rel="noreferrer noopener"
              target="_blank"
            >
              Introduction to Programming - Python{' '}
            </a>
            course back in 2021 - I had a tough time first learning how to code,
            but I found the experience to be very rewarding. Now, I code
            full-time and have plans to further my knowledge through
            self-studying and real world life experiences.
          </p>
          <p className="about-body p2">
            My career interests originally started in accounting, I had the
            privilege of interning at{' '}
            <a
              style={{ textDecoration: 'none', color: '#df49a6' }}
              href="https://kpmg.com"
              rel="noreferrer noopener"
              target="_blank"
            >
              a Big 4 accounting firm
            </a>
            . I made the switch to finance my third year of university, and had
            internships in{' '}
            <a
              style={{ textDecoration: 'none', color: '#df49a6' }}
              href="https://www.clearbridgellc.net/"
              rel="noreferrer noopener"
              target="_blank"
            >
              private equity
            </a>{' '}
            and{' '}
            <a
              style={{ textDecoration: 'none', color: '#df49a6' }}
              href="https://www.wellsfargo.com/cib/"
              rel="noreferrer noopener"
              target="_blank"
            >
              investment banking
            </a>
            . After university, I returned to the same bank as a technology
            investment banking analyst, worked there for a year, and now I&#39;m
            a self-taught programmer actively looking for full stack
            opportunities.
          </p>
          <p className="about-body p4">
            Here are a few technologies I&#39;ve been working with recently:
          </p>
          <div className="about-list-container">
            <ul className="about-list">
              <li className="about-list-item">JavaScript (ES6+)</li>
              <li className="about-list-item">TypeScript</li>
              <li className="about-list-item">React</li>
            </ul>
            <ul className="about-list">
              <li className="about-list-item">Python</li>
              <li className="about-list-item">Java</li>
              <li className="about-list-item">Node.js</li>
            </ul>
          </div>
        </div>
        <div className="about-photo">
          <img
            className="about-headshot"
            src="https://user-images.githubusercontent.com/104607182/198861294-a3c1a341-0f11-4cdd-bba1-c4a254c40fc6.png"
            alt="Quyen Hoang"
            width="350vw"
          ></img>
        </div>
      </div>
    </section>
  )
}
