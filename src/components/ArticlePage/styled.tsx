import styled from 'styled-components';

const ArticlePageStyled = styled.div`
    height: 100%;
    max-width: 984px;
    padding: 24px;
    border-radius: 8px;
`;

const ArticleTitleStyled = styled.h2`
    padding: 0;
    margin: 0;
    color: rgb(15, 23, 42);
    font-size: 40px;
    letter-spacing: -1px;
    line-height: 44px;
    font-weight: 700;
    margin: 12px 0px 30px;
    text-align: center;
`;

const ArticleDescriptionStyled = styled.p`
    padding: 0;
    margin: 0;
    color: rgb(15, 23, 42);
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 0px;
    margin-top: 16px;
    margin-bottom: 24px;
    line-height: 28px;
`;
const ArticleImageStyled = styled.img`
    max-width: 100%;
    border-radius: 10px;
`;

const ArticleBlotStyled = styled.p`
    padding: 0;
    margin: 0;
    margin: 20px 0;
`;

export {
    ArticlePageStyled,
    ArticleTitleStyled,
    ArticleDescriptionStyled,
    ArticleImageStyled,
    ArticleBlotStyled,
}
