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
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            WHERE WE OPERATE
          </h2>
        </div>

        {/* States Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto mb-8">
          {states.map((state, index) => (
            <Button
              key={index}
              variant="security"
              size="lg"
              className="h-16 text-lg font-bold bg-primary hover:bg-primary-light transition-all duration-300 transform hover:scale-105"
              asChild
            >
              <Link to={`/coverage/${state.code.toLowerCase()}`}>
                {state.name}
              </Link>
            </Button>
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