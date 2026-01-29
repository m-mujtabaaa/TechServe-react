import { useEffect, useRef, useState } from "react";

function Counter({ target, suffix = "" }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animateCount();
        }
      },
      { threshold: 0.6 }
    );

    if (elementRef.current) observer.observe(elementRef.current);

    return () => observer.disconnect();
  }, []);

  const animateCount = () => {
    let start = 0;
    const duration = 2000;
    const increment = Math.ceil(target / (duration / 16));

    const counter = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(counter);
      } else {
        setCount(start);
      }
    }, 16);
  };

  return (
    <p
      ref={elementRef}
      className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#13345B]"
    >
      {count}
      {suffix}
    </p>
  );
}

export default function StatsSection() {
  return (
    <section className="pb-20 px-4 sm:px-6 lg:px-0 bg-[linear-gradient(171deg,#9abddfff_50%,white_50%)]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Satisfaction */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl duration-300 text-center flex flex-col justify-center h-auto sm:h-[23vh]">
            <Counter target={100} suffix="%" />
            <h3 className="text-sm sm:text-base uppercase pt-3 tracking-wide text-gray-500">
              Satisfaction
            </h3>
          </div>

          {/* Enrolled Learners */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl duration-300 text-center flex flex-col justify-center h-auto sm:h-[23vh]">
            <Counter target={241} />
            <h3 className="text-sm sm:text-base uppercase pt-3 tracking-wide text-gray-500">
              Enrolled Learners
            </h3>
          </div>

          {/* Instructors */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl duration-300 text-center flex flex-col justify-center h-auto sm:h-[23vh]">
            <Counter target={20} />
            <h3 className="text-sm sm:text-base uppercase pt-3 tracking-wide text-gray-500">
              Instructors
            </h3>
          </div>

          {/* Finished Sessions */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl duration-300 text-center flex flex-col justify-center h-auto sm:h-[23vh]">
            <Counter target={45} />
            <h3 className="text-sm sm:text-base uppercase pt-3 tracking-wide text-gray-500">
              Finished Sessions
            </h3>
          </div>

        </div>
      </div>
    </section>
  );
}
