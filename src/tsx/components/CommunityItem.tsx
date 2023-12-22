import React from "react";
import {Link} from "react-router-dom";
import emptyPicture from '../../access/images/background_hotel.webp'
type Props = {
    id: string, name: string, imgUrl: string, group: string, homes : []
}
export default function CommunityItem(props:Props) {
    const {id,name,imgUrl,group,homes} = props
    const prices = homes.map(({...item} : any )=>{ return item.price})
    const averagePrice = prices.length ? prices.reduce((a, b) => a + b, 0) / prices.length : 0;
    return(

        <div className={'communityItem'}>
            <Link className={'communityItem__link'} to={`/home/${id}`} title={name}>
                <img className={'communityItem__picture'} src={imgUrl ? imgUrl : emptyPicture } alt={name}/>
            </Link>

            <div className={'communityItem__description'}>
            <p className={'communityItem__title'} >{name}</p>
                <p className={'communityItem__parameter'}>Average price {averagePrice.toFixed(2)} CAD</p>
            </div>
        </div>
    )
}