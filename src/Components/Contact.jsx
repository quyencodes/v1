export default function Contact() {
  return (
    <section id="contact">
      <div className="contact-container">
        <h4 className="contact-greeting">What's Next</h4>
        <h1 className="contact-subheading">Let's Connect</h1>
        <p className="contact-body">
          My inbox is always open if you are interested in connecting. Whether
          you have a question or just want to say hi, I'll try my best to get
          back to you!
        </p>
        <a
          className="contact-email"
          href="mailto:qduhoang@gmail.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <button className="contact-button" type="submit">
            Say Hello
          </button>
        </a>
      </div>
    </section>
  )
}
