import React from 'react'

const page = ({ params }: any) => {
    return (
        <div>Veg item {params.vegId}</div>
    )
}

export default page