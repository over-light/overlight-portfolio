import Bar from "../components/Bar";
import { languages, tools } from "../data";

const Resume = () => {
  return (
    <div className="px-6 py-2">
      {/* //! Education & Experience */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">
              Computer Science Engineering
            </h5>
            <p className="font-semibold">University of Suffolk (2010~2014)</p>
            <p className="my-3">
              With a strong academic foundation and a deep understanding of vatious aspects
              of computer science and its applications, I was awarded M.S in Computer Science
            </p>
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">
              Full stack blockchain Developer
            </h5>
            {/* <p className="font-semibold">Tata Consultancy Services</p> */}
            <p className="my-3">
              Skilled in both client-side and server-side technologies, adept at
              Agile methodologies, and demonstrated ability in problem-solving
              and analytical thinking. Proven track record in Blockchain
              development, including improving platform efficiency by 25% and
              contributing to the development of new tools. Seeking a
              challenging position in a company where I can contribute my
              fullstack and blockchain skills to support impactful projects and
              innovative solutions.
            </p>
          </div>
        </div>
      </div>

      {/*Languages & Tools */}
      <div className="grid gap-9 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Full Stack & Blockchain Skills</h5>
          <div className="my-2">
            {languages.map((language, i) => (
              <Bar value={language} key={i} />
            ))}
          </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl font-bold"></h5>
          <br></br>          
          <br></br>          
          <div className="my-2">
            {tools.map((tool, i) => (
              <Bar value={tool} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
