export * from './guest.service';
import { GuestService } from './guest.service';
export * from './weatherForecast.service';
import { WeatherForecastService } from './weatherForecast.service';
export const APIS = [GuestService, WeatherForecastService];
