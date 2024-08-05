import { BaseResponseDTO } from "./baseResponseDTO";

export class GeneralResponseDTO extends BaseResponseDTO {

    success: boolean;
    msg: string;
    data: any;
  
  }
  