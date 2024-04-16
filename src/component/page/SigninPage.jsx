import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TextSmallInput from "../ui/TextSmallInput";
import Button from "../ui/Button";

const Wrapper = styled.div`
    width: calc(100% - 32px);
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-item: flex-start;
    justify-content: center;
    }
`;

const Container = styled.div`
    width: 100%;
    max-width: 720px;

    :not(:last-child){
        margin-bottom: 10px;
    }
`;

const TextLabel = styled.p`
        font-size: 16px;
        font-weight: 500;
    }
`;

function PostWritePage(props){
    const Navigate = useNavigate();
    
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    return (
        <Wrapper>
            <Container>
                <TextLabel>아이디</TextLabel>
                <TextSmallInput
                    value={title}
                    onChange={(event) => {
                        setTitle(event.target.value);
                    }}
                />

                <TextLabel>비밀번호</TextLabel>
                <TextSmallInput
                    value={content}
                    onChange={(event) => {
                        setTitle(event.target.value);
                    }}
                />

                <TextLabel>비밀번호 확인</TextLabel>
                <TextSmallInput
                    value={content}
                    onChange={(event) => {
                        setTitle(event.target.value);
                    }}
                />

                <Button
                    title = "회원 가입"
                    onClick = {() => {
                        Navigate("/");
                    }}
                />
            </Container>
        </Wrapper>
    );
}

export default PostWritePage;