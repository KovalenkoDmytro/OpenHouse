import Swal from "sweetalert2";

const groupBy = function (array: object[], key: string) : object[] {
    return array.reduce(function (rv: any, x: any) {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
    }, {});
};

const toSortObjectKeys = function(object : any): object{
    let sortedObject= {}
    Object.keys(object)
        .sort()
        .forEach(function(v:any) {
            sortedObject = {...sortedObject , [v] : object[v]}
        });
    return sortedObject
}

export default function toShowNotification (flash: { type: any; message: any; } ,settings?: object): void {
    Swal.fire({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        icon: flash.type,
        title: flash.message,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        },
        ...settings,
    })
}


export {groupBy, toSortObjectKeys}