import { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { feelingKeyword, whenKeyword, whereKeyword, whoKeyword, whatKeyword, realizedKeyword } from '../recoil/atoms';

export function useKeywordNullCheck(){
  const [isNull, setIsNull] = useState();
  const keywords = [
    useRecoilValue(feelingKeyword),
    useRecoilValue(whenKeyword),
    useRecoilValue(whereKeyword),
    useRecoilValue(whoKeyword),
    useRecoilValue(whatKeyword),
    useRecoilValue(realizedKeyword),
  ];

  useEffect(()=>{
    setIsNull(false);
    keywords.map((keyword, idx)=>{
      if(keyword === ''){
        setIsNull(true);
      }
    })
  },[keywords]);

  return isNull
}