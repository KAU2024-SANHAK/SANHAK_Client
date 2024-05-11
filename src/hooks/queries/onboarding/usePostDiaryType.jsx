import { serverInstance } from "../../../apis/client"
import { useMutation } from "@tanstack/react-query"

//recoil에서 diarytype 받아오기. merge 하고 진행하겠습니다.
export const postUserDiaryType = async (body)=>{
    serverInstance.post('/api/member/character', body)
}

const usePostDiaryType = () => {
    const mutation = useMutation({
        mutationFn: postUserDiaryType,
        onSuccess: ()=>{
            console.log('요청이 성공했습니다.')
        }
    })
    return mutation;
};
export default usePostDiaryType;