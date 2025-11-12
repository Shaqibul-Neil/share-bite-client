import { useInView } from "react-intersection-observer";
import SlotCounter from "react-slot-counter";
import Container from "../container/Container";

const CommunityStats = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // only trigger once
    threshold: 0.3,
  });

  return (
    <section
      ref={ref}
      className="bg-linear-to-r from-[#f57b00] to-[#FFB74D] text-white lg:py-16 py-12 px-4"
    >
      <h3 className="lg:text-5xl md:text-3xl text-2xl font-semibold text-center lg:mb-12 mb-10 leading-snug">
        Making a Difference, One Meal at a Time
      </h3>

      <Container>
        <div className="flex md:flex-row flex-col items-center md:gap-12 gap-8 justify-center text-center">
          {/* Total Meals Shared */}
          <div className="bg-white/20 backdrop-blur-md rounded-xl py-8 px-6 flex-1 hover:scale-105 transition-transform duration-500">
            <p className="text-sm md:text-base mb-2 font-medium text-accent">
              Total Meals Shared
            </p>
            <h2 className="lg:text-6xl md:text-4xl text-3xl font-extrabold text-accent">
              {inView && (
                <SlotCounter key={inView ? "meals" : "0"} value={125000} />
              )}
            </h2>
            <p className="text-xs md:text-sm mt-2 text-accent">
              15% more than last month
            </p>
          </div>

          {/* Total Donors */}
          <div className="bg-white/20 backdrop-blur-md rounded-xl py-8 px-6 flex-1 hover:scale-105 transition-transform duration-500">
            <p className="text-sm md:text-base mb-2 font-medium text-accent">
              Total Donors
            </p>
            <h2 className="lg:text-6xl md:text-4xl text-3xl font-extrabold text-accent">
              {inView && (
                <SlotCounter key={inView ? "donors" : "0"} value={3400} />
              )}
            </h2>
            <p className="text-xs md:text-sm mt-2 text-accent">
              Helping communities grow
            </p>
          </div>

          {/* Active Communities */}
          <div className="bg-white/20 backdrop-blur-md rounded-xl py-8 px-6 flex-1 hover:scale-105 transition-transform duration-500">
            <p className="text-sm md:text-base mb-2 font-medium text-accent">
              Active Communities
            </p>
            <h2 className="lg:text-6xl md:text-4xl text-3xl font-extrabold text-accent">
              {inView && (
                <SlotCounter key={inView ? "communities" : "0"} value={56} />
              )}
            </h2>
            <p className="text-xs md:text-sm mt-2 text-accent">
              More joining every week
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CommunityStats;
