//First Task JS
// let video=document.getElementById('video');
// let image=document.getElementById('c-image');
// let btn=document.getElementById('button');
// if(confirm('HELLO? Do you want to continue?')){
//     function Play(){
//         if (image.style.display==='none') {
//             image.style.display='block'
//             video.style.display='none'
//             document.body.style.backgroundImage='linear-gradient(to right, #59c173, #a17fe0, #5d26c1)'
//         }else{
//             image.style.display='none'
//             video.style.display='block'
//             document.body.style.backgroundImage='linear-gradient(to right, #159957, #155799)';
//         }
//     }
// }else{
//     document.body.style.display='none';
// }
// 
//----------------------------------------------------------
//Second Task JS
// let ans=prompt('Please enter your age:');
// let p=document.getElementById('text')
// if (ans === ""||ans===null|| !Number(ans)) {
//     alert('Please enter age')
// } 
// else if (ans) {
//     if(ans<18){
//         p.innerHTML='<i class="fa-solid fa-triangle-exclamation"></i> Access Denied'
//         p.style.color='red'
//     }else{
//         p.innerHTML='<i class="fa-solid fa-square-check"></i> Access Granted'
//         p.style.color='green'        
//     }
// } 
//----------------------------------------------------------
//Third Task JS
// let input=document.getElementById('inp');
// let p=document.getElementById('content');
// let btn=document.getElementById('btn')
// function Click(){
//     switch (input.value.trim().slice(-3,-2)) {
//         case '1':
//             p.innerHTML='Səhər';
//             document.body.style.backgroundColor='#badae9';
//             p.style.color='#00a3ee';
//             btn.style.backgroundColor='#00a3ee';
//             btn.style.borderColor='#00a3ee';
//             input.style.borderColor='#00a3ee';
//             input.style.color='#00a3ee';
//             break;
//         case '2':
//             p.innerHTML='Günorta';
//             document.body.style.backgroundColor='#fe865a';
//             p.style.color='red';
//             btn.style.backgroundColor='orangered';
//             btn.style.borderColor='#d53a3a';
//             input.style.borderColor='#d53a3a';
//             input.style.color='#d53a3a';
//             break;
//         case '3':
//             p.innerHTML='Axşam';
//             document.body.style.backgroundColor='#081833';
//             p.style.color='#1389C4';
//             btn.style.backgroundColor='#1389C4';
//             btn.style.borderColor='#081833';
//             input.style.borderColor='#081833';
//             input.style.color='#081833';
//         break;
//         default:
//             alert('Düzgün qrup nömrəsi daxil edin!')
//             document.body.style.display='none';
//             break;
//     }
// } 
