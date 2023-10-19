export interface dataType {
  workerNo: number;
  part: string;
  name: string;
  position: string;
}

export type applyType = {
  workType?: string;
  startDate: string;
  endDate: string;
  reason?: string;
  confirm: boolean;
};

export type applyDataType = dataType & applyType;
