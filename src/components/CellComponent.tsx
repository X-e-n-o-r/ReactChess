import { FC } from "react"
import { Cell } from "../models/Cell"

interface CellProps {
  cell: Cell;
  selected: Boolean;
  click: (cell: Cell) => void;
}

const CellComponent: FC<CellProps> = ({cell, selected, click}) => {
  return (
    <div className={['cell', cell.color, selected ? 'selected' : ''].join(' ')}
         onClick={() => click(cell)}
         style={{background: cell.avaliable && cell.figure ? 'rgb(126, 18, 143)' : ''}}>
      {cell.avaliable && !cell.figure && <div className={"avaliable"} />}
      {cell.figure?.logo && <img src={cell.figure.logo}/>}
    </div>
  )
}

export default CellComponent
