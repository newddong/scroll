import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

export default ScrollTest = () => {
    const page = Array.from({length:20},(_,i)=>i);
    const scrollBegin = (e) => {
        console.log('scrollBegin');
        // console.log(e.nativeEvent);
    }
    const scrollEnd = (e) => {
        console.log('scrollEnd');
        console.log(e.nativeEvent.contentOffset);
        e.nativeEvent.contentOffset = {
            y:300,
        }
        console.log(e.nativeEvent.contentOffset);
    }
    const scrollEndDrag = (e) => {
        console.log('scrollEndDrag');
        // console.log(e.nativeEvent);
    }
    const onLayout = (e) => {
        console.log('onlayout');
        console.log(e.nativeEvent);
    }
    return (
        <View style={style.container} onLayout={onLayout}>
            <ScrollView style={{width:300,height:600,backgroundColor:'yellow',position:'absolute',top:20}}
                contentOffset={{x:0,y:0}}
                onScrollBeginDrag={scrollBegin}
                onMomentumScrollEnd={scrollEnd}
                onScrollEndDrag={scrollEndDrag}
            >
                {page.map((v,i)=>
                    <View key={i} style={{width:200,height:200,backgroundColor:'blue',marginBottom:10}}>
                        <Text style={{fontSize:150}}>{v}</Text>
                    </View>
                )}

                
            </ScrollView>
        </View>
    );


}

const style = StyleSheet.create({
    container:{
        // backgroundColor:'transparent',
        flex:1
    }
});