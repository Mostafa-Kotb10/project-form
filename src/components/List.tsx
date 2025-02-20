
interface Card {
    name: string;
    desc: string
}

interface Potato {
    name: string;
    desc: string
}

interface ListProps {
    render: (item: Card | Potato) => React.ReactNode;
    items: Card[] | Potato[]
}

const List = ({render, items}: ListProps) => {
  return (
    <div>
        {items.map(render)}
    </div>
  )
}

export default List