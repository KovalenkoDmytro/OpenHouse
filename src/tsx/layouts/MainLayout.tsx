
import React, {PropsWithChildren} from "react";
export interface Props {
    pageTitle: string;
}
export default function MainLayout(props: PropsWithChildren<Props>) {
    return(
        <>
            {props.pageTitle.length && <h1 className={'page_title'}>{props.pageTitle}</h1>}
            <main className="content_wrapper">
                {props.children}
            </main>
        </>
    )
}