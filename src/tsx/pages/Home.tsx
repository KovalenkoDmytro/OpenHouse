import {useParams} from "react-router-dom";

export default function Home() {
    const {id} = useParams()
    return(
        <>
            home {id}
        </>
    )
}