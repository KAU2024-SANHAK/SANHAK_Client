import { useNavigate } from "react-router-dom";
import * as S from "./GoToReplyBtn.style"

export default function GoToReplyBtn() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate()
    }
}