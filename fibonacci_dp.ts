function fib(n: number): number {

    let start =0;
    let end = 1;

    let res = 0;
    if(n==2 || n==1)
        return 1

    for(let i=2; i<=n; i++){
        res = start + end;
        start = end;
        end=res;
        console.log('res',res)
    }

    return res;

};
