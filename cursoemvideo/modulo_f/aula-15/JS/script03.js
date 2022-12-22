var num=[2,1,7,3,8,4]

// comando var.indexOf(número) / esse comando acha a posição do valor escolido dentro do vetor

var pos=num.indexOf(8)
if(pos == -1){
    console.log(`Esse número não pertence a esse vetor`)
}else{
    console.log(`A posição do número ${num[pos]} é ${pos}`)
}