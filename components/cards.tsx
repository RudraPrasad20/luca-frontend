import { HoverEffect } from "./ui/card-hover-effect";


export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto py-8 mt-16">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Seasonal Price Refresh",
    description:
      "New season, new financial targets. Refresh your price plan as frequently as you need it - weekly, monthly, quarterly.",
    link: "https://stripe.com",
  },
  {
    title: "Catch Bad Prices Early",
    description:
      "Overpriced? Underpriced? Let our Observation Platform monitor the health of your pricing strategy.",
    link: "https://netflix.com",
  },
  {
    title: "Dynamic Price Adjustments",
    description:
      "Turn on automatic price updates, and let Luca adjust your prices based on market signal.",
    link: "https://google.com",
  },
  {
    title: "React to Competitors",
    description:
      "Track and react to competitor price changes or discount campaigns by making your own changes",
    link: "https://meta.com",
  },
  {
    title: "Prevent Stockouts",
    description:
      "Inventory aware pricing that prevents stockouts through proactive price adjustments.",
    link: "https://amazon.com",
  },
  {
    title: "Shift business goals",
    description:
      "Automatically reprise when business strategy moves from 'growth at all costs' to 'profit maximization'.",
    link: "https://microsoft.com",
  },
//   {
//     title: "Run discounts",
//     description:
//       "discount budget and user targeting with Luca's discount engine.",
//     link: "https://microsoft.com",
//   },
//   {
//     title: "Respond to changing costs",
//     description:
//       "Automatically update your pricing strategy based on a shift in costs.",
//     link: "https://microsoft.com",
//   },
];
