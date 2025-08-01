import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const WhereWeOperate = () => {
  const states = [
    { name: "TEXAS", code: "TX" },
    { name: "NEW YORK", code: "NY" },
    { name: "FLORIDA", code: "FL" },
    { name: "NEW JERSEY", code: "NJ" },
    { name: "TENNESSEE", code: "TN" },
    { name: "CALIFORNIA", code: "CA" }
  ];

  return (
    <section className="py-20 bg-neutral-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="main-title text-4xl md:text-5xl font-extrabold text-white uppercase mb-8 tracking-tight drop-shadow-lg">
            Where We Operate
          </h2>
        </div>

        {/* States Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {states.map((state, index) => (
            <div
              key={index}
              className="group flex flex-col items-center justify-center border-2 border-accent bg-white text-accent rounded-xl px-8 py-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <span className="text-5xl font-extrabold main-title mb-2 tracking-tight">{state.code}</span>
              <span className="text-xl font-semibold tracking-wide uppercase text-neutral-800 mb-1">{state.name}</span>
              <Link to={`/coverage/${state.code.toLowerCase()}`} className="mt-2 text-sm font-bold text-primary underline underline-offset-4 hover:text-accent transition-colors">View Coverage</Link>
            </div>
          ))}
        </div>

        {/* Subtitle */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground font-medium">
            Licensed for armed and unarmed security services
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhereWeOperate;