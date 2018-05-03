import capitalize from "capitalize";
import paths from "../constants/custom-paths";

let defaultState = {
  tempName: "",
  name: "",
  insult: "",
  paths
};

if (typeof window !== "undefined") {
  const pathname = window.location.pathname;
  const paths = pathname.split("/");
  const name = capitalize(paths[1] || "");
  const insult = capitalize(paths[2] || "");

  defaultState = {
    ...defaultState,
    tempName: name,
    name,
    insult
  };
}

export default defaultState;
