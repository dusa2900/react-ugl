import React from "react";
import './First.css';

const first = (props) => {
    console.log(props);
    // const data = props.contacts.map((res) => {
    //     console.log("res", res);
    //     return (
    //         <>
    //             <p key={res.id}>{res.id}</p>
    //             <p key={res.name}>{res.name}</p>
    //             <p key={res.email}>{res.email}</p>
    //         </>
    //     )
    // })

    // return <>{data}</>

    return (
        <>
            <ul>
                {
                    props.contacts.map((res, i) => (
                        <li key={i}>{res.id}-{res.name}-{res.email}</li>
                    ))
                }
            </ul>


            <table className="table table-primary table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.contacts.map((res) => (
                            <tr>
                                <td>{res.id}</td>
                                <td>{res.name}</td>
                                <td>{res.email}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )


}

export default first;