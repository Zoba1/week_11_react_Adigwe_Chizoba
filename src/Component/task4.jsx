import { Route } from "react-router"
import { Form } from "react-router-dom"



function Routing() {
  return (
    <>
    <Route path="/users" component={Form} />
    </>
   )
}
export default Routing