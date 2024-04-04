import { Draggable, Droppable } from 'react-beautiful-dnd';
import { KanbanCard } from "./Card";

export interface KanbanCard {
    id: string;
    text: string;
}

export interface ColumnProps {
  title: string;
  cards: KanbanCard[];
  index: number;
}

const KanbanColumn = (props: ColumnProps) => {
  const { title, cards, index  } = props;
  return (
    <div className="column">
      <h2>{title}</h2>
      <Droppable droppableId={`column-${index}`} type="CARD">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {cards.map((card, index) => (
              <Draggable key={card.id} draggableId={card.id} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <KanbanCard text={card.text} index={index}/>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export { KanbanColumn };

