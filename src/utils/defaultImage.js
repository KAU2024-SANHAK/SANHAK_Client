import morningHoneyBear from '../assets/img/morningHoneyBear.webp';
import dayHoneyBear from '../assets/img/dayHoneyBear.webp';
import eveningHoneyBear from '../assets/img/eveningHoneyBear.webp';
import nightHoneyBear from '../assets/img/nightHoneyBear.webp';

const defaultImage = () => {
  const curHour = new Date().getHours(); 
  if(curHour < 7){
    return nightHoneyBear;
  }
  else if (curHour < 10){
    return morningHoneyBear;
  }
  else if ( curHour < 19){
    return dayHoneyBear;
  }
  else return eveningHoneyBear;
};
export default defaultImage;