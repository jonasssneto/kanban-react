import { ColumnProps } from "./Columns";

export const kanbanData: ColumnProps[] = [
    {
        title: 'To Do',
        cards: [
            { id: '1', text: 'Task 1' },
            { id: '2', text: 'Task 2' },
            { id: '3', text: 'Task 3' }
        ],
        index: 0
    },
    {
        title: 'In Progress',
        cards: [
            { id: '4', text: 'Task 4' },
            { id: '5', text: 'Task 5' }
        ],
        index: 1
    },
    {
        title: 'Done',
        cards: [
            { id: '6', text: 'Task 6' }
        ],
        index: 2
    }
];