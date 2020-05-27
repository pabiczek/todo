import React, { FC } from 'react';
import { ScrollView, View, Image, StyleSheet } from 'react-native';
import styled from 'styled-components/native';



const HomePage: FC = () => {
    return (
        <TextWrap>
            <Logo source={require('../../assets/tdd.png')}/>
            <HomeText>To Do List!</HomeText>
        </TextWrap>
    );
};

const Logo = styled.Image`
    height: 300px;
    width: 300px;
    margin:100px auto;
`;

const TextWrap = styled.ScrollView`
    min-height:100%;
    background-color: #7deb34;
`;

const HomeText = styled.Text`
    margin: 10px 20px;
    font-size: 40px;
    text-align: center;
`;

export default HomePage;




