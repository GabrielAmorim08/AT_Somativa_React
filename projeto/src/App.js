import './App.css';
import React, { Component } from "react";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      senha: "",
      resultado: ""
    };

    this.Login = this.Login.bind(this);
  }
  Login() {
    const { email, senha } = this.state;
    const emailsValidos = ["eduardo.lino@pucpr.br", "gabriel.amorim.08@hotmail.com"];
    const senhaCorreta = "123456";

    if (email === "" || senha === "") {
      this.setState({ resultado: "Favor preencher todos os campos" })
      return
    }

    if (emailsValidos.includes(email) && senha === senhaCorreta)
      this.setState({ resultado: "Acessado com Sucesso!" })
    else
      this.setState({ resultado: "Usuário ou senha incorretos!" })
  }

  render() {
    return (
      <div style={{ padding: 30 }}>
        <div style={{ paddingBottom: 2 }}>
          <h2><b>Login</b></h2>
        </div>
        <div>
          <input type="text" size="20"
            value={this.state.email} name="email"
            onChange={(e) => this.setState({ email: e.target.value })}></input>
        </div>
        <div>
          <input type="password" size="20"
            value={this.state.senha} name="senha"
            onChange={(e) => this.setState({ senha: e.target.value })}></input>
        </div>
        <button onClick={this.Login}>Acessar</button>
        <div style={{ paddingTop: 10 }}>
          <b>{this.state.resultado}</b>
        </div>
      </div >
    );
  }
}

export default App;
