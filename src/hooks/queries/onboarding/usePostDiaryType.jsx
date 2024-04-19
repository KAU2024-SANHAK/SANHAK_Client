import { useMutation } from "react-query"
import { instance } from "../../../apis/client"

//recoil에서 diarytype 받아오기. merge 하고 진행하겠습니다.
export const postUserDiaryType = async ()=>{
    instance.post('/api/member/character', body)
}

export const usePostDiaryType = ()=>{
    const mutation = useMutation({
        mutationFn: postUserDiaryType,
        onSuccess: ()=>{
            console.log('요청이 성공했습니다.')
        }
    })
}