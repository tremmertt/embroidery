/* eslint-disable no-useless-constructor */
import { GROUPID } from "../util/settings/config";
import { baseService } from "./baseService";

export class ManageFilmService extends baseService {
  constructor() {
    super();
  }

  getListBanner = async () => {
    return await this.get(`/api/QuanLyPhim/LayDanhSachBanner`);
  };

  getListFilm = async (tenPhim = "") => {
    if (tenPhim.trim() !== "") {
      return this.get(
        `/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUPID}&tenPhim=${tenPhim}`
      );
    }

    const res = await this.get(
      `/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUPID}`
    );
    console.log("res", res);
    return res;
  };

  getListCineSystem = async () => {
    return await this.get(
      `/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUPID}`
    )
      .then((res) => res)
      .catch((err) => {
        console.log("err", err);
        return [];
      });
  };

  addFilmUploadImg = (formData) => {
    return this.post(`api/QuanLyPhim/ThemPhimUploadHinh`, formData);
  };

  getInfoFilm = (maPhim) => {
    return this.get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`);
  };

  updateFlimUpload = (formData) => {
    return this.post(`api/QuanLyPhim/CapNhatPhimUpload`, formData);
  };

  deleteFilm = (maPhim) => {
    return this.delete(`/api/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`);
  };
}

export const manageFilmService = new ManageFilmService();
