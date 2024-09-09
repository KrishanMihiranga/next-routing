import React from 'react'

const page = ({ params }: any) => {
    return (
        <div>Groceries Item {params.groId}</div>
    )
}

export default page