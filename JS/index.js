function confirmar() {
    let nome=document.getElementById("nome").value;
    let email=document.getElementById("email").value;

      if(nome===''|| email ===''){
        return false;
      }
      alert("Sucesso!");
      return true;
    }