class UberCalculator {
    constructor(baseFare, costPerMinute, costPerMile) {
      this.baseFare = baseFare;
      this.costPerMinute = costPerMinute;
      this.costPerMile = costPerMile;
    }
  
    calculatePrice(distance, time) {
      const fare = this.baseFare + (this.costPerMinute * time) + (this.costPerMile * distance);
      return fare;
    }
  }
  
  const uberXCalculator = new UberCalculator(2.5, 0.3, 1.5);
  const distance = 10; 
  const time = 20; 
  const price = uberXCalculator.calculatePrice(distance, time);
  console.log(`The estimated UberX price for a ${distance}-mile trip taking ${time} minutes is $${price.toFixed(2)}.`);
  