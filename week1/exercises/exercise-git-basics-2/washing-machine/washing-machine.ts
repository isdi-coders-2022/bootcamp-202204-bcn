class WashingMachine {
  private program: number;
  private coldWater: boolean;
  private softener: boolean;
  private isWorking: boolean;

  public wash(): void {
    this.isWorking = true;
  }
}
