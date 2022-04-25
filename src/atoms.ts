import { atom } from "recoil";

export const isDarkmodeAtom = atom({
    key: 'isDark', // unique ID (with respect to other atoms/selectors)
    default: false, // default value (aka initial value)
});