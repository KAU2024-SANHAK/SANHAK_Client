export const convertFeelingText = (feeling) => {
  const feelingMap = {
    HAPPY: "기쁨",
    SAD: "슬픔",
    ANGRY: "분노",
    WORRIED: "걱정",
    RELAX: "평온",
    SURPRISED: "놀람"
  };

  return `#${feelingMap[feeling]}`;
};