import React from 'react'
import { useSelector } from 'react-redux' // useSelector() คือ การดึง state ที่อยู่ใน redux store มา

interface IRootState {}

function Page1() {
    const { string } = useSelector<IRootState, any>(state => ({ ...state }))
    console.log(string)
    const { number } = useSelector<IRootState, any>(state => ({ ...state }))
    console.log(number)

    const { pfusers } = useSelector<IRootState, any>(state => ({ ...state }))
    console.log(pfusers)
    console.table(pfusers)

    return (
        <>
            {pfusers.map((pfuser: any, index: any) => {
                return (
                    <div key={index}>
                        <span>{pfuser.id}</span>
                        <span>{pfuser.pf_user_Firstname}</span>
                        <span>{pfuser.pf_user_Lastname}</span>
                    </div>
                )
            })}
            text: {string}
            <br />
            number: {number}
        </>
    )
}

export default Page1

