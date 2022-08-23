import {Path} from "react-router-dom"

export declare function useLocation(): Location;

interface Location extends Path {
  state: {email : string,senha : string};
  key: Key;
}