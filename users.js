const fs = require('fs');
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
 async getAll(){
  console.log(this.filename);
  const contents = await fs.promises.readFile(this.filename,{ encoding : 'utf8'});
  console.log(contents);
 }
    
}

const test = async () => {
const repo = new usersRepository('users.json');
await repo.getAll();
};

test();