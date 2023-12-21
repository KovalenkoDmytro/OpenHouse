import React from "react";
import {Link} from "react-router-dom";
type Props = {
    id: string, name: string, imgUrl: string, group: string, homes : []
}
export default function CommunityItem(props:Props) {
    const {id,name,imgUrl,group,homes} = props
    const prices = homes.map(({...item} : any )=>{ return item.price })
    const averagePrice = prices.reduce((a, b) => a + b, 0) / prices.length;


    return(
        <div className={'communityItem'}>
            <img src={imgUrl} alt={name}/>
            <Link className={'communityItem__title'} to={`/home/${id}`} title={name}>{name}</Link>
            <p>Belong to {group} community </p>
            <p>Average price {averagePrice}</p>
        </div>
    )
}