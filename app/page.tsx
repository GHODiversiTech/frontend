
'use client';
import { WagmiConfig, createConfig } from "wagmi";
import { ChainIcon } from "connectkit";
import bgimg from "../bg1.jpg";
import Image from 'next/image';
import {ExampleButton} from './button'
import { useState, useRef, useEffect } from "react";
import {useAccount} from "wagmi"

// function openDialog(name:string) {
//   document.getElementById(name).classList.remove('hidden');

//   // Add event listener to close dialog on outside click
//   document.addEventListener('click', (event) => {
//     const dialog = document.getElementById('dialog');
//     if (dialog!=null && !dialog.contains(event.target)) {
//       closeDialog();
//     }
//   });
// }

// function closeDialog() {
//   document.getElementsByTagName('dialog').classList.add('hidden');
//   // Remove event listener to prevent multiple attachments
//   document.removeEventListener('click', closeDialog);
// }


export default function Home() {
  const [showInfo, setShowInfo] = useState(false);
  const [showSDial, setShowSDial] = useState(false); // Conversion into stablecoin dialog
  const [showTDial, setShowTDial] = useState(0); // Select amount to convert dialog
  const [showCDial, setShowCDial] = useState(false); // Token into wallet dialog
  const {isConnected, address, isConnecting} = useAccount(); 
  const [walletAmt, setWalletAmt] = useState(0); //Amount of token to convert to wallet
  const [txnAmt, setTxnAmt] = useState(0); //Amount of current to convert to stablecoin
  const curr = ['USDT', 'GHO', 'ETH', 'BNB'];

  const refS = useRef<HTMLInputElement>(null);
  const refC = useRef<HTMLInputElement>(null);
  const refT = useRef<HTMLInputElement>(null);

    const handleClickOutsideS = (event: { target: any; }) => {
        if (refS.current && !refS.current.contains(event.target)) 
          setShowSDial(false);
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutsideS, true);
        return () => document.removeEventListener('click', handleClickOutsideS, true);
    }, []);
    
    const handleClickOutsideT = (event: { target: any; }) => {
        if (refT.current && !refT.current.contains(event.target)) 
          setShowTDial(0);
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutsideT, true);
        return () => document.removeEventListener('click', handleClickOutsideT, true);
    }, []);

    const handleClickOutsideC = (event: { target: Node | null; }) => {
        if (refC.current && !refC.current.contains(event.target)) 
          setShowCDial(false);
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutsideC, true);
        return () => document.removeEventListener('click', handleClickOutsideC, true);
    }, []);

    
  return (
      <div class="h-screen w-screen grid">
        <Image src={bgimg} layout="fill" objectFit="cover" alt="Background Image" />
        {!showInfo && <div class = "grid ">
          <h1 class = "relative  text-gray-50 text-2xl min-[500px]:text-3xl sm:text-4xl md:text-5xl lg:text-6xl z-10 mx-auto  mt-auto animate-pulse">Welcome to GHODiversiTech!</h1>
          {/* <h1 class = "relative left-1/2 top-1/2 translate-y-[-150%] text-nowrap translate-x-[-50%] text-gray-50 text-2xl min-[500px]:text-3xl sm:text-4xl md:text-5xl lg:text-6xl z-10 mx-auto  mt-auto animate-pulse">Welcome to GHODiversiTech!</h1> */}
          
          <ExampleButton />

          {isConnected && 
          <div class = "relative mt-0 grid row-span-2 mb-10">
            <h1 class = "relative text-gray-50 text-2xl sm:text-3xl md:text-4xl mx-auto z-20">Complete your transaction!</h1>
            <button class="relative flex text-white text-md sm:text-lg md:text-xl bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mx-auto my-auto" onClick = {()=>setShowTDial(1)}>
            {/* <button class="relative  items-center justify-center my-5 mx-auto overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"> */}
              {/* <span class="relative  text-md sm:text-lg md:text-xl transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"> */}
              Convert USDT
              <p class = "w-1"/>
              <Image src = {require('./usdt_icon.png')} class="h-6 w-6 "/>
              {/* </span> */}
            </button>
            <button class="text-white flex text-md sm:text-lg md:text-xl bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mx-auto my-auto" onClick = {()=>setShowTDial(2)}>
              Convert GHO
              <p class = "w-1"/>
              <Image src = {require('./gho_icon.png')} class="h-6 w-6 rounded-xl"/>
            </button>
            <button class="text-white flex text-md sm:text-lg md:text-xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mx-auto my-auto" onClick = {()=>setShowTDial(3)}>
              Convert ETH
              <p class = "w-1"/>
              <ChainIcon id ={1} class = ""/>
            </button>
            <button class="text-white flex text-md sm:text-lg md:text-xl bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mx-auto my-auto" onClick = {()=>setShowTDial(4)}>
              Convert BNB
              <p class = "w-1"/>
              <ChainIcon id ={56} />
            </button>

          </div>  
          
          }

          <button type="button"  onClick={() => setShowInfo(true)} class="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-700 font-medium rounded-lg text-sm absolute bottom-5 right-5 px-5 py-2.5 text-center inline-flex items-center dark:bg-gray-700 dark:hover:bg-gray-800 dark:focus:ring-gray-800 z-10 md:text-xl md:px-7 md:py-3 md:bottom-7 md:right-7">
          <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"/>
            Know More!
          </button>

          <button type="button"  onClick={() => setShowCDial(true)} class="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-700 font-medium rounded-lg text-sm absolute bottom-5 left-5 px-5 py-2.5 text-center inline-flex items-center dark:bg-gray-700 dark:hover:bg-gray-800 dark:focus:ring-gray-800 z-10 md:text-xl md:px-7 md:py-3 md:bottom-7 md:right-7">
          <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"/>
            Transfer to Wallet!
          </button>
          
          {showSDial && 
              <div >
              <div class = "absolute top-0 left-0 z-40 w-screen h-screen bg-black opacity-70" />

              <div ref = {refS} class=" absolute top-1/2 z-50 translate-y-[-50%] left-1/2 translate-x-[-50%]  max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <h1 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Transaction Successful!</h1>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Stablecoin in your wallet: </p>
                  <button onClick = {()=>setShowSDial(false)} class=" items-center px-3 py-2 text-sm font-medium mx-auto  text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                      Great!
                  </button>
              </div>
              </div>
            }

            {showCDial && 
              <div >
              <div class = "absolute top-0 left-0 z-40 w-screen h-screen bg-black opacity-70" />

              <div ref = {refC} class=" absolute top-1/2 z-50 translate-y-[-50%] left-1/2 translate-x-[-50%]  max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <h1 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Tranfer your Stablecoin to Your Wallet!</h1>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">You currently have {walletAmt} stablecoins. Click transfer to put them in your wallet!</p>
                  { walletAmt > 0 ? <button onClick = {()=>{ setShowSDial(false)}} class=" items-center px-3 py-2 text-sm font-medium mx-auto  text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                      Transfer!
                      </button> :
                      <button disabled onClick = {()=>setShowSDial(false)} class=" items-center px-3 py-2 text-sm font-medium mx-auto  text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                        Transfer!
                      </button>
                  }  

              </div>
              </div>
            }

            {showTDial>0 && 
            <>
              <div class = "absolute top-0 left-0 z-40 w-screen h-screen bg-black opacity-70" />

              <div ref = {refT} class=" absolute top-1/2 z-50 translate-y-[-50%] left-1/2 translate-x-[-50%]  max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <h1 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Convert {curr[showTDial - 1]}</h1>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Select Amount you want to transfer!</p>
                  <form class="max-w-sm mx-auto mb-3">
                      <label for="number-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select a number:</label>
                      <input type="number" value = {txnAmt} onChange = {e => setTxnAmt(e.target.value)}  id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0.00" required />
                  </form>
                  { txnAmt > 0 ? <button onClick = {()=>{setTxnAmt(0);setShowTDial(false)}  } class=" items-center px-3 py-2 text-sm font-medium mx-auto  text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                      Transfer!
                      </button> :
                      <button disabled onClick = {()=>setShowTDial(false)} class="items-center px-3 py-2 text-sm font-medium mx-auto  text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                        Transfer!
                      </button>
                  }  

              </div>
            </>
            }
        </div>
        
        }

        {showInfo && <div class = "">
          <h1 class = "relative text-gray-50 text-md z-20 m-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed sem tortor. Vivamus eget dolor et lacus condimentum vulputate eu ut justo. Pellentesque sapien tellus, accumsan ac posuere sit amet, congue at turpis. Nulla aliquet odio sit amet erat congue, non commodo orci convallis. In porttitor nisl metus, ac eleifend orci elementum nec. Sed porttitor finibus purus, eget aliquet dolor venenatis sit amet. Nulla vel suscipit sapien, a semper augue.
            Ut magna leo, rhoncus ac mollis luctus, dapibus nec justo. Suspendisse elementum mauris mi, sit amet convallis metus placerat in. In nunc felis, eleifend a eros sit amet, posuere faucibus massa. Cras vestibulum eu lectus in faucibus. Nunc sed purus ultricies, aliquet diam quis, scelerisque mauris. Morbi placerat elit nec ligula scelerisque mattis. Donec tincidunt libero a sodales gravida. Nam pulvinar nisi ac elit cursus volutpat. Ut sem ipsum, ornare maximus tortor quis, tempus cursus urna. Cras viverra quam ex, non convallis augue tincidunt id. Integer ornare, massa a semper rhoncus, orci ex blandit orci, vitae ornare arcu arcu vel risus. Donec diam ipsum, ornare a lorem sed, molestie posuere dolor. Ut porta interdum arcu, quis hendrerit metus porta sit amet.
            Duis commodo ultricies odio, eget cursus lectus tempus eu. Maecenas semper nisl sollicitudin justo ultricies interdum. Sed eu varius lectus, egestas tristique libero. Pellentesque id condimentum leo, quis feugiat eros. Vestibulum gravida lorem eget aliquet suscipit. Donec venenatis molestie faucibus. Aenean elementum interdum metus, eu interdum elit sollicitudin id. Vestibulum laoreet nunc mauris, a tincidunt velit scelerisque et. Quisque.</h1>
          {/* <ExampleButton /> */}
          <button type="button" onClick={() => setShowInfo(false)} class="animate-pulse text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-700 font-medium rounded-lg text-sm absolute bottom-5 right-5 px-5 py-2.5 text-center inline-flex items-center dark:bg-gray-700 dark:hover:bg-gray-800 dark:focus:ring-gray-800 z-10 md:text-xl md:px-7 md:py-3 md:bottom-7 md:right-7">
          {/* <svg class="w-3.5 h-3.5 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21"> */}
          <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"/>
          {/* </svg> */}
          Back
          </button>
        </div>
        }
      </div>
  )
}

