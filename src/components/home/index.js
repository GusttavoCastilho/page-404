/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

import {
    Left,
    Right,
    Title404,
    BoxHome,
    Image,
    TitleH1,
    ContainerContent,
    Description,
    Button,
    TextFooter,
    DivTextFooter,
    ContainerHeader
} from './styles';

export default function Home() {
    return (
        <>
            <BoxHome>
                <ContainerHeader>
                    <Title404>404 not found</Title404>
                </ContainerHeader>
                <ContainerContent>
                    <Left>
                        <Image src="./assets/Scarecrow.png" />
                    </Left>
                    <Right>
                        <TitleH1>I have bad news for you</TitleH1>
                        <Description>The page you are looking for might be removed or is temporarily unavailable</Description>
                        <Button>BACK TO HOME PAGE</Button>
                    </Right>
                </ContainerContent>
            </BoxHome>
            <DivTextFooter>
                <TextFooter>Gustavo Castilho @ DevChallenges.io</TextFooter>
            </DivTextFooter>
        </>
    )
}