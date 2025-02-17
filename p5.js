const fs=require('fs')
const write=()=>{
  const data="i am updated data"
  fs.writeFile("./data.txt",data,(err)=>{
    if(err) console.log(err);
    else console.log("file updated");

  })
}
write();