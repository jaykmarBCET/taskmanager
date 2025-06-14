import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
export default function RootLayout() {
  return (
    <> 
     <StatusBar   animated hidden/>
      <Stack screenOptions={{headerShown:true}} >
        <Stack.Screen name="index" options={{
          headerTitle: 'Task'
        }} />
        <Stack.Screen name="add" options={{
          headerTitle: "Add Task"
        }} />

      </Stack>
    </>
  )
}
