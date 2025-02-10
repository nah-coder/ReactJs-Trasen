import TrangChu from '../pages/Trangchu/Trangchu';
import SanPham from "../pages/SanPham/SanPham";
import TinTuc from "../pages/TinTuc/TinTuc";
import LienHe from "../pages/LienHe/LienHe";
import GioiThieu from "../pages/GioiThieu/GioiThieu";
import ChiTietSP from "../pages/ChiTietSP/ChiTietSP";
import routes from '../config/route';
export const publicRoutes=[
    { path: routes.tc, component: TrangChu },
    { path: routes.SanPham, component: SanPham },
    { path: routes.TinTuc, component: TinTuc },
    { path: routes.LienHe, component: LienHe },
    { path: routes.GioiThieu, component: GioiThieu },
    { path: routes.ChiTietSP, component: ChiTietSP },
];