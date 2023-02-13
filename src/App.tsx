import { View, Text, StyleSheet, SafeAreaView, TextInput, Button, ScrollView } from 'react-native'
import React, { useState } from 'react'
import TodoList, { TodoListType } from './components/TodoList'

function App() {
  let [text, setText] = useState('')
  let [list, setList] = useState<TodoListType[]>([])
  let [id, setId] = useState(1)

  const add = () => {
    setId(id + 1)
    setList([
      {
        id: id,
        text: text,
        done: false
      },
      ...list
    ])
    setText('')
  }

  const deleteItem = (id: number) => {
    setList(list.filter(item => item.id !== id))
  }

  const toogle = (id: number) => {
    setList(list.map(item => {
      if(item.id === id) {
        item.done = !item.done
      }
      return item
    }))
  }

  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.head}>
        <Text style={{ color: 'purple', fontWeight: 'bold', fontSize: 30 }}>todoList</Text>
      </View>
      <View style={{ marginBottom: 10 }}>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          value={text}
          onChangeText={text => setText(text)}
        />
      </View>
      <View style={{ marginBottom: 10 }}>
        <Button
          title='添加'
          onPress={add}
        />
      </View>
      <TodoList list={list} del={deleteItem} toogle={toogle} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    padding: 10,
  },
  head: {
    height: 80,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
})


export default App