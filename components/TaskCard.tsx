import { View, StyleSheet, Platform } from 'react-native'
import React from 'react'
import { Text, Card, Avatar, Button } from 'react-native-paper'
import { TaskInfo, useTaskStore } from '@/models/task'

const formatDate = (date?: Date) => {
  if (!date) return "N/A"
  return new Intl.DateTimeFormat('en-IN', {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(new Date(date))
}

const TaskCard = ({ task, idx }: { task: TaskInfo; idx: number }) => {
  const { deleteTask, completeTask } = useTaskStore()

  return (
    <View style={[styles.container, styles.shadow]}>
      <Card.Title
        title={task.title}
        titleVariant="titleLarge"
        subtitle={task.description}
        left={(props) => <Avatar.Icon {...props} size={24} icon="folder" />}
        right={(props) => (
          <Avatar.Icon
            {...props}
            size={20}
            icon={task.isComplete ? 'check' : 'dots-vertical'}
            style={{
              backgroundColor: task.isComplete ? '#4caf50' : undefined,
            }}
          />
        )}
      />
      <Card.Content>
        <View style={styles.dateContainer}>
          <Text style={styles.dateText} variant="bodySmall">
            Start: {formatDate(task.startTime)}
          </Text>
          <Text style={styles.dateText} variant="bodySmall">
            End: {formatDate(task.endTime)}
          </Text>
        </View>
      </Card.Content>
      <View style={styles.buttonContainer}>
        <Button
          icon="delete"
          mode="contained"
          onPress={() => deleteTask(idx)}
          buttonColor="red"
        >
          Delete
        </Button>
        <Button
          icon="check"
          mode="contained"
          onPress={() => completeTask(idx)}
          disabled={task.isComplete}
        >
          Complete
        </Button>
      </View>
    </View>
  )
}

export default TaskCard

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#aaaabb33',
    paddingHorizontal: 10,
    marginHorizontal: 10,
    marginVertical: 10,
    backgroundColor: '#fff',
  },
  shadow: {
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 5,
  },
  dateText: {
    borderWidth: 0.5,
    paddingVertical: 5,
    paddingHorizontal: 8,
    borderRadius: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 20,
    marginVertical: 10,
    gap: 10,
  },
})
