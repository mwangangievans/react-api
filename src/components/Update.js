
import React , {useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import axios from 'axios';
import {Button ,Checkbox ,Form, FormInput }  from  'semantic-ui-react'

const Update = () => {
    const [firstName ,setFirstName] = useState('');
    const [LastName, setLastName ] =useState('');
    const [checkbox , setCheckbox ]= useState(false);
    const [id ,setID] = useState (null);
    let history = useHistory();
      useEffect(()=>{
          setID(localStorage.getItem('ID'));
          setFirstName(localStorage.getItem('First Name'));
          setLastName(localStorage.getItem('Last Name'));
          setCheckbox(localStorage.getItem('Checkbox Value'));
      }, []);

      const UpdateAPIData = () => {
          axios.put(`https://611b43d822020a00175a43ce.mockapi.io/fakedata/${id}`,{
              firstName,
              LastName,
              checkbox
          }).then(()=>{
              history.push('/read')
          })
      }
    return (
        <Form className="create-form" >
            <Form.Field>
                <label>First Name</label>
                <input placeholder="First Name"  value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
            </Form.Field>
            <Form.Field>
                <label>Last Name</label>
                <input placeholder="Last Name"  value={LastName}onChange={(e) => setLastName(e.target.value)}/>
            </Form.Field>
            <Form.Field>
                <Checkbox label="I agree to the Terms and Conditions"  value={checkbox} onChange={(e) => setCheckbox(!checkbox)}/>
            </Form.Field>
           <button type="submit" onClick={UpdateAPIData}>Save</button>
        </Form>
    );
}
export default Update