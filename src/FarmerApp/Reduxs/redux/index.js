import * as Auths from "./Auth";
import * as Profiles from "./Profile"
import * as SingleImages from "./SingleImage";
import {combineReducers} from "redux"
const rootReduce = combineReducers({
    Auth:Auths,
    Profile:Profiles,
    Single:SingleImages
});
export default rootReduce;