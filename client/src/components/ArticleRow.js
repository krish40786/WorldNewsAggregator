import React from 'react'
import "./../css/ArticleRow.css"
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'

const ArticlesRow = (props) => {
    return (
        <>
        <a href={props.link} className='component-article-row'>
            <div className='title'>{props.title}</div>
        </a>
        <img src={props.imgSource}/>
        
        </>

       /* <Card style={{ width: '18rem' }}>
       //<Card.Img variant="top" src="holder.js/100px180" />
            <Card.Img variant="top" src={props.link} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                    {props.description}
                </Card.Text>
                <Card.Link href={props.link}>Click here for more info</Card.Link>
            </Card.Body>
        </Card>*/
    )
}

export default ArticlesRow