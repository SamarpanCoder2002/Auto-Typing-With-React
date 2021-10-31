import Typewriter from "typewriter-effect";
import "./helper.css";

const AutoTypingHelper = () => {
  return (
    <p>
      I am&nbsp;
      <Typewriter
        options={{
          strings: [
            "Samarpan Dasgupta",
            "a Designer",
            "a Developer",
            "a Freelancer",
            "a Youtuber",
          ],
          autoStart: true,
          loop: true,
          delay: 40,
          deleteSpeed: 40,
          typeSpeed: 40,
        }}
      />
    </p>
  );
};

export default AutoTypingHelper;
