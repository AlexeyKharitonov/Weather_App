import moment from "moment";

export const getCurrentData = () => {
  return moment().format("DD MM YYYY г.");
};
