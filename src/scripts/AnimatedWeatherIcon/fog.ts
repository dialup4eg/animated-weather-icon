import WeatherPartAbstract from './weather-part-abstract';
import { AnimatedWeatherTypes } from './weather-types';
import { delay } from 'q';

export default class Fog extends WeatherPartAbstract {
  protected baseClass: string = 'Fog';
  protected types: AnimatedWeatherTypes[] = [AnimatedWeatherTypes.Fog];

  private fogBars: SVGPathElement[];

  protected getElements(): void {
    this.fogBars = [...(<any>this.context.querySelectorAll(`.${this.baseClass}__bar`))];

    this.activationPaths = this.fogBars;
  }

  protected renderIn(): Promise<void> {
    return this.render();
  }

  protected renderOut(): Promise<void> {
    return this.render(false);
  }

  private async render(animateIn: boolean = true): Promise<void> {
    this.fogBars.forEach(bar => bar.classList[animateIn ? 'add' : 'remove'](`${this.baseClass}__bar--animate`));

    await delay(500);
  }
}
