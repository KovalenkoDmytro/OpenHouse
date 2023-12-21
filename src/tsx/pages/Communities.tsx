import {ReactElement, ReactNode, useEffect, useMemo, useState} from "react";
import CommunityItem from "../components/CommunityItem";


interface CommunitiesItem {
    id: string, name: string, imgUrl: string, group: string
}
interface CommunitiesItems extends Array<CommunitiesItem>{}
export default function Communities() {
    const [data, setData] = useState([] as Array<object>);
    const toSortCommunities = (communities: CommunitiesItems):object[]=> {
        return communities.sort((a, b) => {
            if (a.group.toUpperCase() < b.group.toUpperCase()) {
                return -1;
            }
            if (a.group.toUpperCase() > b.group.toUpperCase()) {
                return 1;
            }
            return 0;
        })
    }
    useEffect(() => {
        fetch('https://storage.googleapis.com/openhouse-ai-fe-coding-test/communities.json').then((response) => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Something went wrong');
        })
            .then((responseJson) => {
                const sortedData = toSortCommunities(responseJson)
                setData(sortedData)
            })
            .catch((error) => {
                console.log(error)
            });
    }, []);

    return (
        <div className={'communitiesPage'}>
            {data.map(({...item}: any ,index)=>{
                return <CommunityItem {...item} key={index}/>
            })}
        </div>
    )
}