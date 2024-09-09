import React from 'react'

const page = ({ params }: any) => {
    return (
        <div>Meat Item {params.id} Review {params.rid}</div>
    )
}

export default page