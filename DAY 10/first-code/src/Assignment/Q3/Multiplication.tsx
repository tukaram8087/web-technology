function Multiplication({ num }: { num: number[] }){

    const mul  = num[0]*num[1];

    return(
        <>
            <p>Multiplaication: {mul}</p>
        </>
    )
}

export {Multiplication};