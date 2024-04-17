import { useState } from 'react'
import * as S from './PopUp.style'

export default function PopUp() {
    const [isClick, setIsClick] = useState(false);

    return(
    //     {isClick === 1 false ?
    //     :
    // }
        <S.PopUpWrapper>
            <S.SlideWrapper>
                <S.PopUpSlide/>
            </S.SlideWrapper>
            
            <S.PopUpTitle>
                꿀비의 답장
            </S.PopUpTitle>
            
            {children}
        </S.PopUpWrapper>
    )
}