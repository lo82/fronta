import { NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Inject, Injectable, inject } from '@angular/core';
import * as moment from 'moment';

@Injectable()
export class NgbCustomDateParserFormatter extends NgbDateParserFormatter {

  constructor(@Inject(String) private momentFormat: string) {
    super();
    
  };

  format(date: NgbDateStruct): string {
    if (date === null) {
      return '';
    }
    const d = moment({ year: date.year,
      month: date.month - 1,
      date: date.day });
    return d.isValid() ? d.format(this.momentFormat) : '';
  }

  parse(value: string): NgbDateStruct {
    if (!value) {
      return null;
    }
    const d = moment(value, this.momentFormat);
    return d.isValid() ? { year: d.year(),
      month: d.month() + 1,
      day: d.date() } : null;
  }
}