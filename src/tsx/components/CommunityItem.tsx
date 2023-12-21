import React from "react";
type Props = {
    id: string, name: string, imgUrl: string, group: string,
}
export default function CommunityItem(props:Props) {
    const {id,name,imgUrl,group} = props
    return(
        <div className={'communityItem'}>
            <img src={imgUrl} alt={name}/>

        </div>
    )
}