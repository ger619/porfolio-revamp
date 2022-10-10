import './index.scss';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';

const Layout = () => (
  <>
    <Sidebar />
    <div className="page">
      <span className="tags top-tags">&lt;body&gt;</span>
      <Outlet />

    </div>
  </>
);
export default Layout;
