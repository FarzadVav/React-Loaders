import { atom } from "recoil";

const pageLoadingAtom = atom({
  key: "pageLoading",
  default: true,
})

export default pageLoadingAtom