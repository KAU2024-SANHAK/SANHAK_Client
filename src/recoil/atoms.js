import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } =recoilPersist({
   key: 'localstorage',
   storage: localStorage,
})

export const userDiaryType = atom({
   key: 'userDiaryType',
   default: '',
   effects_UNSTABLE: [persistAtom]
});

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

export const diaryId = atom({
    key: "diaryId",
    default: 0,
    effects_UNSTABLE: [persistAtom]
});

export const diaryTitle = atom({
    key: "diaryTitle",
    default: '',
    effects_UNSTABLE: [persistAtom]
});

export const createdDate = atom({
    key: "createdDate",
    default: '',
    effects_UNSTABLE: [persistAtom]
})

export const diaryContent = atom({
    key: "diaryContent",
    default: '',
    effects_UNSTABLE: [persistAtom]
});

export const diaryFeeling = atom({
    key: "diaryFeeling",
    default: '',
    effects_UNSTABLE: [persistAtom]
});

export const diaryImage = atom({
    key: "diaryImage",
    default: '',
    effects_UNSTABLE: [persistAtom]
});

export const diaryAdvice = atom({
    key: "diaryAdvice",
    default: {
        spicy: '',
        kind: '',
    },
    effects_UNSTABLE: [persistAtom]
});

export const diaryListAtom = atom({
    key: 'diaryList',
    default: {},
    effects_UNSTABLE: [persistAtom],
})

export const clickedDiary = atom({
    key: 'clickedDiary',
    default: {},
    effects_UNSTABLE: [persistAtom],
})