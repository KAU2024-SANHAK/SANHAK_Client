export const shareKakao = (diaryTitle, diaryImage) => {
  if(window.Kakao){
    const kakao = window.Kakao;
    if(!kakao.isInitialized()){
      kakao.init(process.env.VITE_KAKAO_JAVASCRIPT_KEY);
    }

    kakao.Link.sendDefault({
      objectType: 'feed',
      content: {
        title: diaryTitle,
        description: '오늘 일기에 대한 조언과 감정, 사진까지! 허니어리에서 확인해보세요',
        imageUrl: diaryImage,
        link:{
          //배포 url로 수정
          mobileWebUrl: `${
            import.meta.VITE_LOCAL_URL
          }/dairyview`,
          webUrl: `${
            import.meta.VITE_LOCAL_URL
          }/dairyview`,
        },
      },
      buttons: [
        {
          title: "일기 보러가기",
          link:{
            //배포 url로 수정
            mobileWebUrl: `${
              import.meta.VITE_LOCAL_URL
            }/dairyview`,
            webUrl: `${
              import.meta.VITE_LOCAL_URL
            }/dairyview`,
          },
        },
      ],

    });
  }
}