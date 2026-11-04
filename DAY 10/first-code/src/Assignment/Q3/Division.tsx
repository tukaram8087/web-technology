function Division({ num }: { num: number[] }){
    const divi = num[1]/num[0];
    return (
        <>
        <p>Division: {divi} </p>
        </>
    )
}

export {Division};