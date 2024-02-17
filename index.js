const readlineSync = require('readline-sync');
console.log('Tela de Cadastro')
const nome = readlineSync.question('Nome completo: ')
obterInputComValidacao("Data de nascimento (DD-MM-AAAA): ", validarIdade);
const emailUsuario = obterInputComValidacao("Email: ", validarEmail);
const senhaDigitada = readlineSync.question('Senha: ')
obterInputComValidacao("Confirmar senha: ", senha => confirmarSenhas(senhaDigitada, senha)); 

console.clear()//limpar

let errorSenha = 1

function validarSenhas(senha, confirmarSenha) { 
  if(senha !== confirmarSenha && errorSenha < 4) {
    console.log('\x1b[31m', 'você tem ' + errorSenha + ' de 3 tentativas')
    errorSenha++
    
    if(errorSenha > 3) {
      console.log('\x1b[0m', 'Infelizmente o programa foi encerrado')
      process.exit()
    }

  } else {
    return true
  }
}

console.log('Tela de Login')
obterInputComValidacao("Email: ", email => confirmarEmail(emailUsuario, email));
obterInputComValidacao("Senha: ", senha => validarSenhas(senhaDigitada, senha));

console.clear()//limpar

console.log('\x1b[0m', 'Bem Vindo ao Jogo! Escolha seu personagem: ')
const personagens = [
   'Paladino', 'Atirador', 'Guerreiro', 'Barbaro', 'Arqueiro'
]

const atributos = {
    Paladino: { 'Força': 80, 'Resistência': 70, 'Furia': 90, 'Velocidade de Ataque': 75, 'Velocidade de Defesa': 80 },
    Atirador: { 'Agilidade': 90, 'Precisão': 80, 'Furtividade': 70, 'Velocidade de Ataque': 85, 'Velocidade de Defesa': 60},
    Guerreiro: { 'Força': 85, 'Coragem': 75, 'Estratégia': 70, 'Velocidade de Ataque': 70, 'Velocidade de Defesa': 85 },
    Barbaro: { 'Fúria': 90, 'Resistência': 80, 'Brutalidade': 85, 'Velocidade de Ataque': 80, 'Velocidade de Defesa': 70 },
}

for (const personagem in atributos) {
    console.log(personagem + ":");
    for (const atributo in atributos[personagem]) {
      console.log(`-${atributo}: ${atributos[personagem][atributo]}`);
      
    }
    console.log();
}

function selecionarPersonagem(opcoes) {
   const index = readlineSync.keyInSelect(opcoes, 'Selecione uma classe:', { cancel: false });
   return opcoes[index];
}
const personagemSelecionado = selecionarPersonagem(personagens)

console.clear()//limpar

console.log('Personalização de personagem')
const cores = ["preto", "branco", "azul", "rosa", "vermelho", "verde", "amarelo"];
const caracteristicas = [
  {
    name: 'cabelo',
    message: 'cor de cabelo'
  },
  {
    name: 'pele',
    message: 'cor de pele'
  },
  {
    name: 'olhos',
    message: 'cor dos olhos'
  },
  {
    name: 'roupa',
    message: 'cor da roupa'
  },
]

let corCabeloSelecionada, corPeleSelecionada, corOlhosSelecionada, corRoupaSelecionada;

for (const caracter of caracteristicas) {
  const opcaoSelecionada = selecionarCaracteristicas(cores, `Selecione a ${caracter.message}:`);
  console.clear();
  switch (caracter.name) {
    case 'cabelo':
        corCabeloSelecionada = opcaoSelecionada;
        break;
    case 'pele':
        corPeleSelecionada = opcaoSelecionada;
        break;
    case 'olhos':
        corOlhosSelecionada = opcaoSelecionada;
        break;
    case 'roupa':
        corRoupaSelecionada = opcaoSelecionada;
        break;
    default:
        break;
  }
}

function selecionarCaracteristicas(opcoes, mensagem) {
    const index = readlineSync.keyInSelect(opcoes, mensagem, { cancel: false });
    return opcoes[index];
}

console.clear()//limpar

