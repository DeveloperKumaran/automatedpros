import { useState, useEffect } from 'react';
import React  from 'react';
import { ethers } from 'ethers';
import Input from './Input';
import FindNumberPairs from './FindNumber';
import '../src/App.css';
//import { useMetaMask } from '~/hooks/useMetaMask'


const MetaMask = () =>{
       

    //const { wallet} = useMetaMask();

    const [address,setAddress] = useState('');
    const [userBalance,setUserBalance] = useState(null);
    const [err,setErr]         = useState(null);
    
    var styleObj;
   

   
    
    const connectMetaWallet = ()=>{
        if(window.ethereum){
          window.ethereum.request({method:"eth_requestAccounts"}).then(result=>addressChanged([result[0]]))
          
        }

        else{
           setErr("please install Metamask");
        }

       
    
    }

    const  addressChanged = addressName=>{
        setAddress(addressName);
        getUserBalance(addressName);
      }
      

      const getUserBalance =(eth_balance) => {
        window.ethereum.request({method:"eth_getBalance",params: [String(eth_balance),"latest"]}).then(balance=>setUserBalance(ethers.utils.formatEther(balance)))
      }
      

      const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
      const [noClicks,setClicks] = useState(1);
      const [renderCount, setRenderCount] = useState(1);
    
    const [backgroundColor, setBackgroundColor] = useState('#32CD32'); // Initial background color

  // Update the background color based on the mouse position
  const handleMouseMove = (e) => {
    const mouseX = (e.clientX / window.innerWidth) * 255;
    const newColor = `rgb(0, ${mouseX}, 0)`;
    setBackgroundColor(newColor);
  };

  // Attach the mousemove event listener when the component mounts
  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
      
      useEffect(() => {
        setRenderCount(renderCount + 1);
      }, [noClicks]);
    

      const handleButtonClick = () => {
      setCurrentTime(new Date().toLocaleTimeString());
      setClicks(
         noClicks+1
        
      )
      console.log(noClicks);
 
      
      }
   
    return(

        
       
        <div className='container' style={{ backgroundColor }}>
            <button className='connect-meta' onClick={connectMetaWallet}>connect wallet</button>
            <h1 className='address'>address:{address}</h1>
            <h1 className='balance'>balance:${userBalance}</h1>
            
            <p className='time'>Current Time: {currentTime}</p>
            <button className='display-time'  onClick={handleButtonClick}>Show Current Time</button>
            <p className='render'>Component Renders: {renderCount}</p>
            
            <Input/>
            <FindNumberPairs />
        </div>
        
    )
}

export default MetaMask;