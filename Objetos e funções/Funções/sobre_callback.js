/**
 * Utilizamos a função callback quando queremos garantir a ordem de execução de certas funções no nosso programa/site.  
 * Por exemplo, supondo que você irá logar no site, temos que aguardar o o login ser efetuado para realizar outras ações.
 * */

function f1 (callback){
    setTimeout(function(){
        console.log('f1')
        if(callback) callback();
    }, rand())
}

function f2 (callback){
    setTimeout(function(){
        console.log('f2')
        if(callback) callback();
    }, rand())
}

function f3 (callback){
    setTimeout(function(){
        console.log('f3')
        if(callback) callback();
    }, rand())
}
/**
 * Podemos chamar o callback da seguinte maneira, porém isso deixa o código menos legível e confuso.
f1(function(){
    f2(function(){
        f3(function(){
            console.log('Terminou')
        });
    });
});
 */

/** Para resolver esse problema, podemos chamar os callbacks da seguinte maneira:
f1(f1Callback);

function f1Callback(){
    f2(f2Callback);
}

function f2Callback(){
    f3(f3Callback);
}

function f3Callback(){
    console.log('Terminou)
}


 */


f1();
f2();
f3();











function rand(min = 1000, max = 3000){//Só para aleatorizar os valores do timeout!!!!!
    const num = Math.random() * (max-min) + min;

    return Math.ceil(num);
}