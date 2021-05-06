const express    = require('express');
const sql        = require("mssql");
const config     = require('./database');
const app        = express();
const router     = express.Router();
const PORT       = 4000;
const bodyParser = require('body-parser');
// const jwt        = require('jsonwebtoken');

router.get('/', (req, res) => res.send('Home'));
app.use('/', router);

// Cors Policy
app.use(function( req, res, next ) {
	res.header("Access-Control-Allow-Origin", req.headers.origin);
	res.header("Access-Control-Allow-Headers", "x-requested-with, content-type, x-access-token");
	res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
	res.header("Access-Control-Allow-Credentials", "true");
	res.header('Access-Control-Expose-Headers', 'x-access-token');
	res.header("Access-Control-Max-Age", "1000000000");

	if('OPTIONS' == req.method) {
		res.sendStatus(200);
	} else { 
		next(); 
  }
});

// Configurando o body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

sql.connect(config, err => {
	
	if(err) console.log(err);
	
	const request = new sql.Request();

	router.all('/v1/createuser', (req, res) => {
    console.log(res.status);

		// const name             = req.body.firstName;
		// const surname          = req.body.lastName;
		// const email            = req.body.email;
		// const password         = req.body.password;
		// const repeatPassword   = req.body.repeatPassword;
		// const criptoPassword   = cripto(password);
		// const rcriptoPassword  = cripto(repeatPassword);
		// const registrationDate = req.body.registrationDate

		request.query(`INSERT INTO person(name, last_name, email, password, person_type, cpf)
    VALUES('Sebere', 'dePI', 'depi@gmail.com', '123654', 'client', '03194683498');`
    // AJEITAR INSERT DINAMICO
		// VALUES('${ name }', '${ surname }', '${ email }', '${ criptoPassword }', '${ rcriptoPassword }', '${ registrationDate }');`
		, (err, recordset) => {
			if(err) {
				console.log(err);
			} else {
        console.log(recordset);
				res.send(recordset);
			}
		});
	});

	router.get('/v1/getusers', (req, res) => {
		request.query(`SELECT * FROM person;`, (err, recordset) => {
			if(err) {
				console.log(err);
			} else {
        console.log(recordset);
				res.send(recordset.recordset);
			}
		});
	});

	// router.post('/api/login', (req, res) => {

	// 	const { email }    = req.body;
	// 	const { password } = req.body;

	// 	const passwordFromFront = cripto(password);

	// 	const MSG = "Email ou senha incorretos";

	// 	request.query(`SELECT * FROM person WHERE email = '${ email }';`, (err, recordset) => {

	// 		const response = recordset.recordset;

	// 		if(response.length > 0) {

	// 			const authUser = {
	// 				id:       response[0].id,
	// 				name:     response[0].name,
	// 				email:    response[0].email,
	// 				password: response[0].password
	// 			}
				
	// 			if(authUser.email === email && authUser.password === passwordFromFront) {
	// 				let auth = true;

	// 				//Passar param para expirar token / EXEMPLO ABAIXO
	// 				//var token = jwt.sign({ id }, process.env.SECRET, {
	// 					//expiresIn: 300 // expires in 5min
	// 				//});
					
	// 				jwt.sign({ authUser }, SECRET, (err, token) => {
	// 					res.send({ token, auth });
	// 				});
	// 			}

	// 		} else {
	// 			let auth = false;
	// 			res.send({ MSG, auth })
	// 		}
	// 	});
	// });
});

app.listen(PORT, () => {
	console.log(`Server is running my king, on port -> ${ PORT }`);
});
