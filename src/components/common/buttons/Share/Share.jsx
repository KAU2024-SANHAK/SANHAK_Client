import * as S from './Share.style';
import { shareKakao } from '../../../../utils/shareKakao';
import sampleImage from '../../../../assets/img/dayHoneyBear.webp'

export default function BtnShare({title, image, id}){
	const handleShare = () => {
		// if(image === null){
		// 	image = sampleImage;
		// }
		console.log(image)
		shareKakao(title, image, id)
	};

	return(
		<S.ButtonWrapper onClick={()=>{handleShare()}}> 
			<S.ShareBtn/>
		</S.ButtonWrapper>
	)
}