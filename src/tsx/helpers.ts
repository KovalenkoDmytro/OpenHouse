

const groupBy = function (array: object[], key: string) : object[] {
    return array.reduce(function (rv: any, x: any) {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
    }, {});
};



export {groupBy}