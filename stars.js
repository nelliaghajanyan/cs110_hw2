  const print = function(sym,hmt){
    if(hmt === 0){
     return ''; 
    }
    
    return sym + print(sym, hmt - 1);
  };
  
  const f = function(space,star){
    if(space < 0){
      return;
    }
    {
    console.log(print(' ', spac) + print('*', star));
    return f(space - 1, star +2);
    }
  };
  
  const triangleStar = function(n){
    f(n-1, 1);
  };
  
  triangleStar(5);