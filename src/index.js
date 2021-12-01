import { AppRegistry } from "react-native";
import App from "./App";
//import TableComp from "./TableComp";

AppRegistry.registerComponent("App", () => App);
/* AppRegistry.registerComponent("App", () => TableComp); */

AppRegistry.runApplication("App", {
  rootTag: document.getElementById("root")
});

/* AppRegistry.runApplication("App", {
  rootTag: document.getElementById("root")
}); */
