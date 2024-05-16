import { useState } from 'react'
import * as S from './Menu.style'

export default function Menu({id}){
    const [isClicked, setIsClicked] = useState(false);
    
    const deleteDiary = () => {
        
        const body = {
            diaryId: id,
          };
          mutation.mutate(body, {
            onSuccess: (response) => {
              console.log(response.message)
            },
          });
    }

    const editDiary = () => {
        console.log('editing')
    }

    return(
        <S.ButtonWrapper onClick={()=>{setIsClicked(!isClicked)}}> 
            <S.MenuBtn />
            { isClicked ?
            <S.MenuWrapper>
                <S.EditBtn onClick={() => {editDiary()}}>
                    일기 수정하기
                </S.EditBtn>
                <S.DeleteBtn onClick={() => {deleteDiary()}}>
                    일기 삭제하기
                </S.DeleteBtn>
            </S.MenuWrapper>
            :
            null}
        </S.ButtonWrapper>
    )
}