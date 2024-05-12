export const convertFeelingText = (feeling) => {
  const feelingMap = {
    HAPPY: "기쁨",
    SAD: "슬픔",
    ANGRY: "분노",
    WORRY: "걱정",
    RELAXED: "평온",
    SURPRISED: "놀람"
  };

  return `#${feelingMap[feeling]}`;
};