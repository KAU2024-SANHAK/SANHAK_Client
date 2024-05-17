import { useState } from 'react';
import * as S from './Menu.style';
import useResetDiary from '../../../../hooks/diary/useResetDiaryAtom';
import { useNavigate } from 'react-router-dom';
import useDeleteDiary from '../../../../hooks/queries/create/useDeleteDiary';

export default function Menu({ id }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const { resetAdvice, resetFeeling } = useResetDiary();
    const navigate = useNavigate();
    const mutation = useDeleteDiary();

    const handleDelete = () => {
        const body = {
            diaryId: id
        };
        console.log(body)
        mutation.mutate(body, {
            onSuccess: (response) => {
                console.log(response.message);
            },
            onError: (error) => {
                console.error(error);
            }
        });
    }

    const handleEdit = () => { 
        resetAdvice();
        resetFeeling();
        navigate('/slowdiary');
    }

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
    )
}
