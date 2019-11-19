export class CounterService {

  activeToInactiveCounter = 0;
  inactiveToActiveCounter = 0;

  setActiveToInactive() {
    this.activeToInactiveCounter++;
    console.log(this.activeToInactiveCounter);
  }

  setInactiveToActive() {
    this.inactiveToActiveCounter++;
    console.log(this.inactiveToActiveCounter);
  }
}
