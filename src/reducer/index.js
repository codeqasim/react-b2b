import changeNumber from "./Notification";
import countNumber from "./CountNmber";
import notification from "./NotificationNum";
import cartprice from "./CardPrice";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  changeNumber,
  countNumber,
  notification,
  cartprice,
});
export default rootReducer;
