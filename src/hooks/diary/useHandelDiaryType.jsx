import { userDiaryType } from '../../recoil/atoms';
import { useRecoilValue } from 'recoil';
import { usePostDiaryType } from '../queries/onboarding/usePostDiaryType';

const useHandleDiaryType = () => {
    const diaryType = {
        userDiaryType : useRecoilValue(userDiaryType),
    };
    const { mutation } = usePostDiaryType();

    mutation.mutate(diaryType, {
        onSucess: (data) => {
            console.log(data.message);
        }
    });
};
export default useHandleDiaryType;