const obj={
    chave: "valor",
    chave1: "valor1",
    chave2: "valor2",
}

const {chave, ...rest} = obj
console.log(obj)
console.log(rest)

Object.keys(obj).map((key, i) => console.log(key, i))

Object.values(obj).map((key, i) => console.log(key, i))

Object.entries(obj).map((key, i) => console.log(key, i))