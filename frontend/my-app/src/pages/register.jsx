import React, { useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
// import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap stil dosyasını ekledik
import { Container, Form, Button } from "react-bootstrap"; // Bootstrap bileşenlerini import ettik

const Register = () => {
  // Kullanıcı bilgileri için state
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Kayıt formunun gönderilmesi
  const handleSubmit = (e) => {
    e.preventDefault();
    // Burada kayıt işlemleri gerçekleştirilebilir
  };

  return (
    <div>
      <Header />
      <Container>
        <div className="register-container">
          <h2>Kayıt Ol</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicUsername">
              <Form.Label>Kullanıcı Adı</Form.Label>
              <Form.Control
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Şifre</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              style={{ marginTop: "20px" }}
            >
              Kayıt Ol
            </Button>
          </Form>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Register;
