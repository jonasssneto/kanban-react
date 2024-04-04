import { KanbanBoard } from "./Board"
import { kanbanData } from "./mockData"
import "./style.css"

const Kanban = () => {
    return (
        <KanbanBoard columns={kanbanData} />
    )
}

export {
    Kanban
}

