import Keycloak from "keycloak-js";
import Nav from "./components/Navbar"
const keycloak = new Keycloak({
 url: "http://localhost:8080/auth",
 realm: "Axiom",
 clientId: "React-auth",
});
export default keycloak;