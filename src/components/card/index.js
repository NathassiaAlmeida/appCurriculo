import React from 'react'
import {View, Text} from 'react-native'

import style from './style'

const Card = (props)=> {
    return (
        <View style={style.card_container}>
        <View style={style.card}>
          <View style={style.card_header}>
            <Text>{props.titulo}</Text>
          </View>
            <View style={style.card_content}>
            <Text style={style.card_content_text}>Análise e desenvolvimento de Sistemas - FAM</Text>
            <Text style={style.card_content_text}>Psicologia - Newton</Text>
            </View>
        </View>
      </View>


    )
}

export default Card;