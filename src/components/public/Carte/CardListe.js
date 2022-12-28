import { Card, Row ,Col} from 'react-bootstrap'
import "./Carte.scss"
import Zoom from 'react-reveal/Zoom';




const CardListe = ({datas}) => {
  const extImage = "http://localhost:5000/plats"
  
  return (
    <Zoom>
    <Row>
     
    
          {
            datas && datas.map((data)=>{
              return(
                
                <Col sm="12" className='mb-3' key={data.id}>
                
                <Card className='d-flex flex-row mb-3' bg='light' >
                <Card.Img variant="left" src={extImage +"/" + data.image} className='img-item' />
                      <Card.Body>
                        
                          <Card.Title className='d-flex justify-content-between'>
                            <div className='text-secondary'>{data.titre.charAt(0).toUpperCase() + data.titre.slice(1)}</div>
                            <div className='text-succes'> {data.prix} euros</div>
                          </Card.Title>
                          
                                      
                          <Card.Text className='item-description py-2'>
                            {data.descreption} 
                          
                          </Card.Text>
                      </Card.Body>
            </Card>
           
          </Col>
              )
            })


          }

        
         
    </Row>
    </Zoom>  
  )
}

export default CardListe