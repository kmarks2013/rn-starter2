import React, { useReducer } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ColorCounter from '../components/ColorCounter'

const COLOR_INCREMENT = 15
// by convention a reducer is created outside of the component
const reducer = (state, action) => {
    // state === { color: number <-- ex: red: 0}
    // action === { colorToChange: 'red || 'green' || 'blue', amount: 15 || -15}
    switch (action.colorToChange){
        case 'red':
            //never going to run: state.red === state.red +15
            return {...state, red: state.red + action.amount}
        case 'green':
            return {...state, green: state.green + action.amount}
        case 'blue':
            return {...state, blue: state.blue + action.amount}
        default:
    }

}

const SquareScreen = () => {
    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue:0})
    // console.log(state)
    const { red, green, blue } = state

    return (
        <View>
            <ColorCounter
                //bad example:
                // onIncrease={() => {
                //     if (red + COLOR_INCREMENT > 255)
                //         setRed( red + COLOR_INCREMENT)
                // }}
                onIncrease={() => dispatch({ colorToChange: 'red', amount: COLOR_INCREMENT})}
                onDecrease={() => dispatch({ colorToChange: 'red', amount: -1 * COLOR_INCREMENT })}
                color="Red"
            />
            <ColorCounter
                color="Green"
                onIncrease={() => dispatch({ colorToChange: 'green', amount: COLOR_INCREMENT})}
                onDecrease={() => dispatch({ colorToChange: 'green', amount: -1 * COLOR_INCREMENT})}
            />
            <ColorCounter
                color="Blue"
                onIncrease={() => dispatch({ colorToChange: 'blue', amount: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ colorToChange: 'blue', amount:-1 *COLOR_INCREMENT} )}
            />
            <View style={{ height:150, width:150, backgroundColor: `rgb(${red}, ${green}, ${blue})` }} />
        </View>
    )
}

export default SquareScreen

const styles = StyleSheet.create({})


// import React, { useState } from 'react'
// import { StyleSheet, Text, View } from 'react-native'
// import ColorCounter from '../components/ColorCounter'

// const COLOR_INCREMENT = 15

// const SquareScreen = () => {
//     const [red, setRed] = useState(0)
//     const [green, setGreen] = useState(0)
//     const [blue, setBlue] = useState(0)

//     // const setColor = (color, change) => {
//         //       // color === 'red', 'green', 'blue
//         //     // change === +15, -15
//         //     if (color === 'red'){
//             //         if (red + change > 255 || red + change < 0) {
//                 //             return
//                 //         } else {
//                     //             setRed(red + change)
//                     //         }
//                     //     }
//                     // }
                    
//                     // const setColor = (color, change) => {
//                         //     switch (color) {
//                             //         case 'red':
//                             //             if (red + change > 255 || red +change < 0){
//                                 //                 return
//                                 //             } else{
//                                     //                 setRed(red + change)
//                                     //             }
//                                     //     }
//                                     // }
                                    
    // const setColor = (color, change) => {
    //     switch (color) {
    //         case 'red':
    //             red + change > 255 || red + change < 0 ? null : setRed(red + change)
    //             return
    //         case 'green':
    //             green + change > 255 || green + change < 0 ? null : setGreen(green + change)
    //             return
    //         case 'blue':
    //             blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change)
    //             return
    //         default:
    //             return
    //     }
    // }
                    
//     return (
//         <View>
//             <ColorCounter
//                 //bad example:
//                 // onIncrease={() => {
//                     //     if (red + COLOR_INCREMENT > 255)
//                     //         setRed( red + COLOR_INCREMENT)
//                     // }}
//                     onIncrease={() => setColor('red', COLOR_INCREMENT)}
//                     onDecrease={() => setColor('red', -1 *COLOR_INCREMENT )}
//                     color="Red"
//                     />
//             <ColorCounter
//                 color="Green"
//                 onIncrease={() => setColor('green', COLOR_INCREMENT)}
//                 onDecrease={() => setColor('green', -1 *COLOR_INCREMENT )}
//                 />
//             <ColorCounter
//                 color="Blue"
//                 onIncrease={() => setColor('blue', COLOR_INCREMENT )}
//                 onDecrease={() => setColor('blue', -1 *COLOR_INCREMENT )}
//                 />
//             <View style={{ height:150, width:150, backgroundColor: `rgb(${red}, ${green}, ${blue})` }} />
//         </View>
//     )
// }

// export default SquareScreen

// const styles = StyleSheet.create({})

