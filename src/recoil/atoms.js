import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } =recoilPersist({
   key: 'localstorage',
   storage: localStorage,
})

export const UserDiaryType = atom({
   key: 'userDiaryType',
   default: '',
   effects_UNSTABLE: [persistAtom]
});

export const fastDiaryKeywords = atom({
    key: "fastDiaryKeywords",
    default:{
        feeling: '',
        what: '',
        who: '',
        when: '',
        where: '',
        realized: ''
    },
    effects_UNSTABLE: [persistAtom]
})