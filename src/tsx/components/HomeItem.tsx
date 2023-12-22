import React from "react";
import {Link} from "react-router-dom";
import emptyPicture from '../../access/images/background_hotel.webp'
type Props = {
    id: string, area: number, communityId: string, price: number,type: number, imgUrl : string | undefined,
}


export default function HomeItem(props:Props) {
    const {id,communityId,area,price,type, imgUrl} = props

    return(
        <div className={'homeItem'}>
            <Link className={'home__link'} to={`/homes/${id}`} title={id}>
                <img className={'home__picture'} src={imgUrl ? imgUrl : emptyPicture } alt={id}/>
            </Link>

            <div className={'home__description'}>
                <p className={'home__parameter'}>Price: {price.toFixed(2)} CAD</p>
                <p className={'home__parameter'}>Home type : {type}</p>
                <p className={'home__parameter'}>Area : {area}</p>
            </div>
        </div>
    )
}