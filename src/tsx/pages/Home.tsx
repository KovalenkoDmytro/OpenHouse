import {useParams} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";


export default function Home() {
    const {id} = useParams()
    return(
        <MainLayout pageTitle={'Home'}>
            home {id}
        </MainLayout>
    )
}