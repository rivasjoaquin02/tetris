


const a = Array(10).fill(Array(10).fill("0"))


for (let i=0; i<a.length; i++) {
    for (let j=0; j<a[i].length; j++) {
        console.log(j); 
    }
    console.log("\n");
}


