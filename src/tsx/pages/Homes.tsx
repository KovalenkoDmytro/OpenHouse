import {useEffect, useState} from "react";
import {useLocation, useParams} from "react-router-dom";
import HomeItem from "../components/HomeItem";
import PrevPageBtn from "../components/PrevPageBtn";
import MainLayout from "../layouts/MainLayout";

export default function Homes() {
    const [homes, setHomes] = useState([] as Array<object>);
    const {id} = useParams()
    const {state} = useLocation()
    const toGetHomes = async () => {
        const response = await fetch('https://storage.googleapis.com/openhouse-ai-fe-coding-test/homes.json');
        if (response.ok) {
            return response.json();
        }
        throw new Error('Something went wrong');
    }

    useEffect(() => {
        toGetHomes()
            .then((responseJson) => {
                const communityHomes = responseJson.filter(({...item}: any) => {
                    return item.communityId === id
                })
                setHomes(communityHomes)
            })
            .catch((error) => {
                console.log(error)
            });
    }, []);


    return (
        <MainLayout pageTitle={state !== null ? state : 'community homes'}>
            <PrevPageBtn title={'communities'}/>
            <div className={'homeItems'}>
                {homes.length ? homes.map(({...item}: any, index) => {
                    return <HomeItem {...item} key={index}/>
                }) : <div>There are not homes yet</div>}

            </div>
        </MainLayout>
    )
}