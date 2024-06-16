import * as S from './DiaryView.style';
import { useState } from 'react';
import CreatedDiary from '../../components/CreatedDiary/CreatedDiary';
import DiaryViewPopUp from './DiaryViewPopUp/DiaryViewPopUp';
import PopUp from '../../components/PopUp/PopUp';
import { useRecoilValue, useRecoilState } from 'recoil';
import { diaryId, diaryAdvice, diaryTitle, diaryContent, createdDate, diaryImage } from '../../recoil/atoms';
import usePostAdvice from '../../hooks/queries/create/usePostAdvice';
import useDeleteDiary from '../../hooks/queries/create/useDeleteDiary';
import BtnShowAdvice from '../../components/common/buttons/ShowAdvice/BtnShowAdvice';
import useResetDiary from '../../hooks/diary/useResetDiaryAtom';
import CircleLoading from '../../components/Loading/CircleLoading/CircleLoading';
import BtnBack from '../../components/common/buttons/Back/BtnBack';
import BtnMenu from '../../components/common/buttons/Menu/Menu';
import BtnShare from '../../components/common/buttons/Share/Share';
import { useNavigate } from 'react-router-dom';
import { useModal } from '../../hooks/common/useModal';
import OptionModal from '../../components/Modal/OptionModal';

export default function DiaryView() {

  const [isClick, setIsClick] = useState(false);
  const title = useRecoilValue(diaryTitle);
  const content = useRecoilValue(diaryContent);
  const date = useRecoilValue(createdDate);
  const id = useRecoilValue(diaryId);
  const image = useRecoilValue(diaryImage);
  const [advice, setAdvice] = useRecoilState(diaryAdvice);
  const isAdvice = advice.kind !== null && advice.kind !== "";
  const postMutation = usePostAdvice();
  const deleteMutation = useDeleteDiary();
  const navigate = useNavigate();
  const { resetAdvice, resetContent, resetTitle, resetFeeling, resetId, resetImage } = useResetDiary();
  const [isOpen, openModal, closeModal] = useModal();

  console.log(image);

  const handleRequest = () => {
    console.log('요청하기')
    const body = {
      diaryId: id,
    }
    postMutation.mutate(body,{
      onSuccess: (response) => {
        console.log(response.data);
        setAdvice(response.data.advice);
      }
    })
    setIsClick(!isClick);
  }

  const handleResponse = () => {
    console.log('보여주기')  
    setIsClick(!isClick);
  }

  const handleBack = () => {
    resetAdvice();
    resetContent();
    resetTitle();
    resetFeeling();
    resetId();
    resetImage();
    navigate('/main');
  };

  const handleDelete = () => {
    deleteMutation.mutate(id, {
      onSuccess: (response) => {
        console.log(response.message);
        navigate('/main');
      },
      onError: (error) => {
        console.error(error);
      }
    });
  };

  return (
    <S.DiaryViewPageWrapper>
        {isOpen && 
          <OptionModal 
          closeModal={closeModal} 
          handleOption={handleDelete}
          optionText='일기 삭제하기'
          closeText='돌아가기'
          >
            일기를 삭제하시겠습니까?
          </OptionModal>  
        }
        <S.DiaryCompWrapper>
          <S.HeaderWrapper>
            <BtnBack handleClick={handleBack} />
            
            <S.ExtraBtnWrapper>
              <BtnShare title={title} image={image} id={id}/>
              <BtnMenu openModal={openModal}/>
            </S.ExtraBtnWrapper>
          </S.HeaderWrapper>

          <S.CreatedDiaryWrapper>
            <CreatedDiary
              title={title}  
              date={date}
              content={content}
              id={id}
            />
          </S.CreatedDiaryWrapper>
        </S.DiaryCompWrapper>
        
        <S.GoToReplyBtnWrapper>
          <BtnShowAdvice handleClick={isAdvice ?() => {handleResponse()}: () => {handleRequest()}}>
            {isAdvice ? '답장 보러가기' : '답장 생성하기'}
          </BtnShowAdvice>
        </S.GoToReplyBtnWrapper>
        
        {isClick === true ? (
            <S.PopUpWrapper>

              {/* <S.HoneyBearWrapper>
                <S.HoneyBear height='17rem'/>
              </S.HoneyBearWrapper> */}

              <PopUp name="꿀비의 답장">
                {postMutation.isPending ?
                  <CircleLoading>
                    조언을 생성 중입니다. <br />
                    새로고침시 오류가 발생할 수 있으니, 20초 정도만 기다려주세요!<br />
                    생성된 조언이 안 보인다면 새로고침을 해보세요!
                  </CircleLoading> 
                : 
                  <DiaryViewPopUp 
                    spicy={advice.spicy} 
                    kind={advice.kind} 
                  />
                }
                
                <S.CloseBtn onClick={()=>{setIsClick(false)}} >
                  <S.XBtn />
                </S.CloseBtn>

              </PopUp>

            </S.PopUpWrapper>    
          ) : null}
    </S.DiaryViewPageWrapper>
  );
}


