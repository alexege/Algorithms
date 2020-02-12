function breakloop(){
    let count = 0;

    while(count < 10){
        let a = 5;
        let b = 0;
        count++;
        console.log("count:", count);
      while(a > b){
        a--;
        if(a == 2){
            return;
        }
        console.log("a:", a);
      }
    }    
}

breakloop();