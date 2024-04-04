import { DragDropContext } from 'react-beautiful-dnd';
import { Kanban } from "./components/Kanban";

function App() {
  
  const onDragEnd = (result: any) => {
    console.log(result);
  }
  return (
    <>
    <DragDropContext onDragEnd={onDragEnd}>
      <Kanban />
    </DragDropContext>
    </>
  )
}

export default App
