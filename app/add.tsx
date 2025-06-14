import React, { useState } from 'react';
import { View, SafeAreaView, Platform, Alert } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import { TaskInfo, useTaskStore } from '@/models/task';

const Add = () => {
  const [showStart, setShowStart] = useState(false);
  const [showEnd, setShowEnd] = useState(false);
  const [task, setTask] = useState<TaskInfo>({
    isComplete: false,
    title: '',
    description: '',
    startTime: new Date(),
    endTime: new Date(),
  });

  const { createTask } = useTaskStore();

  const handleTask = () => {
    createTask(task);
    Alert.alert("Task added successfully")
    task.title ="",
    task.description ="",
    task.startTime = new Date()
    task.endTime = new Date()
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ padding: 16 }}>
        <TextInput
          label="Title"
          mode="outlined"
          value={task.title}
          onChangeText={(text) => setTask({ ...task, title: text })}
          style={{ marginBottom: 10 }}
        />

        <TextInput
          label="Description"
          mode="outlined"
          value={task.description}
          onChangeText={(text) => setTask({ ...task, description: text })}
          style={{ marginBottom: 10 }}
        />

        <TextInput
          label="Start Time"
          mode="outlined"
          value={task.startTime&&task.startTime.toLocaleTimeString()}
          onFocus={() => setShowStart(true)}
          showSoftInputOnFocus={false}
          style={{ marginBottom: 10 }}
        />

        <TextInput
          label="End Time"
          mode="outlined"
          value={task.endTime&&task.endTime.toLocaleTimeString()}
          onFocus={() => setShowEnd(true)}
          showSoftInputOnFocus={false}
          style={{ marginBottom: 10 }}
        />

        {showStart && (
          <DateTimePicker
            value={task?.startTime as Date}
            mode="time"
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            onChange={(e, date) => {
              setShowStart(false);
              if (date) setTask({ ...task, startTime: date });
            }}
          />
        )}

        {showEnd && (
          <DateTimePicker
            value={task?.endTime as Date}
            mode="time"
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            onChange={(e, date) => {
              setShowEnd(false);
              if (date) setTask({ ...task, endTime: date });
            }}
          />
        )}

        <Button mode="contained" onPress={handleTask} style={{ marginTop: 20 }}>
          Create Task
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default Add;
