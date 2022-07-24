/* eslint-disable no-useless-constructor */
import { BaseService } from "./AuthService";
import tempListStaff from "./data/staff.json";

export interface IStaff {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: "admin" | "staff";
  ipAddress: string;
  lastTimeUsing?: string;
}

export default class StaffService {
  static getItemById = async (id: string) => {
    return await BaseService.get(`staffs/${id}`);
  };

  static listItems = async () => {
    return await BaseService.get(`staffs`);
  };

  static addItem = async (item: IStaff) => {
    return await BaseService.post(`staffs`, item);
  };

  static updateItem = async (item: IStaff) => {
    return await BaseService.put(`staffs`, item);
  };

  static deleteItem = async (id: string) => {
    return await BaseService.delete(`staffs/${id}`);
  };

  static createTempData = (
    id: string,
    name: string,
    email: string,
    phone: string,
    role: "admin" | "staff",
    ipAddress: string,
    lastTimeUsing: string
  ) => {
    return { id, name, email, phone, role, ipAddress, lastTimeUsing };
  };

  static handleStaff = (res: any): IStaff[] => {
    // if (res && res.data) {
    // return [];
    // }
    return [
      StaffService.createTempData(
        "tramyeudi",
        "Di Di",
        "duytnb2608@gmail.com",
        "0793335049",
        "admin",
        "12.34.25.5",
        new Date().toISOString()
      ),
      StaffService.createTempData(
        "diyeutram",
        "Be Tram cute cua Di",
        "tram.nh2503@gmail.com",
        "0793335049",
        "staff",
        "12.34.25.2",
        new Date().toISOString()
      ),
      ...tempListStaff
        .map((i) => {
          return {
            id: i.id.toString(),
            name: i.name,
            email: i.email,
            phone: i.phone.toString(),
            role: i.role === "admin" ? "admin" : "staff",
            ipAddress: i.ipAddress,
            lastTimeUsing: i.lastTimeUsing,
          } as IStaff;
        })
        .slice(0, 22),
    ];
  };
}
