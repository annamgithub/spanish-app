import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import 'react-native-gesture-handler';
import { sentences } from './Sentences'

const objValues = Object.values(sentences)
let gameData = objValues;

//Shuffle Function (Fisher-Yates)
function shuffle(arrToShuffle) {
    let m = arrToShuffle.length, t, i;
    // While there remain elements to shuffle…
    while (m) {
        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);
        // And swap it with the current element.
        t = arrToShuffle[m];
        arrToShuffle[m] = arrToShuffle[i];
        arrToShuffle[i] = t;
    }
    return arrToShuffle;
}


class ConPresent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            defaultView: true,
            answeredCorrectly: '',
        }
    }

    // Function to move to the next question
    moveToNext = () => {
        let gameData = shuffle(objValues)
        console.log(gameData);
        this.setState({ defaultView: true, answeredCorrectly: '' })
    }

    render() {
        // START OF FOR-LOOP: Entire game under a for-loop
        for (let i = 0; i < gameData.length; i++) {

            // Function to insert blank into Spanish question
            function spanishQWithBlank() {
                let arr = gameData[i].es.split(" ")
                let lengthArr = arr.length;
                let index = 0;

                for (index >= 0; index < lengthArr; index++) {
                    if (arr[index].toLowerCase() === gameData[i].conjugatedVerb) {
                        let convertToStr = arr[index].toString()
                        let replaceWithBlank = gameData[i].es.replace(convertToStr, "______")
                        return replaceWithBlank
                    }
                }
            }

            // Variable Declarations within loop
            const choices = [gameData[i].conjugatedVerb, gameData[i].wrongAnswers[0], gameData[i].wrongAnswers[1], gameData[i].wrongAnswers[2]];
            const shuffled = shuffle(choices)
            const answerChoices = shuffled.map((choice, index) => ({
                label: choice,
                value: index,
            }))
            const correctAnswer = gameData[i].conjugatedVerb
            console.log("Correct Answer:", correctAnswer);
            
            if (this.state.defaultView === true && this.state.answeredCorrectly === '') {
                return (
                    // Default View - Start
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Text>{spanishQWithBlank()}</Text>
                        <Text>{gameData[i].en}</Text>
                        {answerChoices.map((_obj, id) => (
                            <Button
                                className="choice-button"
                                onPress={() => {
                                    if (answerChoices[id].label === gameData[i].conjugatedVerb) {
                                        this.setState({ defaultView: false, answeredCorrectly: 'true' })
                                        return console.log("CORRECT!");
                                    } else if (answerChoices[id].label !== gameData[i].conjugatedVerb) {
                                        this.setState({ defaultView: false, answeredCorrectly: 'false' })
                                        return console.log("WRONG!");
                                    }
                                }
                                }
                                title={answerChoices[id].label}>
                            </Button>
                        ))}
                    </View>
                    // Default View - End
                )
            } else if (this.state.defaultView === false && this.state.answeredCorrectly === 'true') {
                return (
                    // View when correct answer is selected - Start
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Text>{gameData[i].es}</Text>
                        <Text>{gameData[i].en}</Text>
                        <Text> Correct! Muy bien! </Text>
                        <Button
                            title="next-question"
                            onPress={() => this.moveToNext()}

                        ></Button>
                        {answerChoices.map((_obj, id) => (
                            <Button
                                className="choice-button"
                                onPress={() => {
                                    if (answerChoices[id].label === gameData[i].conjugatedVerb) {
                                        this.setState({ defaultView: false, answeredCorrectly: 'true' })
                                        return console.log("CORRECT!");
                                    } else if (answerChoices[id].label !== gameData[i].conjugatedVerb) {
                                        this.setState({ defaultView: false, answeredCorrectly: 'false' })
                                        return console.log("WRONG!");
                                    }
                                }
                                }
                                title={answerChoices[id].label}>
                            </Button>
                        ))}
                    </View>
                    // View when correct answer is selected - End
                )
            } else if (this.state.defaultView === false && this.state.answeredCorrectly === 'false') {
                return (
                    // View when wrong answer is selected - Start
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Text>{gameData[i].es}</Text>
                        <Text>{gameData[i].en}</Text>
                        <Text>Incorrect! The right answer is {correctAnswer}.
                        </Text>
                        <Button
                            title="next-question"
                            onPress={() => this.moveToNext()}
                        ></Button>
                        {answerChoices.map((_obj, id) => (
                            <Button
                                className="choice-button"
                                onPress={() => {
                                    if (answerChoices[id].label === gameData[i].conjugatedVerb) {
                                        this.setState({ defaultView: false, answeredCorrectly: 'true' })
                                        return console.log("CORRECT!");
                                    } else if (answerChoices[id].label !== gameData[i].conjugatedVerb) {
                                        this.setState({ defaultView: false, answeredCorrectly: 'false' })
                                        return console.log("WRONG!");
                                    }
                                }
                                }
                                title={answerChoices[id].label}>
                            </Button>
                        ))}
                    </View>
                    // View when wrong answer is selected - End
                )
            }
        }
    }
}

export default ConPresent;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});