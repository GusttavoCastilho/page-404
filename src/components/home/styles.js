import styled from 'styled-components';


export const BoxHome = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #fff;
    display: flex;
    flex-direction: column;
`;

export const ContainerHeader = styled.div`
    width: 100%;
    height: 80px;

    display: flex;
    align-items: center;

    padding-left: 77px;
`;

export const ContainerContent = styled.div`
    width: 100%;
    height: 100%;
    
    display: flex;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`;

export const Left = styled.div`
    width: 100%;
    height: 100%;
    display: flex;

    align-items: center;
    justify-content: center;
`;

export const Image = styled.img`
    width: 539.22px;
    height: 447.43px;

    @media screen and (max-width: 768px) {
        width: 286.83px;
        height: 238px;
    }
`;

export const Right = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    
    justify-content: center;

    @media screen and (max-width: 768px) {
       padding-left: 24px;
    }
`;

export const Title404 = styled.h3`
    color: #333;
    font-family: 'Inconsolata';
    font-weight: 700;
    font-size: 24px;
    line-height: 25.18px;

`;


export const TitleH1 = styled.h1`
    font-size: 64px;
    line-height: 94.74px;
    font-family: 'Space Mono';
    font-weight: 700;
    color: #333;
    padding-right: 119px;

    @media screen and (max-width: 768px) {
        font-size: 48px;
    } 
`;


export const Description = styled.p`
    font-size: 24px;
    line-height: 35.54px;
    color: #333;
    padding-top: 36px;
    font-family: 'Space Mono';
    font-weight: 400;
    padding-right: 323px;

    @media screen and (max-width: 768px) {
        font-size: 18px;
        line-height: 26.66px;
        padding-right: 24px;
    }
`;

export const Button = styled.button`
    width: 216px;
    height: 68px;
    background-color: #333333;
    color: #fff;
    border: none;

    font-family: 'Space Mono';
    font-size: 14px;
    font-weight: 700;
    line-height: 20.73px;

    margin-top: 64px;

    cursor: pointer;

    :hover {
        opacity: 0.8;
    }
`;

export const DivTextFooter = styled.div`
    width: 100%;
    height: 60px;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const TextFooter = styled.p`
    font-size: 14px;
    font-family: 'Montserrat';
    font-weight: 600;
    line-height: 17px;
    color: #333;

    text-align: center;
`;