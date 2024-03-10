import React, { useState } from 'react'
import copy from 'clipboard-copy';
function Password() {
    let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let lower=upper.toLowerCase();
    let symbol='!@#$&*%^~';
    let number='0123456789';
   
    
    
    let [upperState,setUpperState]=useState(false);
    let [lowerState,setLowerState]=useState(false);
    let [numberState,setNumberState]=useState(false);
    let [passwordState,setPasswordState]=useState(false);
    let [range,setRange]=useState(8);
    const [PasswordGen, setPasswordGen] = useState('');

    let rangeVal=(e)=>{
        setRange(e.target.value);
    }

    let PasswordBtn = () => {
        if(range<8){
           alert("Length out of mentioned range")
        }else{

        let ans = '';
        if (upperState) {
            ans += upper;
        }
    
        if (lowerState) {
            ans += lower;
        }
        if (numberState) {
            ans += number;
        }
        if (passwordState) {
            ans += symbol;
        }
        
        
        if(ans === ''){
           alert('--All checks are empty--')
        }else{
            let password = '';
            for (let i = 0; i < range; i++) {
                password += ans.charAt(Math.floor(Math.random() * ans.length));
            }
            setPasswordGen(password);
        
            console.log(PasswordGen);
        }
        
    }
    };
    
   
    let copyToClipboard = () => {
        if(PasswordGen===''){
             alert('Password field is empty,nothing to copy!')
        }else{
            let para = document.getElementById('EncryptedPassword');
            copy(para.value);
            alert('Password copied')
        }
        
    }
      


  return (
    
 <div className='box'>
    <h1>Password Generator</h1>
    <div className='box1'>
    <input type='text' disabled value={PasswordGen} id='EncryptedPassword'  />
            <button onClick={copyToClipboard}>copy</button>
    </div>
   
   <div className='box2'>
   
    <label className='Password-length'>
    <span>
    Select Password length<b>(**8-50 characters**)</b> </span>
    <input id="bot" type='number'  onChange={rangeVal} value={range}/>
    </label>
   
    

    <label>
    
    <input type='checkbox' checked={upperState} onChange={() => (
        setUpperState(!upperState),
        setPasswordGen('')

        )} />
    Include upper case
   </label> 


    <label>
    
    <input type='checkbox' checked={lowerState} onChange={() => (
        setLowerState(!lowerState),
        setPasswordGen('')
        )} />
    Include lower case
   </label>


    <label>
    
    <input type='checkbox' checked={numberState} onChange={() => (
        setNumberState(!numberState),
        setPasswordGen('')
        )} />
    Include numbers
   </label>



    <label>
    
    <input type='checkbox' checked={passwordState} onChange={() => setPasswordState(
        (!passwordState),
        setPasswordGen('')
        )} />
    Include symbols
    </label>
    <button onClick={PasswordBtn}>Generate Password</button>
    </div>
    </div>
  )
}

export default Password


// let password = '';
// for (let i = 0; i < 12; i++) {
//     password += charset.charAt(Math.floor(Math.random() * charset.length));
// }
// setGeneratedPassword(password);