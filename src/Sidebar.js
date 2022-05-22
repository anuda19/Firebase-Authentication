import { useGlobalContext } from "./Context";
import { FaTimes, FaList } from "react-icons/fa";
import { links, social } from "./data";

const Sidebar = () => {
  const {isSideBarOpen, CloseSideBar, OpenSideBar} = useGlobalContext();
  return (
      <>
    <aside className={`${isSideBarOpen ? "sidebar show-sidebar" : "sidebar"}`}>
      
          <div className="sidebar-header">
            <button className="close-btn" onClick={CloseSideBar}>
              <FaTimes />
            </button>
          </div>
        <div className="container">
      <ul className="links ">
        {links.map((link) => {
          const { id, text, icon, url } = link;
          return (
            <li key={id}>
              <a href={url}>
                {icon}
                {text}
              </a>
            </li>
          );
        })}
      </ul>
      
      <ul className="social d-flex mx-5">
        {social.map((socio) => {
          const { id, icon, url } = socio;
          return (
            <li key={id}>
              <a href={url}>
              
                {icon}
              </a>
            </li>
          );
        })}
      </ul>
      </div>
    </aside>
    <div className="sidebar-header">
            <button className="btn btn-primary" onClick={OpenSideBar}>
              <FaList />
            </button>
          </div>
    </>
  );
};

export default Sidebar;
