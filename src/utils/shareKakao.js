
export const shareKakao = (diaryTitle, diaryImage) => {
  console.log(diaryTitle)
  if(window.Kakao){
    const kakao = window.Kakao;
    if(!kakao.isInitialized()){
      kakao.init(import.meta.env.VITE_KAKAO_JAVASCRIPT_KEY);
    }

    kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: diaryTitle,
        description: '오늘 일기에 대한 조언과 감정, 사진까지! 허니어리에서 확인해보세요',
        imageUrl: diaryImage,
        link:{
          //배포 url로 수정
          mobileWebUrl: `${
            import.meta.env.VITE_APP_BASE_URL
          }diaryview`,
          webUrl: `${
            import.meta.env.VITE_APP_BASE_URL
          }diaryview`,
        },
      },
      buttons: [
        {
          title: "일기 보러가기",
          link:{
            //배포 url로 수정
            mobileWebUrl: `${
              import.meta.env.VITE_APP_BASE_URL
            }diaryview`,
            webUrl: `${
              import.meta.env.VITE_APP_BASE_URL
            }diaryview`,
          },
        },
      ],

    });
  }
}