import './index.scss';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';

const Layout = () => (
  <>
    <Sidebar />
    <div className="page">
      <Outlet />
      <span className="tags bottom-tags">&lt;/body&gt;</span>

      <span className="bottom-tag-html">&lt;/html&gt;</span>
    </div>
  </>
);
export default Layout;
