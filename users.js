const fs = require('fs');
const { getMaxListeners } = require('process');
class usersRepository {
    constructor(filename){
        if(!filename){
            throw new Error('Need a file to work with repository');
        }

        this.filename = filename ;
        try {
        fs.accessSync(this.filename)
        }
        catch(err){
            fs.writeFileSync(this.filename,'[]');
        }
    }
   getAll(){
  return JSON.parse(fs.readFileSync(this.filename,{ encoding : 'utf8'})
  );
  
 }
}
 
 create(attr){
  const records = repo.getAll();
  records.push(attr);
   fs.writeFileSync("./users.json", JSON.stringify(records));
 }   



const test = () => {
const repo = new usersRepository('users.json');
 create({email :"test@getMaxListeners.com" , password : "123456"});
 const users = repo.getAll();
 console.log(users);
}

test();
