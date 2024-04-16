import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PostList from "../list/PostList";
import Button from "../ui/Button";
import data from "../../data.json";

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
        margin-bottom: 16px;
    }
`;

const Container2 = styled.div`
    width: 100%;
    max-width: 720px;
    align-item: flex-end;

    :not(:last-child){
        margin-right: 16px;
        margin-bottom: 16px;
    }
`;

function MainPage(props){
    const {} = props;

    const Navigate = useNavigate();

    return (
        <Wrapper>
            <Container2>
                <Button
                    title = "로그인"
                    onClick = {() => {
                    Navigate("/log-in");
                    }}
                />
                <Button
                    title = "회원 가입"
                    onClick = {() => {
                    Navigate("/sign-in");
                    }}
                />
            </Container2>
             
            <Container>
                <Button
                    title = "글 작성하기"
                    onClick = {() => {
                        Navigate("/post-write");
                    }}
                />

                <PostList
                    posts = {data}
                    onClickItem = {(item) => {
                        Navigate(`/post/${item.id}`);
                    }}
                />
            </Container>
        </Wrapper>
    );
}

export default MainPage;