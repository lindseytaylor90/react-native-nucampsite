import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';


function RenderContact() {
    return (
        <ScrollView>
            <Animatable.View animation='fadeInDown' duration={2000} delay={1000}>
            <Card 
                title="Contact Information"
                wrapperStyle={{margin: 10}}
            >
                <Text style={{marginBottom: 10}}>
                    1 Nucamp Way
                    Seattle, WA 98001
                    U.S.A
                </Text>
                <Text>
                    Phone: 1-206-555-1234 
                </Text>
                <Text>
                    Email: campsites@nucamp.co 
                </Text>
            </Card>
            </Animatable.View>
        </ScrollView>
    );
}


class Contact extends Component {

    static navigationOptions ={
        title: 'Contact Us'
    }

    render(){
        return(
            <ScrollView>
                <RenderContact/>
            </ScrollView>
        );
    }
}



export default Contact;