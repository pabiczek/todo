import React, { FC } from 'react';
import { ScrollView, Image, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { View } from 'react-native';


const Lorem = styled.Text`
    margin: 50px 20px 10px 20px;
    font-size: 20px;
`;


const About: FC = () => {
    return (
      
       <Wrapper>
       <View
       style={{
         flex: 1,
         flexDirection: 'column',
         alignItems: 'stretch',
       }}>

           <Lorem>This is the "about" page of the To Do List Application
               ->Scroll Down
           </Lorem>

        <View style={{ height: 50, backgroundColor: '#7deb34' }} />
        <View style={{ height: 50, backgroundColor: '#34eb89' }} />
        <View style={{ height: 50, backgroundColor: '#34c3eb' }} />
        <View style={{ height: 50, backgroundColor: '#7deb34' }} />
        <View style={{ height: 50, backgroundColor: '#34eb89' }} />
        <View style={{ height: 50, backgroundColor: '#34c3eb' }} />
        <View style={{ height: 50, backgroundColor: '#7deb34' }} />
        <View style={{ height: 50, backgroundColor: '#34eb89' }} />
        <View style={{ height: 50, backgroundColor: '#34c3eb' }} />
        <View style={{ height: 50, backgroundColor: '#7deb34' }} />
        <View style={{ height: 50, backgroundColor: '#34eb89' }} />
        <View style={{ height: 50, backgroundColor: '#34c3eb' }} />
        <View style={{ height: 50, backgroundColor: '#7deb34' }} />
        <View style={{ height: 50, backgroundColor: '#34eb89' }} />
        <View style={{ height: 50, backgroundColor: '#34c3eb' }} />

      </View>

      <Logo source={require('../../assets/panda.jpg')}/>
      <Logo2 source={require('../../assets/panda.jpg')}/>



      </Wrapper>

    );
};

const Logo = styled.Image`
    width:400px;
    height:400px;
`;

const Logo2 = styled.Image`
    width:400px;
    height:400px;
    transform: rotate(180deg);
`;

const Wrapper = styled.ScrollView`

`;

export default About;