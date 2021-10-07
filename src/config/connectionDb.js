
//server host name
const HOST = "localhost";

//remote database name
const DATABASE = "bluemercurydb";

//database credentials
const USERNAME = "bluemercury";
const PASSWORD = "bluemercury2";

//default app port
const PORT = 3000;

//default connection url
const DEFAULT_CONNECTION_STRING = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.1bi7u.mongodb.net/${DATABASE}?retryWrites=true&w=majority`;

// mongodb+srv://urbanclone:<password>@cluster0.r35kx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

//mongoose options for connection
const MONGOOSE_OPTIONS = {
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology:true,
    useNewUrlParser:true
}

module.exports = {HOST, PORT, DATABASE, USERNAME, PASSWORD, DEFAULT_CONNECTION_STRING, MONGOOSE_OPTIONS}