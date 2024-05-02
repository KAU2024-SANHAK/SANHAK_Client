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

/*
export const diary = atom({
    key: "diary",
    default:{
        diaryId: '',
        diary_content: '',
        advice: '',
        feeling: '',
        imageUrl: '',
        diaryTitle: ''
    },
    effects_UNSTABLE: [persistAtom]
});*/

export const diaryId = atom({
    key: "diaryId",
    default:'',
    effects_UNSTABLE: [persistAtom]
});

export const diary_content = atom({
    key: "diary_content",
    default:'',
    effects_UNSTABLE: [persistAtom]
});

export const advice = atom({
    key: "advice",
    default:'',
    effects_UNSTABLE: [persistAtom]
});

export const feeling = atom({
    key: "feeling",
    default:'',
    effects_UNSTABLE: [persistAtom]
});

export const imageUrl = atom({
    key: "imageUrl",
    default:'',
    effects_UNSTABLE: [persistAtom]
});

export const diaryTitle = atom({
    key: "diaryTitle",
    default:'',
    effects_UNSTABLE: [persistAtom]
});