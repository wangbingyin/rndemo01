import { View, Text, ScrollView, StyleSheet, Button, TouchableOpacity } from "react-native"

export interface TodoListType {
  id: number
  text: string,
  done: boolean
}

function TodoList(props: { list: TodoListType[], del: (id: number) => void, toogle: (id: number) => void }) {
  return (
    <ScrollView style={styles.list}>
      {props.list.map((item, index) => {
        return (
          <View style={styles.item} key={item.id}>
            <View style={{ justifyContent: 'center', alignItems: 'center', width: '10%' }}>
              <TouchableOpacity 
              style={[styles.label]}
              onPress={() => props.toogle(item.id)}>
                {item.done && <Text>√</Text>}
              </TouchableOpacity>
            </View>
            
            {item.done && <Text style={{ width: '80%', textDecorationLine :'line-through' }}>
              {item.text}
            </Text>}
            {!item.done && <Text style={{ width: '80%' }}>
              {item.text}
            </Text>}
            <View style={{ justifyContent: 'center', alignItems: 'center', width: '10%' }}>
              <Button
                title='删除'
                onPress={() => props.del(item.id)} />
            </View>
          </View>
        )
      })}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  item: {
    padding: 10,
    borderColor: '#2979ff',
    borderWidth: 1,
    display: 'flex',
    flexDirection: 'row'
  },
  label: {
    height: 20,
    width: 20,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default TodoList