/* eslint-disable no-useless-constructor */
import { InfoBookTicket } from "../_core/models/InfoBookTicket";
import { baseService } from "./baseService";

export class ManageBookTicketService extends baseService {
  constructor() {
    super();
  }

  getDetailTicketRoom = async (maLichChieu) => {
    return await this.get(
      `api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`
    );
  };

  bookTicket = (infoBookTicket = new InfoBookTicket()) => {
    return this.post(`api/QuanLyDatVe/DatVe`, infoBookTicket);
  };

  createShowTime = (infoShowTime) => {
    return this.post(`api/QuanLyDatVe/TaoLichChieu`, infoShowTime);
  };
}

export const manageBookTicketService = new ManageBookTicketService();
