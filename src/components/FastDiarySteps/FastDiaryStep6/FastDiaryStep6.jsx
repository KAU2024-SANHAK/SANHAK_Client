import * as S from '../FastDiaryStep.style'
import { useRecoilState } from 'recoil'
import { realizedKeyword } from '../../../recoil/atoms'
import { useKeywordNullCheck } from '../../../hooks/useKeywordNullCheck'
import { useModal } from '../../../hooks/common/useModal'
import LargeQuestion from '../Questions/LargeQustion'
import BtnNext from '../../common/buttons/Next/BtnNext'
import BtnPrev from '../../common/buttons/Prev/BtnPrev'
import DiaryErrorModal from '../../Modal/DiaryErrorModal'

export default function FastDiaryStep6({onNext, onPrev}){
    const [realized, setRealized] = useRecoilState(realizedKeyword);
    const [isOpen, openModal, closeModal] = useModal();
    const checkNull = useKeywordNullCheck();

    const handleChange = (event)=>{
        setRealized(event.target.value)
    }

    const onClickSubmit = ()=>{
        if(checkNull === true){
            openModal()
        }
        {checkNull === true ? openModal() :
            //api 연결 코드 들어갈 부분 
            onNext()
        }

    }

    return(
        <S.FastDiaryStepWrapper>
            {isOpen && <DiaryErrorModal closeModal={closeModal}/>}
            <LargeQuestion>
                하루를 돌아보면서<br/>
                느꼈던 것들이 있다면 말해줄래?
            </LargeQuestion>
            
            <S.FastDiaryTextAreaWrapper>
                <S.InputArea type='text' placeholder='짧은 글로 작성해주거나 키워드를 입력해줘!' value={realized} onChange={handleChange}/>
            </S.FastDiaryTextAreaWrapper>

            <S.ButtonField>
                <BtnPrev onPrev={onPrev}/>
                <BtnNext onNext={()=>{onClickSubmit()}}/>
            </S.ButtonField>
        </S.FastDiaryStepWrapper>

    )
}