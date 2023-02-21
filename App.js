import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem'

export default function App() {


  const [modalIsVisible, setModelIsVisible] = useState(false)
  const [courseGoals, setCourseGoasl] = useState([])

  function addGoalHandler(enteredGoalText) {

    setCourseGoasl((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() }])

      endModal(false)
  }




  function onDeleteHandler(id) {

    setCourseGoasl((currentCourseGoals) => {
      return (
        currentCourseGoals.filter((goal) => goal.id !== id)
      )
    }
    )
  }


  function startModal() {
    setModelIsVisible(true)
  }

  function endModal() {
    setModelIsVisible(false)
  }


  return (
    <>
      <StatusBar style='light'/>
      <View style={styles.appContainer}>

        <Button title="Add New Goal" color={"#5e0acc"}

          onPress={startModal}
        />
        <GoalInput visible={modalIsVisible}
          onAddGoal={addGoalHandler}
          onEndModel={endModal} />

        <View style={styles.goalsContainer}>
          <FlatList data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem text={itemData.item.text}
                  id={itemData.item.id}
                  onDelete={onDeleteHandler}
                />
              );
            }

            }
            keyExtractor={(item, index) => {
              return item.id;
            }}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#1e085a'
  },

  goalsContainer: {
    flex: 5,
  },


});
