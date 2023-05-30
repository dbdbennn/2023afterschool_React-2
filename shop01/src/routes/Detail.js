import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from 'styled-components';
let CustomButton = styled.button`
    background: ${props => props.bg};
    color: ${props => props.bg == 'blue' ? 'white' : 'black'};
    padding: 10px;
`

let NewBtn = styled(CustomButton)`
    color: ${props => props.bg == 'green' ? 'white' : 'black'};
`

let Box = styled.div`
    background: grey;
    padding: 20px;
`

function Detail(props) {
   let [alert, setAlert] = useState(true)

    useEffect(() => {
        let a = setTimeout(() => {
            setAlert(false);
        }, 2000)
        return () => {
            clearTimeout(a)
        }
    })

    let {id} = useParams();
    return (
        <div className="container">
            {
                alert == true ? 
                <div className="alert alert-warning" >
                    2초이내 구매시 할인
                </div>
                : null
            }
            <Box>
                <CustomButton bg="blue">스타일버튼</CustomButton>
                <NewBtn bg="green">스타일버튼</NewBtn>
            </Box>
            <div className="row">
                <div className="col-md-6">
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{props.shoes[id].title}</h4>
                    <p>{props.shoes[id].content}</p>
                    <p>{props.shoes[id].price}</p>
                    <button className="btn btn-danger">주문하기</button> 
                </div>
            </div>
        </div> 
    )
}

export default Detail;