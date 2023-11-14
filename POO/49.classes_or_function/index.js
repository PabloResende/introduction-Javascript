/* 
fonte: https://dev.to/thiagomr/class-vs-function-qual-o-jeito-correto-de-escrever-javascript-no-mundo-moderno-41jk#:~:text=Se%20voc%C3%AA%20precisa%20criar%20inst%C3%A2ncias,pr%C3%B3prio%20nome%20sugere%2C%20utilizaria%20fun%C3%A7%C3%B5es.

"A primeira coisa é entender o que de fato acontece quando nós utilizamos a keyword class. Em resumo, é simplesmente um syntax sugar para o padrão de prototypes do javascript. Anteriormente a existência de classes, a forma mais comum para se criar "instâncias" era utilizando factory functions (toda função em javascript é capaz de gerar objetos).
Existem pequenas diferenças entre os dois modelos e a que considero mais relevante é que o uso de classes torna obrigatório o uso da keyword new para criar novos objetos. Segue exemplo:"

[...]

"Alguns casos eu considero óbvios. Se você precisa criar instâncias de uma classe ou utilizar herança, claramente eu escolheria class. Se você vai trabalhar com programação funcional, como o próprio nome sugere, utilizaria funções. Porém, nem tudo é apenas preto e branco. É preciso manter a mente aberta para aceitar que há diversas formas boas de se chegar em um resultado. Desenvolver um software é como cuidar de uma biblioteca, você precisa organizar os livros com uma certa lógica para que os mesmos façam sentido onde estão, sejam facilmente encontrados e possam ser adicionados novos de forma intuitiva e simples. Sendo assim, mais importante que escolher um ou outro, é conhecer os recursos disponíveis para ter mais opções na hora construir softwares consistentes."
*/


// using Factory Functions
const HeroFunction = function (name) {
  this.name = name;

  this.getName = function () {
    return this.name;
  };
};

const hero = new Hero("spiderman");
// it works
const hero1 = Hero("spiderman");
// it works

// using Class
class HeroClass {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
}

const hero2 = new Hero2("spiderman");
// it works

const hero3 = HeroClass("spiderman"); // ERRADO
// TypeError: Class constructor Hero cannot be invoked without 'new'

// "Para padronizar e tratar erros HTTP (ao herdar o tipo Error, nós temos acesso a tudo que essa classe nos oferece, como a call stack do erro, por exemplo):"

class BadRequestError extends Error {
  constructor(parameter) {
    super();

    this.status = 400;
    this.title = "BadRequestError";
    this.message = `missing param [${parameter}]`;
  }
}

class UnauthorizedError extends Error {
  constructor() {
    super();

    this.status = 401;
    this.title = "UnauthorizedError";
    this.message = "invalid token";
  }
}

class ServerError extends Error {
  constructor() {
    super();

    this.status = 500;
    this.title = "ServerError";
    this.message = `unespected server error, please contact support`;
  }
}

function httpError(error, response) {
  console.log(error);

  // some custom error logic

  if (!error.status) {
    error = new ServerError();
  }

  return response.status(error.status).send({
    title: error.title,
    message: error.message,
  });
}

function httpHandler(request, response) {
  try {
    // do something
    // throw new BadRequestError('parameterName')
    // throw new UnauthorizedError()
    // throw new Error('Random Error')
  } catch (error) {
    return httpError(error, response);
  }
}

// "Para herdar componentes nativos da linguagem, como o EventEmitter (aqui é possível criar várias chamadas, cada uma independente e tendo acesso a seus métodos):"

const EventEmitter = require('events');

class Call extends EventEmitter {
    constructor() {
        super();
        this.startAt = null;
        this.endAt = null;
    }

    save() {
        //save call on database
    }
}


const call = new Call();

call.on('start', () => {
    console.log('starting call');
    this.startAt = new Date();
});

call.on('finish', () => {
    console.log('finishing call');
    this.endAt = new Date();
    this.save();

    console.log('call duration', this.endAt - this.startAt);
});

setTimeout(() => {
    call.emit('start');
}, 1000);

setTimeout(() => {
    call.emit('finish');
}, 4000);

// "Para injetar dependencias (Aqui o metódo construtor nos dá maior clareza em relação a inicialização das instâncias):"

class LoggerService {
    info(...args) {
        console.log('[info]', ...args);
    }

    error(...args) {
        console.error('[error]', ...args);
    }
}

//broker service
class BrokerService {
    constructor({ logger }) {
        this.logger = logger;
    }

    ack(message) {
        this.logger.info('[ack message]', message);
    }
}

class HistoryService {
    constructor({ logger }) {
        this.logger = logger;
    }

    save(msg) {
        this.logger.info('[save message]', msg);
    }
}

class Subscriber {
    constructor({ broker, logger, history }) {
        this.broker = broker;
        this.logger = logger;
        this.history = history;
    }

    handle(msg) {
        //do something

        this.history.save(msg);
        this.broker.ack(msg);
        this.logger.info('done');
    }
}

//service factories
const logger = new LoggerService();
const broker = new BrokerService({ logger });
const history = new HistoryService({ logger });

//subscriber
const subscriber = new Subscriber({ broker, logger, history });

subscriber.handle({ queue: 'test', content: 'I am a message' });

// "Para criar helpers, onde as funções tem um mesmo contexto mas não uma ligação tão forte entre si:"

//helpers.js
function validateEmail(email) {
    //validate email
}

function validatePhoneNumber(number) {
    //validate number
}

module.exports = {
    validateEmail,
    validatePhoneNumber
};

//index.js
const { validateEmail, validatePhoneNumber } = require('./helpers');

// Para criar middlewares:

//auth.js
module.exports = (request, response, next) {
    auth();
    next();
}

