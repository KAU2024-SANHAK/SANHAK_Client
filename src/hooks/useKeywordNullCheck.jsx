import { useState, useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import { feelingKeyword, whenKeyword, whereKeyword, whoKeyword, whatKeyword, realizedKeyword } from '../recoil/atoms'

export function useKeywordNullCheck(){
    const [isNull, setIsNull] = useState(false);
    const keywords = [
        useRecoilValue(feelingKeyword),
        useRecoilValue(whenKeyword),
        useRecoilValue(whereKeyword),
        useRecoilValue(whoKeyword),
        useRecoilValue(whatKeyword),
        useRecoilValue(realizedKeyword),
    ];

    useEffect(()=>{
        keywords.map((keyword, idx)=>{
            console.log(keyword, idx)
            if(keyword === ''){
                setIsNull(true);
            }
        })
    },[])

    return isNull
}