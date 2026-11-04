function Subtraction({ num }: { num: number[] }){
    const sub = num[1]-num[0];
    return(
        <>
        <p>Subtraction: {sub}</p>
        </>
    )
}

export default Subtraction;