import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary',
  pure: false
})
export class SummaryPipe implements PipeTransform {


  transform(inputData: string, args?: summaryArg): string | null {
    console.log(inputData);
    if (!inputData) {
      return null;
    }
    if (!args) {
      return inputData;
    }
    if (!args.expand) {
      const max = args.maxlength || inputData.length;
      return inputData.substr(0, max) + '...';
    } else {
      return inputData;
    }
    // console.log(args);

  }

}
export type summaryArg = {
  expand?: boolean,
  maxlength?: number
};
