import React from 'react';
import './App.css';
import { Button, Navbar, Nav, Form, Col, Row, Container, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        
      <img
        src="../public/img/icon-logo.ico"
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt=""
      />

        <Nav className="mr-auto">
          <Nav.Link href="#home">Formulário</Nav.Link>
          <Nav.Link href="#features">Relatórios</Nav.Link>

        </Nav>
      </Navbar>
      <div className="form">
        <Form>
          <Container>
            <br/>
            <br/>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridNome">
                <Form.Label><i><b>Nome Completo:</b></i></Form.Label>
                <Form.Control placeholder="Nome Completo" required />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridTelefone">
                <Form.Label><i><b>Telefone:</b></i></Form.Label>
                <Form.Control type="number" placeholder="Celular" required />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridSociedade">
                <Form.Label><i><b>Sociedade:</b></i></Form.Label>
                <Form.Control as="select" required  >
                  <option>Default select</option>
                  <option>SBNEURO</option>
                  <option>SBC</option>
                  <option>SBPT</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridData">
                <Form.Label><i><b>Data:</b></i></Form.Label>
                <Form.Control type="date" placeholder="Data" required />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridHinicio">
                <Form.Label><i><b>Hora de Início:</b></i></Form.Label>
                <Form.Control type="time" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridHfim">
                <Form.Label><i><b>Hora de Fim:</b></i></Form.Label>
                <Form.Control type="time" />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridID">
                <Form.Label><i><b>ID do teamviewer/Anydesk:</b></i></Form.Label>
                <Form.Control type="number" required />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridProblema">
                <Form.Label><i><b>Qual o problema:</b></i></Form.Label>
                <FormControl as="textarea" rows={5}  required />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridCheck">
                <Form.Label as="legend" column sm={2}>
                  Status:
                </Form.Label>
                <Col required >
                  <Form.Check
                    type="radio"
                    label="Concluído"
                    name="concluido"
                    id="concluido"
                  />
                  <Form.Check
                    type="radio"
                    label="Adiado"
                    name="adiado"
                    id="adiado"
                  />
                  <Form.Check
                    type="radio"
                    label="Não Concluído"
                    name="nConcluido"
                    id="nConcluido"
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridFeito">
                <Form.Label>O que foi feito:</Form.Label>
                <FormControl as="textarea" rows={5} />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridFeito">
                <Form.Label>Observações:</Form.Label>
                <FormControl as="textarea" rows={3} />
              </Form.Group>
            </Form.Row>



            
              <Button variant="success" type="submit">
                Salvar
          </Button>
            

              <Button as="input" type="reset" value="Apagar" variant="danger" />
            




          </Container>
        </Form>
      </div>

    </div>
  );
}

export default App;
