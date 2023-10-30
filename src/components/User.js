import { useParams } from "react-router-dom"

export default function User(){
const { user } = useParams();

    return(
        <div>
            <h1>User Page</h1>
            <p>Helllo, {user}!</p>
        </div>
    )
}