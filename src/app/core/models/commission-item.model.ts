import { CommissionModel } from './commission.model';
export class CommissionItemModel {
  constructor(
      public commission: CommissionModel,
      public StartDate: string,
      public EndDate: string,
      public DayDeadline: number) {
  }

}
