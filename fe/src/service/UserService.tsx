/* eslint-disable no-useless-constructor */
import { BaseService } from "./AuthService";
import tempListUser from "./data/user.json";
export interface IUser {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: "admin" | "user";
  ipAddress: string;
  lastTimeUsing: string;
}

export default class UserService {
  static getItemById = async (id: string) => {
    return await BaseService.get(`users/${id}`);
  };

  static listItems = async () => {
    return await BaseService.get(`users`);
  };

  static addItem = async (item: IUser) => {
    return await BaseService.post(`users`, item);
  };

  static updateItem = async (item: IUser) => {
    return await BaseService.put(`users`, item);
  };

  static deleteItem = async (id: string) => {
    return await BaseService.delete(`users/${id}`);
  };

  static createTempData = (
    id: string,
    name: string,
    email: string,
    phone: string,
    role: "admin" | "user",
    ipAddress: string,
    lastTimeUsing: string
  ) => {
    return { id, name, email, phone, role, ipAddress, lastTimeUsing };
  };

  static handleUser = (res: any): IUser[] => {
    if (res && res.data) {
      return [];
    }
    return [
      UserService.createTempData(
        "1",
        "Di Di",
        "duytnb2608@gmail.com",
        "0793335049",
        "admin",
        "12.34.25.5",
        new Date().toISOString()
      ),
      UserService.createTempData(
        "2",
        "Be Tram cute cua Di",
        "tram.nh2503@gmail.com",
        "0793335049",
        "user",
        "12.34.25.2",
        new Date().toISOString()
      ),
      ...tempListUser.map((i) => {
        return {
          id: i.id.toString(),
          name: i.name,
          email: i.email,
          phone: i.phone.toString(),
          role: i.role === "admin" ? "admin" : "user",
          ipAddress: i.ipAddress,
          lastTimeUsing: i.lastTimeUsing,
        } as IUser;
      }),
    ];
  };
}

export const userService = new UserService();
