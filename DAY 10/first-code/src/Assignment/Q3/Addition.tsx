
function Addition({ num }: { num: number[] }){

    const addition = num[0] +num[1];
    
    return(
        <>
        <p>Addition {addition}</p>
        </>
       
    )
}

export {Addition};