
import React , {useState} from 'react'
import { useHistory } from 'react-router';
import axios from 'axios';
import {Button ,Checkbox ,Form, FormInput }  from  'semantic-ui-react'

const Create = () => {
    const [firstName ,setFirstName] = useState('');
    const [LastName, setLastName ] =useState('');
    const [checkbox , setCheckbox ]= useState(false);
    let history = useHistory();

    const postData = () => {

        axios.post(`https://611b43d822020a00175a43ce.mockapi.io/fakedata`,{
            firstName,
            LastName,
            checkbox
        }).then(()=>{
            history.push('/read')
        });
       
        
    }
    
    return (
        <Form className="create-form" >
            <Form.Field>
                <label>First Name</label>
                <input placeholder="First Name" onChange={(e) => setFirstName(e.target.value)}/>
            </Form.Field>
            <Form.Field>
                <label>Last Name</label>
                <input placeholder="Last Name" onChange={(e) => setLastName(e.target.value)}/>
            </Form.Field>
            <Form.Field>
                <Checkbox label="I agree to the Terms and Conditions" onChange={(e) => setCheckbox(!checkbox)}/>
            </Form.Field>
           <button  onClick={postData} type="submit">Submit</button>
        </Form>
    );
}
export default Create 