import { useState, useEffect } from "react";
import Plan from "./components/Plan";

export default function Plans(){
  const [state, setState] = useState({
    "Preferences": '', 
    "Bean Type": '',
    "Quantity": '',
    "Grind Option": '',
    "Deliveries": ''
  });
  const [openAccordion, setOpenAccordion] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const [grindDisabled, setGrindDisabled] = useState(false);
  const plans = [
    {
      title: "Preferences", 
      question: "How do you drink your coffee?",
      answers: [
        {title: "Capsule", description:"Compatible with Nespresso systems and similar brewers"}, {title: "Filter", description: "For pour over or drip methods like Aeropress, Chemex, and V60"}, {title: "Espresso", description: "Dense and finely ground beans for an intense, flavorful experience"}
      ]
    },
    {
      title: "Bean Type", 
      question: "What type of coffee?",
      answers: [
        {title: "Single origin", description:"Distinct, high quality coffee from a specific family-owned farm"}, {title: "Decaf", description: "Just like regular coffee, except the caffeine has been removed"}, {title: "Blended", description: "Combination of two or three dark roasted beans of organic coffees"}
      ]
    },
    {
      title: "Quantity", 
      question: "How much would you like?",
      answers: [
        {title: "250mg", description:"Perfect for the solo drinker. Yields about 12 delicious cups."}, {title: "500mg", description: "Perfect option for a couple. Yields about 40 delectable cups."}, {title: "1000mg", description: "Perfect for offices and events. Yields about 90 delightful cups."}
      ]
    },
    {
      title: "Grind Option", 
      question: "Want us to grind them?",
      answers: [
        {title: "Wholebean", description:"Best choice if you cherish the full sensory experience"}, {title: "Filter", description: "For drip or pour-over coffee methods such as V60 or Aeropress"}, {title: "Cafetiére", description: "Course ground beans specially suited for french press coffee"}
      ]
    },
    {
      title: "Deliveries", 
      question: "How often should we deliver?",
      answers: [
        {title: "Every week", description:"$14.00 per shipment. Includes free first-class shipping."}, {title: "Every 2 weeks", description: "$17.25 per shipment. Includes free priority shipping."}, {title: "Every month", description: "$22.50 per shipment. Includes free priority shipping."}
      ]
    },
  ]

  useEffect(() => {
    // Update the document title using the browser API
    if(!grindDisabled){
      setIsComplete(Object.values(state).some(x => x === ''));
    }
    else{
      let clone = state;
      delete clone["Grind Option"];
      setIsComplete(Object.values(clone).some(x => x === ''));
    }
  }, [state]);

  function handleNav(){
    console.log("test")
  }

  function isEmpty(array){
    
  }

  return(
    <div className="plans-container">
      <nav className="accordion-navbar">
      {
        plans.map((plan, i) => {
          return(
            <div 
              className={`accordion-nav--item ${openAccordion[openAccordion.length - 1] === plan.title ? "selected" : ""}`}
            >
              <h4 className="accordion-nav--number">{`0${i+1}`}</h4>
              <h4 className="accordion-nav--title">{plan.title}</h4>
            </div>
          )
        })
      }
      </nav>
      <div className="plan-items-container">
        {
          plans.map((plan) => {
            return(
              <Plan setOpenAccordion={setOpenAccordion} plan={plan} setState={setState} state={state} openAccordion={openAccordion} setGrindDisabled={setGrindDisabled} grindDisabled={grindDisabled}/>
            )
          })
        }
        <div className="order">
          <div className="order-summary">
            <div className="order-summary--title">Order Summary</div>
            <div className="order-summary--text" onClick={()=> {console.log(isEmpty)}}>
              “I drink my coffee as 
                <span className="order-summary--accent">{state["Preferences"] ? ` ${state["Preferences"]}` : "_____"}</span>,
                
                with a 
                
                <span className="order-summary--accent">{state["Bean Type"] ?  ` ${state["Bean Type"]} ` : "_____"}</span>
                
                type of bean. 
                
                <span className="order-summary--accent">{state["Quantity"] ? ` ${state["Quantity"]}` : "_____"}</span> 
                
                {grindDisabled ? null : `ground ala`} 
                
                <span className="order-summary--accent">{grindDisabled ? null : state["Grind Option"] ?  ` ${state["Grind Option"]}` : "_____"}</span>,

                sent to me <span className="order-summary--accent">{state["Deliveries"] ?  state["Deliveries"] : "_____"}</span>.”
            </div>
          </div>
          <button className="order-create-button" disabled={isComplete}>Create my plan!</button>
        </div>
      </div>
      {/* 01
  Pick your coffee
  Select from our evolving range of artisan coffees. Our beans are ethically
  sourced and we pay fair prices for them. There's new coffees in all profiles
  every month for you to try out.
  
  02
  Choose the frequency
  Customize your order frequency, quantity, even your roast style and grind type.
  Pause, skip or cancel your subscription with no commitment through our online portal.
  
  03
  Receive and enjoy!
  We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning
  world-class coffees curated to provide a distinct tasting experience.

  01 Preferences
  02 Bean type
  03 Quantity
  04 Grind option
  05 Deliveries */}

  

  {/* Modal

  Order Summary

  “I drink coffee _____, with a _____ type of bean. _____ ground ala _____,
  sent to me _____.”

  Is this correct? You can proceed to checkout or go back to plan selection if something 
  is off. Subscription discount codes can also be redeemed at the checkout.

  $_____/month */}

    </div>
  )
}
