import { useState } from 'react';
import { IcCancel } from '../../../assets/svg';
import * as S from './CurrentBox.style';

function CurrentBox () {
    const [boxes, setBoxes] = useState([
        { id: 1, text: "일기 1" },
        { id: 2, text: "일기 2" },
        { id: 3, text: "일기 3" },
    ]);

    const handleDelete = (id) => {
        setBoxes(boxes.filter(box => box.id !== id));
        console.log(" 버튼 눌렸다.");
    };

    return (
        <S.CurrentBoxListWrapper>
        {boxes.map((box) => (
            <S.CurrentBoxWrapper key={box.id}>
                <S.Text>{box.text}</S.Text>
                <IcCancel onClick={() => handleDelete(box.id)} />
            </S.CurrentBoxWrapper>
        ))}
    </S.CurrentBoxListWrapper>
    )
}

export default CurrentBox;