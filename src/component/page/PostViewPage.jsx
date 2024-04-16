import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import CommentList from "../list/CommentList";
import TextInput from "../ui/TextInput";
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

const PostContainer = styled.div`
        padding: 8px 16px;
        border: 1px solid grey;
        border-raduis: 8px;
        background-color: #282c34;
        color: white;
`;

const TitleText = styled.p`
        font-size: 28px;
        font-wieght: 500;
`;

const ContentText = styled.p`
        font-size: 20px;
        line-height: 32px;
        white-space: pre-wrap;
`;

const CommentLabel = styled.p`
        font-size: 16px;
        font-weight: 500;
    }
`;

function PostViewPage(props){
    const Navigate = useNavigate();
    const { postId } = useParams();

    const post = data.find((item) => {
        return item.id == postId;
    });

    const [comment, setComment] = useState("");

    return (
        <Wrapper>
            <Container>
                <Button
                    title = "뒤로 가기"
                    onClick = {() => {
                        Navigate("/");
                    }}
                />

                <PostContainer>
                    <TitleText>{post.title}</TitleText>
                    <ContentText>{post.content}</ContentText>
                </PostContainer>

                <CommentLabel>댓글</CommentLabel>
                <CommentList comments={post.comments} />

                <TextInput
                    height={40}
                    value={comment}
                    onChange={(event) => {
                        setComment(event.target.value);
                    }}
                />

                <Button
                    title = "댓글 작성하기"
                    onClick = {() => {
                        Navigate("/");
                    }}
                />
            </Container>
        </Wrapper>
    );
}

export default PostViewPage;