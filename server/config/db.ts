let LOCAL = false;
let HostName, URI;
if(LOCAL){
    URI = "mongodb://localhost/contacts";
    HostName = "localhost";
}else{
    URI = "mongodb+srv://myAppUser:1234@cluster0.xozdffh.mongodb.net/";
    HostName = "MongoDB Atlas";
}

export{URI, HostName};
export const SessionSecret = "INFT2202SessionSecret";



