import axios from 'axios';
import React,{useEffect, useState}  from 'react'
import { Table } from 'semantic-ui-react'
const Read = () => {
    const [APIData , setAPIData] = useState([]);
    useEffect(()=>{
        axios.get(`https://611b43d822020a00175a43ce.mockapi.io/fakedata`)
        .then((response)=>{
            setAPIData(response.data);
        })
     }, [])
    return(
        <div>
        <Table singleLine>
            <Table.Header>
                <Table.Row>
                <Table.HeaderCell>ID</Table.HeaderCell>
                    <Table.HeaderCell>First Name</Table.HeaderCell>
                    <Table.HeaderCell>Last Name</Table.HeaderCell>
                    <Table.HeaderCell>Checked</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {APIData.map((data) => {
                    return(
                        <Table.Row>
                            <Table.Cell>{data.id}</Table.Cell>
                            <Table.Cell>{data.firstName}</Table.Cell>
                            <Table.Cell>{data.LastName}</Table.Cell>
                            <Table.Cell>{data.checkbox ? 'Checked': 'Unchecked'}</Table.Cell>

                            </Table.Row>
                    )
                })}
                
            </Table.Body>
        </Table>
    </div>
    )
}
export default Read