import { useState } from 'react';
import * as S from './Menu.style';
import useResetDiary from '../../../../hooks/diary/useResetDiaryAtom';
import { useNavigate } from 'react-router-dom';
import useDeleteDiary from '../../../../hooks/queries/create/useDeleteDiary';
import { useRecoilValue } from 'recoil';
import { diaryId } from '../../../../recoil/atoms';

export default function BtnMenu() {
    const [menuOpen, setMenuOpen] = useState(false);
    const { resetAdvice, resetFeeling } = useResetDiary();
    const navigate = useNavigate();
    const id = useRecoilValue(diaryId);
    const mutation = useDeleteDiary();

    const handleDelete = () => {
        mutation.mutate(id, {
            onSuccess: (response) => {
                console.log(response.message);
                navigate('/main');
            },
            onError: (error) => {
                console.error(error);
            }
        });
    };

    const handleEdit = () => {
        resetAdvice();
        resetFeeling();
        navigate('/slowdiary');
    };

    return (
        <S.ButtonWrapper onClick={() => setMenuOpen(!menuOpen)}> 
            <S.MenuBtn />
            {menuOpen && (
                <S.MenuWrapper>
                    <S.EditBtn onClick={() => {handleEdit()}}>
                        일기 수정하기
                    </S.EditBtn>
                    <S.DeleteBtn onClick={() => {handleDelete()}}>
                        일기 삭제하기
                    </S.DeleteBtn>
                </S.MenuWrapper>
            )}
        </S.ButtonWrapper>
    );
}
