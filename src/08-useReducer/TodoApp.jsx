import { useReducer } from "react"
import { todoReducer } from "./todoReducer"

const initialState = [
    {
        id: new Date().getTime(),
        description: 'Recolectar la piedra el alma',
        done: false,
    },
    {
        id: new Date().getTime() * 3,
        description: 'Recolectar la piedra el alma',
        done: false,
    }
]

export const TodoApp = () => {

    const [todos, dispatch] = useReducer( todoReducer(), initialState)

  return (
    <>
        <h1>TodoApp</h1>
        <hr />

        <div className="row">
            <div className="col-7">
                <ul className="list-group">
                    <li className="list-group-item">Item 1</li>
                    <li className="list-group-item">Item 2</li>
                    <li className="list-group-item">Item 3</li>
                </ul>
            </div>

            <div className="col-5">
                <h4>Agregar TODO</h4>
                <hr />
                <form>
                    <input 
                        type="text"
                        placeholder="Que ahy que hacer?"
                        className="form-control"
                    />

                    <button 
                        type="submit"
                        className="btn btn-outline-primary mt-3"
                    >
                        Agregar
                    </button>
                </form>
            </div>
        </div>
    </>
  )
}
