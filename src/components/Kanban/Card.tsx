
interface CardProps {
  text: string;
  index: number;
}

const KanbanCard = (props: CardProps) => {
    const { text, index } = props;
    return (
        <div className="card" key={index}>
          {text}
        </div>
      );
}

export {
    KanbanCard
};

