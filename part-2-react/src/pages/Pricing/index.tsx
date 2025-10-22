
import PricingHeader from "./components/Header";
import Card from "./components/Card";

function Pricing() {
  return (
    <section id="pricing" className="pt-10 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-8">
        {/* Section Header */}
        <PricingHeader />
        {/* Pricing Cards */}
       <Card />
      </div>
    </section>
  );
}

export default Pricing;
