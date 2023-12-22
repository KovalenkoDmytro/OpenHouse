import MainLayout from "../layouts/MainLayout";
import {Link} from "react-router-dom";

export default function NotFound() {
    return(
        <MainLayout pageTitle={'Error'}>
            <Link className={'btn'} to={'/'} >Main page</Link>
                <span>
                     Page not found page
                </span>
        </MainLayout>
    )
}