import { Text, View, SafeAreaView, ScrollView, Dimensions } from "react-native";
import { dummyTasks } from "@/constants/data";
import TaskCard from "@/components/TaskCard";
import { useRouter } from "expo-router";
import { useCallback } from "react";
import { Button } from "react-native-paper";
import { useTaskStore } from "@/models/task";

const {width,height} = Dimensions.get("screen")
export default function Index() {
  const router = useRouter()
  const handelAddTask = useCallback(()=>{
    router.push("/add")
  },[router])
  const {tasks} = useTaskStore()
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ScrollView style={{flex:1,flexDirection:'column', width:width,gap:10}}>
      <Button style={{marginVertical:10,marginHorizontal:10}}  textColor="blue" buttonColor="#0aa3" icon={"plus"} onPress={handelAddTask}>Add Task</Button>

        {
          tasks.map((task, idx) => <TaskCard key={idx} task={task} idx={idx} />)
        }
      </ScrollView>
    </SafeAreaView>
  );
}