const armas = {
    'Paladino': ['lanca e escudo'],
    'Atirador': ['Arma'],
    'Guerreiro': ['Espada e Escudo'],
    'Barbaro': ['Machado', 'Marreta'],
    'Arqueiro': ['Arco']
}

function selecionarArmas(opcoes, mensagem) {
    const index = readlineSync.keyInSelect(opcoes, mensagem, { cancel: false });
    return opcoes[index];
}
const armaSelecionada = selecionarArmas(armas[personagemSelecionado], 'Pegue sua arma')

console.clear()//limpar

const montarias = [
    "Cavalo",
    "Unicornio",
    "Dragao",
    "Panda",
    "Pegaso"
]
const montariasAtributos = {
    "Cavalo": { 'velocidade': 60, 'resistencia': 70, 'agilidade': 50, 'descanso': '5 min' },
    "Unicornio" :{  'velocidade': 80, 'resistencia': 60, 'agilidade': 70, 'descanso': '2 min' },
    "Dragao": { 'velocidade': 90, 'resistencia': 80, 'agilidade': 40, 'descanso': '6 min' },
    "Panda": { 'velocidade': 70, 'resistencia': 65, 'agilidade': 80, 'descanso': '10 min'  },
    "Pegaso": {  'velocidade': 85, 'resistencia': 75, 'agilidade': 65, 'descanso': '3 min'  }
}

for (const montaria in montariasAtributos) {
    console.log(`${montaria}:`);
    const atributos = montariasAtributos[montaria];
    for (const atributo in atributos) {
      console.log(`- ${atributo}: ${atributos[atributo]}`);
    }
    console.log();
  }

function selecionarMontaria(opcoes) {
    const index = readlineSync.keyInSelect(opcoes, 'Selecione uma montaria:', { cancel: false });
    return opcoes[index];
}

const montariaSelecionada = selecionarMontaria(montarias)

const atributoMontaria = montariasAtributos[montariaSelecionada]

console.clear()//limpar
console.log('----------------- Parabens -------------------')
console.log('Parabens:', nome)
console.log('O seu personagem é', personagemSelecionado)
console.log('Atributos', atributos[personagemSelecionado])
console.log('Tem a cor de cabelo', corCabeloSelecionada)
console.log('Cor de pele', corPeleSelecionada)
console.log('Cor dos olhos', corOlhosSelecionada)
console.log('Cor da roupa', corRoupaSelecionada)
console.log('Ferramentas de batalha', armaSelecionada)
console.log('Sua montaria é', montariaSelecionada)
console.log('Atributo da montaria é', atributoMontaria)
console.log('\x1b[0m', 'Fim de jogo');

//validação
function validarEmail(email) {
    const emailRegex = /\S+@\S+\.\S+/;
    if(emailRegex.test(email)) {
      return true
    } else {
      console.log('ops! esse email não é valido')
      return false
    }
}

function confirmarSenhas(senha, confirmarSenha) {
    return senha === confirmarSenha;
}




function calcularIdade(dataNascimento) {
    let partesData = dataNascimento.split('-');
    let dia = parseInt(partesData[0]);
    let mes = parseInt(partesData[1]);
    let ano = parseInt(partesData[2]);
  
    let hoje = new Date();
    let nascimento = new Date(ano, mes - 1, dia); // Mês é base 0, então subtraímos 1
    let idade = hoje.getFullYear() - nascimento.getFullYear();
    let mesDiferenca = hoje.getMonth() - nascimento.getMonth();
    let diaDiferenca = hoje.getDate() - nascimento.getDate();
  
    if (mesDiferenca < 0 || (mesDiferenca === 0 && diaDiferenca < 0)) {
        idade--;
    }
    return idade;
}

function confirmarEmail(email, confirmarEmail) {
    if(email != confirmarEmail) {
      console.log('Email é diferente')
      return false
    } else {
      return true
    }
  }

function validarIdade(dataNascimento) {
    const idade = calcularIdade(dataNascimento);
    return idade >= 18;
}

function obterInputComValidacao(mensagem, validacao) {
    let entrada;
    while (!validacao(entrada = readlineSync.question(mensagem)));
    return entrada;
}