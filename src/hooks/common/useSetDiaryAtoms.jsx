import { useRecoilState } from 'recoil';
import { diaryImage, diaryContent, diaryTitle, diaryFeeling } from '../../recoil/atoms';

export function setDiaryAtoms ({dataImage, dataContent, dataTitle, dataFeeling}){
    const [image, setImage] = useRecoilState(diaryImage);
    const [content, setContent] = useRecoilState(diaryContent);
    const [title, setTitle] = useRecoilState(diaryTitle);
    const [feeling, setFeeling] = useRecoilState(diaryFeeling);

    const setAtoms = () => {
        setImage(dataImage);
        setContent(dataContent);
        setTitle(dataTitle);
        setFeeling(dataFeeling);
    }

    return setAtoms;

}
export default setDiaryAtoms;