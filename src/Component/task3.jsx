import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
function NavigationMenu() {
  const navigate = useNavigate()
  const handleClick= () => {
    navigate("/users")
  }
  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
      </ul>
    </>
  )
  
 
}
export default NavigationMenu