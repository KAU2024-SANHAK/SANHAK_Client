import * as S from './BtnComplete.style';

export default function BtnComplete({onClick, children}){
	return(
		<S.ButtonWrapper onClick={onClick}>
			{children}
		</S.ButtonWrapper>
	)
}