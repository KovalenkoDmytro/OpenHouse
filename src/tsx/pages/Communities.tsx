import {useEffect, useState} from "react";
import CommunityItem from "../components/CommunityItem";


interface CommunitiesItem {
    id: string,
    name: string,
    imgUrl: string,
    group: string
}

interface CommunitiesItems extends Array<CommunitiesItem> {
}

export default function Communities() {
    const [communities, setCommunities] = useState([] as Array<object>);
    const [homes, setHomes] = useState([] as Array<object>);
    const toSortCommunities = (communities: CommunitiesItems): object[] => {
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
    const toGetCommunities = async () => {
        const response = await fetch('https://storage.googleapis.com/openhouse-ai-fe-coding-test/communities.json');
        if (response.ok) {
            return response.json();
        }
        throw new Error('Something went wrong');
    }
    const toGetHomes = async () => {
        const response = await fetch('https://storage.googleapis.com/openhouse-ai-fe-coding-test/homes.json');
        if (response.ok) {
            return response.json();
        }
        throw new Error('Something went wrong');
    }

    useEffect(() => {
        toGetCommunities()
            .then((responseJson) => {
                const sortedData = toSortCommunities(responseJson)
                setCommunities(sortedData)
            })
            .catch((error) => {
                console.log(error)
            });

        toGetHomes()
            .then((responseJson) => {
                setHomes(responseJson)
            })
            .catch((error) => {
                console.log(error)
            });
    }, []);

    const toGetCommunityHouses = (communityId: string): object[] => {
        return homes.filter(({...item}: any) => {
            return item.communityId.toLowerCase() === communityId.toLowerCase()
        })
    }

    return (
        <div className={'communitiesPage'}>
            {communities.map(({...item}: any, index) => {
                const homes = toGetCommunityHouses(item.id)
                return <CommunityItem {...item} key={index} homes={homes}/>
            })}
        </div>
    )
}