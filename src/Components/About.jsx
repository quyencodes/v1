export default function About() {
  return (
    <section id="about">
      <div className="about-container">
        <div className="about-me-section">
          <h2 className="about-heading">About Me</h2>
          <p className="about-body p1">
            Hello there! My name is Quyen (Q) Hoang and I'm passionate about web
            development. My interest in programming started back when I took my
            first introduction to programming course in python back in 2021 - I
            had a tough time first learning how to program, but found the
            experience to be very rewarding. Now, I code full-time and have
            plans to further my knowledge through self-studying and real world
            life experiences.
          </p>
          <p className="about-body p2">
            My career interests originally started in accounting, I made a
            switch to investment banking my junior year of university, after
            university worked for an investment bank as a technology investment
            banking analyst for a year, and now I'm a self-taught programmer
            actively looking for full stack opportunities.
          </p>
          {/* <p className="about-body p3">
            I look forward to bringing my unique background in business and
            computer programming to provide value to a team with an innovative
            product. I'm ambitious, hard working and am passionate about helping
            and growing with others.
          </p> */}
          <p className="about-body p4">
            Here are a few technologies, I've been working with recently:
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
