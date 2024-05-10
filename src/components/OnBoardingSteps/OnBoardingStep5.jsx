import * as S from "../OnBoardingStep.style";
import usePostDiaryType from "../../../hooks/queries/onboarding/usePostDiaryType";
import { useRecoilValue } from "recoil";
import { userDiaryType } from "../../recoil/atoms";
import SetDiaryStyle from "../SetDiaryStyle/SetDiaryStyle";
import Title from "./title/Title";
import Caption from "./title/Caption";
import BtnComplete from "../common/buttons/complete/BtnComplete";

export default function OnBoardingStep5({onNext}){
    const diaryTypeAtom = useRecoilValue(userDiaryType);
    const mutation = usePostDiaryType();

    const handlePostDiaryStyle= () => {
         const body = {
            userDiaryType : diaryTypeAtom,
         };
 
         mutation.mutate(body, {
             onSucess: (data) => {
                 console.log(data);
             }
         })
     };

    return (
        <S.OnBoardingStepWrapper>
            
            <S.OnBoardingTitleWrapper>
                <Title>
                    어떤 스타일의
                    글을 원하나요?
                </Title>
            </S.OnBoardingTitleWrapper>

            <S.OnBoardingBody>
                <SetDiaryStyle transparency='0.24'/>
                <Caption>'빠른 일기'는 간단한 6가지 질문을 통해 사용자의 하루를 파악하고</Caption>
                <Caption>생성형 AI를 통해 글과 사진이 포함된 일기를 작성합니다.</Caption>
                <Caption>'느린 일기'는 사용자가 직접 글을 작성하고 사진을 첨부합니다.</Caption>
            </S.OnBoardingBody>

            <S.OnBoardingFooter>
                <Caption>일기 작성 페이지는 마이페이지에서 수정 가능합니다.</Caption>
                <BtnComplete onClick={() => {
                        handlePostDiaryStyle();
                        onNext()
                    }}
                >
                    선택 완료
                </BtnComplete>
            </S.OnBoardingFooter>
        </S.OnBoardingStepWrapper>
    )
}