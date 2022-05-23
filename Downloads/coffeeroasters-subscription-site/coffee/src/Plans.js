import { useState } from "react";
import Plan from "./components/Plan";

export default function Plans(){
  const [state, setState] = useState({
    preferences: '', 
    beanType: '',
    quantity: '',
    grindOption: '',
    deliveries: ''
  });
  const plans = [
    {
      name: "preferences", 
      question: "How do you drink your coffee?",
      answers: [
        {title: "Capsule", description:"Compatible with Nespresso systems and similar brewers"}, {title: "Filter", description: "For pour over or drip methods like Aeropress, Chemex, and V60"}, {title: "Espresso", description: "Dense and finely ground beans for an intense, flavorful experience"}
      ]
    },
    {
      name: "beanType", 
      question: "What type of coffee?",
      answers: [
        {title: "Single origin", description:"Distinct, high quality coffee from a specific family-owned farm"}, {title: "Decaf", description: "Just like regular coffee, except the caffeine has been removed"}, {title: "Blended", description: "Combination of two or three dark roasted beans of organic coffees"}
      ]
    },
    {
      name: "quantity", 
      question: "How much would you like?",
      answers: [
        {title: "250mg", description:"Perfect for the solo drinker. Yields about 12 delicious cups."}, {title: "500mg", description: "Perfect option for a couple. Yields about 40 delectable cups."}, {title: "1000mg", description: "Perfect for offices and events. Yields about 90 delightful cups."}
      ]
    },
    {
      name: "grindOption", 
      question: "Want us to grind them?",
      answers: [
        {title: "Wholebean", description:"Best choice if you cherish the full sensory experience"}, {title: "Filter", description: "For drip or pour-over coffee methods such as V60 or Aeropress"}, {title: "Cafetiére", description: "Course ground beans specially suited for french press coffee"}
      ]
    },
    {
      name: "deliveries", 
      question: "How often should we deliver?",
      answers: [
        {title: "Every week", description:"$14.00 per shipment. Includes free first-class shipping."}, {title: "Every 2 weeks", description: "$17.25 per shipment. Includes free priority shipping."}, {title: "Every month", description: "$22.50 per shipment. Includes free priority shipping."}
      ]
    },
  ]

  function handleChecked(){
    console.log("test")
  }

  return(
    <div>
      <div>
        {
          plans.map((plan) => {
            return(
              <Plan plan={plan} setState={setState} state={state}/>
            )
          })
        }
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

  <h2>Order Summary</h2>
  <p>
    “I drink my coffee as {state.preferences}, with a {state.beanType} type of bean. {state.quantity} ground ala {state.grindOption},
    sent to me {state.deliveries}.”
  </p>

  Create my plan!

  {/* Modal

  Order Summary

  “I drink coffee _____, with a _____ type of bean. _____ ground ala _____,
  sent to me _____.”

  Is this correct? You can proceed to checkout or go back to plan selection if something 
  is off. Subscription discount codes can also be redeemed at the checkout.

  $_____/month */}

  Checkout
    </div>
  )
}