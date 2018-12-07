const buf = Buffer.from([0*1,0*2,0*3,0*4,0*5]);
const json =JSON.stringify(buf);

console.log(json);

const copy = JSON.parse(json , (key,value)=>{
    return value && value.type==='Buffer' ? 
    Buffer.from(value.data):
    value;
})


console.log(copy)