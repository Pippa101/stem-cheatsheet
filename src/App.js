import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Software Engineering & Careers</h1>
      <section>
        <h2>
          <a href="https://www.devjobsscanner.com/blog/top-8-most-demanded-programming-languages/"></a>
          In Demand Languages
        </h2>
        <ul className="lists" id="language-list">
          <li className="bold">Front end</li>
          <li> JavaScript/TypeScript</li>
          <li>React</li>
          <li>Vue</li>
          <li>Bootstrap CSS </li>
          <li>Tailwind CSS</li>
          <li className="bold"> Backend</li> <li>JavaScript </li>{" "}
          <li> Python</li> <li>Java </li> <li> PHP </li>{" "}
          <li> SQL for querying Databases</li>
        </ul>
      </section>

      <section>
        <h2>Useful things to know about the Industry</h2>
        <article>
          <h3>MERN</h3>
          <p>
            The MERN stack is a web development framework made up of the stack
            of MongoDB, Express.js, React.js, and Nodejs.
          </p>
        </article>
        <article>
          <h3>AWS - Amazon Web Services</h3>
          <p>
            Has 34% of the market share of cloud hosting providers i.e if you go
            into software development you're almost guaranteed to use their
            services eg databases, servers or cloud hosting.
          </p>
        </article>

        <article>
          <h3>
            <a href="https://www.scrum.org/resources/what-scrum-module">
              SCRUM
            </a>
          </h3>
          <p>
            An agile way of working which most tech companies use. Buzzwords
            like agile and SCRUM will do you well in a tech interview and it’s
            definitely worthwhile to familiarise yourself with this way of
            working as it is very likely you will adopt an agile way of working.
          </p>
        </article>
      </section>

      <section>
        <h2>Ways Into Tech</h2>
        <ul className="lists" id="ways-into-tech">
          <li>Apprenticeship</li>
          <li>
            {" "}
            Degree/graduate schemes -> software development degrees now, or
            traditional computing degrees (these are very much theory and
            frameworks rather than practical coding like the software degrees.)
          </li>
          <li>
            {" "}
            Bootcamp - <a href="https://northcoders.com/">northcoders</a> (is
            now fully funded by the Department of Education but you have to be
            19 or older and be a UK Citizen)
          </li>
          <li>
            {" "}
            Self taught with portfolio <a href="https://github.com/">
              Github
            </a>{" "}
            Portfolio
          </li>
          <li>
            {" "}
            <a href="https://www.freecodecamp.org/">Freecodecamp</a>{" "}
          </li>
          <li>
            <a href="https://www.codecademy.com/">Codeacademy</a>
          </li>
          <li>Loads of project tutorials on youtube to follow along with</li>
        </ul>
      </section>

      <section>
        <h2>Roles in Tech</h2>
        <ul className="lists">
          <li>
            <span className="bold">Software Developer</span> A coder, uses
            programming languages to build applications/software
          </li>

          <li>
            <span className="bold">Software Engineer</span> Same as a developer
            however are also involved in the planning and strategy of the
            software being built.
          </li>

          <li>
            <span className="bold">UI/UX Designer</span> Involved in the design
            of the software/application, often more applicable to front end
            projects like the look of a website/app.
          </li>
        </ul>
      </section>

      <section>
        <h2>Pathway Example</h2>
        <p>
          A Good pathway (But obviously everyone is different and there is no
          right way) into Tech
        </p>
        <ul className="lists">
          <li>
            {" "}
            Finish your A-levels (try to do one in a STEM Subject) Start coding
            for fun (make small fun projects/games) and add these to your Github
            Portfolio Have a go at codewars
          </li>
          <li>
            {" "}
            Do a bootcamp, Software Degree, apprenticeship or if you’ve built up
            a portfolio then apply for a junior software developer/engineering
            position at a company.
          </li>

          <li>
            {" "}
            If you went to Uni apply for graduate schemes or junior positions
          </li>
        </ul>
      </section>
    </div>
  );
}

export default App;
