import React, {useState, useEffect} from "react";
import detectEthereumProvider from '@metamask/detect-provider'

import Web3 from 'web3'

import Electionabi from '../contracts/Election.json'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  
// import {Bar} from 'react-chartjs-2';

import Vote from '../assets/4448.jpg';
import NotFoundMeta from "./NotFoundMeta";
import Waiting from "./Waiting";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Voting = () => {

    useEffect(() => {
        loadWeb3();
        LoadBlockchainData();
      }, [])
    
      
      const[warning, setLoader] = useState(true);
      const[loading, setWarning] = useState(false);
      const[electionsm, setElectionsm] = useState();
      const[candidate1, setCanidate1] = useState();
      const[candidate2, setCanidate2] = useState();
      const[currentAccount, setCurrentAccount] = useState("");
      const[Candidate, setCandidate] = useState("");
      
    
      const loadWeb3 = async () => {
        if(window.ethereum) {
          window.web3 = new Web3(window.ethereum);
          await window.ethereum.enable();
        } else if(window.web3) {
          window.web3 = new Web3(window.web3.currentProvider);
        } else {
          window.alert(
            "Non-etherum browser detected . You should consider trying MetaMask!"
          )
        }
      }
    
      const LoadBlockchainData = async () => {
        const provider = await detectEthereumProvider();
        if (provider) {
          setLoader(true);
          const web3 = window.web3;
          const accounts = await web3.eth.getAccounts();
          const account = accounts[0];
      
          setCurrentAccount(account)
          const networkId = await web3.eth.net.getId();
          const networkData = Electionabi.networks[networkId];
      
          if(networkData) {
            const election = new web3.eth.Contract(Electionabi.abi, networkData.address);
            const candidate1 = await election.methods.candidates(1).call();
            // const candidate1Id = candidate1.id;
            // const candidate1Name = candidate1.name;
            // const candidate1VoteCount = candidate1.voteCount;
            const candidate2 = await election.methods.candidates(2).call();
            // const candidate2Id = candidate2.id;
            // const candidate2Name = candidate2.name;
            // const candidate2VoteCount = candidate2.voteCount;
            setCanidate1(candidate1);
            setCanidate2(candidate2);
            //console.log(candidate1);
            //console.log(candidate2);
            setElectionsm(election);
            //console.log(election);
            setLoader(false)
          } else {
            window.alert('the smart contract is not deployed current network')
          }
        } else {
          console.log('Please install MetaMask!');
        }
      }
    
      const voteCandidate = async(candidateid) => {
        setWarning(true);
        await electionsm.methods.vote(candidateid).send({from: currentAccount}).on('transactionhash', () => {
          console.log('successful ran');
        })
        setWarning(false);
        window.location.reload();
      }
    
      if(warning) {
          return <div>
              <NotFoundMeta/>
          </div>
      }

      if(loading) {
        return <div>
            <Waiting/>
        </div>
        }

    const onchange = (e) => {
        setCandidate(e.target.value);
    }

    const onsubmit = (e) => {
        e.preventDefault();
        if(Candidate.id !== 0) voteCandidate(Number(Candidate));
        else window.alert('There is error in submission')
    }

    // const data = {
    //     labels: [candidate1.name, candidate2.name],
    //     datasets:[{
    //         label: 'Voting chart',
    //         data: [candidate1.voteCount, candidate2.voteCount],
    //         backgroundColor: [
    //             'rgba(255, 99, 132, 0.2)',
    //             'rgba(54, 162, 235, 0.2)',
    //         ],
    //         borderColor: [
    //             'rgb(255, 99, 132)',
    //             'rgb(54, 162, 235)',
    //         ],
    //         borderWidth: 1
    //     }]
    // }

    return (
        <div class='container'>
            <div class='row my-5'>
                <div class='col'>
                    <img src={Vote} alt="Responsive" class="img-fluid" />
                </div>
                <div class='col'>
                    <div class="mt-4 text-center" style={{color: "#000000"}}>
                    <h2>Election Result</h2>
                    <hr/>
                    <h3>Are you afraid of robots?</h3>
                    <div className='p-3 ml-auto mr-auto'>
                        <div className='row ml-auto mr-auto mb-2' style={{width: '90%'}}>
                            <div className='col'>
                                <p>
                                    #
                                </p>
                            </div>
                            <div className='col'>
                                <p>
                                    Value
                                </p>
                            </div>
                            <div className='col'>
                                <p>
                                    Votes
                                </p>
                            </div>
                        </div>
                        <hr/>
                        <div className='row ml-auto mr-auto mb-2' style={{width: '90%'}}>
                            <div className='col'>
                                <p>
                                    {candidate1.id}
                                </p>
                            </div>
                            <div className='col'>
                                <p>
                                    {candidate1.name}
                                </p>
                            </div>
                            <div className='col'>
                                <p>
                                    {candidate1.voteCount}
                                </p>
                            </div>
                    </div>
                    <hr/>
                    <div className='row ml-auto mr-auto mb-2' style={{width: '90%'}}>
                            <div className='col'>
                                <p>
                                    {candidate2.id}
                                </p>
                            </div>
                            <div className='col'>
                                <p>
                                    {candidate2.name}
                                </p>
                            </div>
                            <div className='col'>
                                <p>
                                    {candidate2.voteCount}
                                </p>
                            </div>
                    </div>
                    </div>
                    
                    
                    <div className='my-5 ml-auto mr-auto text-left' style={{width: '70%'}}>
                        <h5>Cast Your Vote:</h5>
                        <form onSubmit={onsubmit}>
                            <select name='candidate' className='form-control' onChange={onchange}>
                                <option defaultValue value=''>
                                    Select
                                </option>
                                <option defaultValue value='1'>
                                    {candidate1.name}
                                </option>
                                <option defaultValue value='2'>
                                    {candidate2.name}
                                </option>
                            </select>
                            <button className='btn btn-primary mt-2 btn-md w-100'>
                                Vote Candidate: {''} {Candidate}
                            </button>
                        </form>
                    </div>
                    <p className='my-5'>
                        Your addres: 
                        <span className='font-weight-bold'>
                            {''} {currentAccount}
                        </span>
                    </p>
                </div>
                </div>
            </div>
            {/* <Bar
                data={data}
            
                height={800}
                width={1200}
                class='my-5'
            /> */}
        </div>
        
    )
}


export default Voting;