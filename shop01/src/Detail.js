import { useParams } from "react-router-dom";
import styled from 'styled-components'

let YellowBnt = styled.button`
    background : ${props => props.bg};
    color: ${props => props.bg = 'blue'?'white':'black'};
    padding:10px;`
;
let NewBtn = styled.button`
`

function Detail(props) {
    let {id} = useParams();

    return(
        <div className="container">
            <YellowBnt bg="blue">버튼</YellowBnt>
            <YellowBnt bg="orange">버튼</YellowBnt>
        </div>
    )
}