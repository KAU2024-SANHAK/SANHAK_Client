import { atom } from "recoil";

// export const HoneyState = atom({
//   key: "honey",

//   default: {},
// });
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

})