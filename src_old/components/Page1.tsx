import React from 'react'
import { useSelector } from 'react-redux' // useSelector() คือ การดึง state ที่อยู่ใน redux store มา

interface IRootState { } // https://stackoverflow.com/questions/57472105/react-redux-useselector-typescript-type-for-state

function Page1() {
    const { user } = useSelector<IRootState, any>(state => ({ ...state }))
    console.log(user)
    console.table(user)

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
            {user}
        </>
    )
}

export default Page1

