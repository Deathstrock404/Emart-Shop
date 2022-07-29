import React ,{useRef, useState } from 'react';
import {Form,Card ,Button,Alert} from "react-bootstrap"  //these are the prebuild components from bootstrap site 
import { useAuth } from '../contexts/AuthContexts'; //useAuth imported from the AuthContext file 
import { Link, useNavigate } from "react-router-dom";



//keep bootstrap start with capital letter

function Signup() {
  const emailRef=useRef();
  const passwordRef=useRef();
  const passwordConfirmRef=useRef();
  const { signup,currentUser } = useAuth();//this signup function is imported   from the authContext file using context api 
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);//this loading state prevent from loading 
  //or sending the user data request again and again to firebase by clicking the button multiple by user 
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();//it prevent the page from reloading and lost data by reloading , it stay the page with the data

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }//it checks that password and confirm password need to be match and if they don't match, then it set the state to error message (Passwords do not match)

    try {
      setError("");//it set the intial state to empty 
      setLoading(true);//it set the loading state to true 
      //here loading state is used to prevent from sending multiple request by user to firebase by clicking the submit button multiple times
      //it is a async/await function 
      await signup(emailRef.current.value, passwordRef.current.value);//it providing the signup value the current value of email and password 
      navigate("/");//after signup it directly redirects us to dashboard page 
    } catch {
      setError("Failed to create an account");
    }

    setLoading(false);// it replies the loading state to false 
  }
//here try and catch is used to catch the error if any occur by setting the seterror the error message 
//try observe the condition and catch  catches the error if any occur 

//<></> these are fragments 
return (<>
<Card>
  <Card.Body>
    <h2 className='text-center mb-4'>Signup</h2>
    {error && <Alert variant="danger">{error}</Alert>}
    <Form className="wrapper" onSubmit={handleSubmit}>


      <Form.Group id="email">
        <Form.Label>Email id </Form.Label>
        <Form.Control type="email" ref={emailRef} required/>

      </Form.Group>

      <Form.Group id="password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" ref={passwordRef} required/>

      </Form.Group>

      <Form.Group id="confirmpassword">
        <Form.Label>Confirmpassword</Form.Label>
        <Form.Control type="password" ref={passwordConfirmRef} required/>

      </Form.Group>

      <Button disabled={loading} type="submit" className='w-100'>Sign Up</Button>




    </Form>

  </Card.Body>
</Card>
<div className="w-100 textcenter mt-2">
  Already have a account? <Link to="/login" >Login</Link>
</div>


  </>
    
  )
}

export default Signup;

//useref or ref it act as getElementbyid type in javascript , it give full control of the particular element tagged in it , we can bring any changes to that particular element , it give full control of it 
//fragments <></> it act like div but parent of div , it envelop whole component/children components in it without making extra node in dom 

//BOOTSTRAP
//card - It act like a content  container . A card in Bootstrap 4 is a bordered box with some padding around its content. It includes options for headers, footers, content, colors, etc.
//card.body-It is a main body of card , The building block of a card is the .card-body. Use it whenever you need a padded section within a card.
//In className mb/mt/mr/ml -  mb - for classes that set margin-bottom. ml - for classes that set margin-left. mr - for classes that set margin-right. mx - for classes that set both margin-left and margin-right.
//form make a form using bootstrap
//fromGroup is a group/component/part of form for different elements
//fromlabel is a label
//formcontrol is for accessing the control part of form where we use ref property  
//w-100 - here w is width and number is % of width like 25,50,75,100
//button disabled , it disable the button functionality according to true or false value of loading state
//Alert - is displays the error alert message in red color to the user if any occur

//, FormGroup, FormLabel, FormControl