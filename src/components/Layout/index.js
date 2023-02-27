import './index.scss';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';

const Layout = () => (
  <>
    <Sidebar />
    <div className="page">
      <Outlet />
    </div>
  </>
);
export default Layout;
