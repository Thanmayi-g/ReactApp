// BookDetails.js
/*
import React from 'react';
import { Modal, Button, Row, Col } from 'react-bootstrap';

const BookDetails = ({ show, onHide, book, onBuyNow }) => {
  if (!show || !book) {
    return null;
  }

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{book.bookName}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col md={4}>
          <img src={book.imageUrl} alt={book.bookName} className="book-image"/>
          </Col>
          <Col md={10}>
            <p>This Book was written by {book.firstName} {book.lastName}.This is a story based on fantasy and fiction.</p>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="primary" onClick={onBuyNow}>
          Buy Now on Amazon
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default BookDetails;
*/

/*
import React from 'react';
import { Modal, Button, Row, Col, Carousel } from 'react-bootstrap';

const BookDetails = ({ show, onHide, book, onBuyNow }) => {
  if (!show || !book) {
    return null;
  }

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{book.bookName}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col md={12}>
            <Carousel>
              {book.images.map((imageUrl, index) => (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100"
                    src={imageUrl}
                    alt={`Image ${index + 1}`}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
          <Col md={12}>
            <p>This Book was written by {book.firstName} {book.lastName}. This is a story based on fantasy and fiction.</p>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="primary" onClick={onBuyNow}>
          Buy Now on Amazon
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default BookDetails;
*/
import React from 'react';
import { Modal, Button, Row, Col, Carousel } from 'react-bootstrap';
import { Editor } from '@tinymce/tinymce-react';

const BookDetails = ({ show, onHide, book, onBuyNow }) => {
  if (!show || !book) {
    return null;
  }

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{book.bookName}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col md={12}>
            <Carousel>
              {book.images.map((imageUrl, index) => (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100"
                    src={imageUrl}
                    alt={`Image ${index + 1}`}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
          <Col md={12}>
          <textarea
              rows="5" // Adjust the number of rows as needed
              className="form-control"
              value={book.description}
              readOnly
            />
            
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="primary" onClick={onBuyNow}>
          Buy Now on Amazon
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default BookDetails;
