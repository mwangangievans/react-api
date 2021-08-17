import axios from 'axios';
import React,{useEffect, useState}  from 'react'
import { Link } from 'react-router-dom';
import { Button, Table } from 'semantic-ui-react'
const Read = () => {
  
    const [APIData , setAPIData] = useState([]);
    useEffect(()=>{
        axios.get(`https://611b43d822020a00175a43ce.mockapi.io/fakedata`)
        .then((response)=>{
            setAPIData(response.data);
        })
     }, [])
     const setData = (data) => {
        let {id ,firstName ,LastName ,checkbox } = data ;
        localStorage.setItem('ID', id);
        localStorage.setItem('First Name' ,firstName);
        localStorage.setItem('Last Name', LastName);
        localStorage.setItem('Checkbox Value' , checkbox)
    }
    const getData = () =>{
        axios.get(`https://611b43d822020a00175a43ce.mockapi.io/fakedata`)
        .then((getData) => {
            setAPIData(getData.data);
        })
    }
    const onDelete = (id) =>{
        axios.delete(`https://611b43d822020a00175a43ce.mockapi.io/fakedata/${id}`)
        .then(()=>{
            getData();
        })

    }
    
    return(
        <div>
            <Link to="/create">
            <Button>Add Record</Button>
            </Link>
            
        <Table singleLine>
            <Table.Header>
                <Table.Row>
                <Table.HeaderCell>ID</Table.HeaderCell>
                    <Table.HeaderCell>First Name</Table.HeaderCell>
                    <Table.HeaderCell>Last Name</Table.HeaderCell>
                    <Table.HeaderCell>Checked</Table.HeaderCell>
                    <Table.HeaderCell>Update</Table.HeaderCell>
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
                            <Link to="/update">
                            <Table.Cell>
                                <Button onClick={()=> setData(data)}>Update</Button>
                                </Table.Cell>
                                </Link>
                                <Table.Cell>
                                    <Button onClick={()=> onDelete(data.id)}>Delete</Button>
                                </Table.Cell>
                            </Table.Row>
                    )
                })}
                
            </Table.Body>
        </Table>
    </div>
    )
}
export default Read