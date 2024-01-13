import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateTime',
  standalone: true
})
export class DateTimePipe implements PipeTransform {
  public transform(value: Date, ...args: unknown[]): string {
    return `${value.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: "long", day: "numeric" })} @ ${value.toLocaleTimeString('en-US', { hour: 'numeric', minute: "2-digit", hour12: true })}`;
  }
}
