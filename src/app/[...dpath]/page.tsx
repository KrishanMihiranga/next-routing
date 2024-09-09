import React from 'react'
interface PageProps{
    params:{
        dpath: string[];
    }
}
const page:React.FC<PageProps> = ({ params }) => {

    return (
        <>
            <div>Catch All Routes</div>

            <div>cannot find path :  /
                {params.dpath.map((item, index) => (
                    <span
                        key={index}
                        className={index % 2 === 0 ? 'text-red-500' : 'text-white'}
                    >
                        {item}/
                    </span>
                ))}
            </div>

        </>

    )
}

export default page