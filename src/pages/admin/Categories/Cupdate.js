import React,{useState,useEffect} from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { useParams,useNavigate } from 'react-router-dom'
import baseUrlProd from '../../../Api/baseUrl'
import axios from 'axios'
import { accountService } from '../../../_services/account_services'

const Update = () => {
  const navigate = useNavigate()
  const params = useParams()
  const index = params.id
  const [data, setData] = useState()
  const [err, setErr] = useState("")


    useEffect(function (){
    axios.get(`${baseUrlProd}/api/v1/categories/${index}`).then((response) => {
      const resultTab = response.data.result[0]
      setData(resultTab)  
        
    })
  },[index]);

  const updateName = (e)=>{
    setData({name:e.target.value})
  }

  const onsubmit = (e) => {
    e.preventDefault();

    axios
      .put(`${baseUrlProd}/api/v1/categories/${index}`, data, {
        headers: { "Content-Type": "application/json",Authorization: `Bearer ${accountService.getToken()}` },
      })
      .then((response) => {
        setData({name:""})
        setErr("");
        navigate("/admin/categories/liste")

        
      })
      .catch((error) => setErr(error.response.data.errors[0].msg));

      
  };




  return (
    <Container className="w-50 h-50 mt-5">
    <Form onSubmit={onsubmit}>
      <Form.Group classcategorie="mb-3" controlId="formBasicEmail">
        
        <Form.Control
        onChange={updateName}
          type="text"
          placeholder="Enter categorie"
          value={data && data.name}
          
          
        />
        <Form.Text className="text-muted text-secondary">{err}</Form.Text>
      </Form.Group>

      <Button variant="primary" type="submit" className="my-4">
        Modifier
      </Button>
    </Form>
    </Container>
  )
}

export default Update
