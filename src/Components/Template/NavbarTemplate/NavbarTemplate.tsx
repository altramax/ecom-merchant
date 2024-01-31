import NavbarTemplateStyle from "./NavbarTemplateStyle";
import { useAppSelector} from "../../../Redux/Hooks"

const NavbarTemplate = () => {
  const color = useAppSelector((state)=>state.color)



  return (

    <NavbarTemplateStyle>
       <div id={color.mode} className="navbar__container">
          <ul>
            <li>Dashboard</li>
            <li>Add Products</li>
            <li> Orders</li>
            <li>Settings</li>
          </ul>
       </div>

    </NavbarTemplateStyle>
  )
}

export default NavbarTemplate;