import { KanbanCard, KanbanColumn } from "./Columns";

interface BoardProps {
    columns: { 
        title: string; 
        cards: KanbanCard[] 
    }[];
  }

const KanbanBoard = (props: BoardProps) => {
    const { columns } = props;
    return (
        <div className="board">
          {columns.map((column, index) => (
            <KanbanColumn key={index} title={column.title} cards={column.cards} index={index} />
          ))}
        </div>
      );
};

export {
    KanbanBoard
};

