import {StyleSheet,View,Text,Pressable} from 'react-native'

function GaolItem(props) {

    return( 
            <View style={styles.goalsInput}>
        <Pressable 
        android_ripple={{color:'#dddddd'}} 
        onPress={props.onDelete.bind(this, props.id)}
        style = {({pressed}) => pressed && styles.pressedItem}

        >

            <Text style={styles.inputColor}>{props.text}
            </Text>
    </Pressable>

        </View>
    )
}

export default GaolItem

const styles = StyleSheet.create({


  goalsInput: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc'


  },


  pressedItem:{
    opacity: 0.5,
  },

  inputColor: {
    padding: 8,
    color: 'white'
  }
})