/* eslint-disable no-useless-constructor */
import { GROUPID } from "../util/settings/config";
import { baseService } from "./baseService";

export class ManageUserService extends baseService {
  constructor() {
    super();
  }

  getInfoUser = async () => {
    return await this.post(`api/QuanLyNguoiDung/ThongTinTaiKhoan`);
  };

  login = async (infoLogin) => {
    return await this.post(`api/QuanLyNguoiDung/DangNhap`, infoLogin);
  };

  register = async (registerInfo) => {
    return await this.post(`api/QuanLyNguoiDung/DangKy`, registerInfo);
  };

  getInfoUsername = () => {
    return this.post(`api/QuanLyNguoiDung/ThongTinTaiKhoan`);
  };

  getUserList = () => {
    return this.get(`api/QuanLyNguoiDung/LayDanhSachNguoiDung`);
  };

  getUserListPagination = (pageNumber = 1, pageSize = 10) => {
    return this.get(
      `api/QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang?soTrang=${pageNumber}&soPhanTuTrenTrang=${pageSize}`
    );
  };

  getSearchUserListPagination = (
    tuKhoa = "",
    pageNumber = 1,
    pageSize = 10
  ) => {
    return this.get(
      `api/QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang?MaNhom=${GROUPID}&tuKhoa=${tuKhoa}&soTrang=${pageNumber}&soPhanTuTrenTrang=${pageSize}`
    );
  };

  getSearchUserList = (tuKhoa = "") => {
    return this.get(
      `api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GROUPID}&tuKhoa=${tuKhoa}`
    );
  };
  addUser = (infoUser) => {
    return this.post(`api/QuanLyNguoiDung/ThemNguoiDung`, infoUser);
  };
  updateUser = (infoUser) => {
    return this.put(`api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`, infoUser);
  };
  deleteUser = (taiKhoan) => {
    return this.delete(`api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`);
  };

  getInfoUserByUsername = (taikhoan) => {
    return this.post(
      `api/QuanLyNguoiDung/LayThongTinNguoiDung?taiKhoan=${taikhoan}`
    );
  };
}

export const manageUserService = new ManageUserService();
