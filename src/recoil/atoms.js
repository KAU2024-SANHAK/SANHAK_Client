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
/*
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
});*/

export const feelingKeyword = atom({
    key: "feeling",
    default:'',
    effects_UNSTABLE: [persistAtom]
});

export const whoKeyword = atom({
    key: "who",
    default:'',
    effects_UNSTABLE: [persistAtom]
});

export const whenKeyword = atom({
    key: "when",
    default:'',
    effects_UNSTABLE: [persistAtom]
});

export const whereKeyword = atom({
    key: "where",
    default:'',
    effects_UNSTABLE: [persistAtom]
});

export const whatKeyword = atom({
    key: "what",
    default:'',
    effects_UNSTABLE: [persistAtom]
});

export const realizedKeyword = atom({
    key: "realized",
    default:'',
    effects_UNSTABLE: [persistAtom]
});

export const diaryContentState = atom({
    key: "diaryContent",
    default:'',
    effects_UNSTABLE: [persistAtom]
});