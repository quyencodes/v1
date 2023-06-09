export default function Home() {
  return (
    <section id="home" className="home-container">
      <h4 className="home-greeting">Hello there! I&#39;m</h4>
      <h2 className="home-name">Quyen Hoang</h2>
      <h3 className="home-title">Full Stack Software Engineer</h3>
      <p className="home-welcome">
        Welcome to my personal portfolio. Here you&#39;ll learn more{' '}
        <a className="home-link" href="#about">
          about me
        </a>
        , my personal favorite{' '}
        <a className="home-link" href="#projects">
          projects
        </a>
        , past{' '}
        <a className="home-link" href="#experience">
          work experiences
        </a>
        , and a way to{' '}
        <a className="home-link" href="#contact">
          connect with me
        </a>
        .
      </p>
      <p className="home-body">
        I&#39;m a software engineer with a background in investment banking and
        accounting. I graduated from Hack Reactor in December 2022 and from
        University of Southern California (USC) in May 2021. I am constantly
        fascinated by our world, the people in it, and striving to make it a
        better place.
      </p>
      <p className="home-body">
        When I&#39;m not coding, you can find me probably still coding (:
      </p>
    </section>
  )
}
