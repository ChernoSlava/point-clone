import styled from 'styled-components';

const ArticleItemStyled = styled.li`
    text-decoration: none;
    list-style: none;
    color: black;
    text-decoration-line: none;
    display: flex;
    margin-bottom: 24px;
    max-height: 125px;
`;

const ArticleImgBoxStyled = styled.div`
    width: 240px;
`;

const ArticleImgStyled = styled.img`
    width: 100%;
    border-radius: 4px;
    overflow: hidden;
    pointer-events: none;
`;

const ArticleDescriptionBoxStyled = styled.div`
    margin-left: 16px;
    display: flex;
    max-width: 680px;
    flex-direction: column;
    -webkit-box-pack: justify;
    justify-content: space-between;
`;

const ArticleTitleStyled = styled.h3`
    padding: 0;
    margin: 0;
    font-size: 24px;
    line-height: 26px;
    position: relative;
    color: rgb(15, 23, 42);
    letter-spacing: 0px;
    margin: -2.5px 0px 8px;
    font-weight: 500;
`;

const ArticleDescriptionStyled = styled.p`
    padding: 0;
    margin: 0;
    line-height: 20px;
    font-size: 16px;
    font-weight: 400;
    color: rgb(15, 23, 42);
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    margin-bottom: 10px;
`;

const ArticleIcoStyled = styled.img`
    width: 16px;
    height: 16px;
    border-radius: 2px;
    margin-right: 8px;
`;

const ArticleDateStyled = styled.p`
    font-size: 14px;
    color: rgb(128, 128, 128);
    line-height: 0;
    width: max-content;
    margin: 0;
    display: flex;
    align-items: center;
`;




export {
    ArticleItemStyled,
    ArticleImgStyled,
    ArticleImgBoxStyled,
    ArticleTitleStyled,
    ArticleDescriptionStyled,
    ArticleDateStyled,
    ArticleDescriptionBoxStyled,
    ArticleIcoStyled,
}