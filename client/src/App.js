import React, {useEffect, useState} from 'react'
import Web3 from 'web3'
import './App.css';
import Electionabi from './contracts/Election.json'
import Navbar from './Navbar';
import Body from './Body';

function App() {

  useEffect(() => {
    loadWeb3();
    LoadBlockchainData();
  }, [])

  const[currentAccount, setCurrentAccount] = useState("");
  const[loader, setLoader] = useState(true);
  const[electionsm, setElectionsm] = useState();
  const[candidate1, setCanidate1] = useState();
  const[candidate2, setCanidate2] = useState();

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
  }

  const voteCandidate = async(candidateid) => {
    setLoader(true);
    await electionsm.methods.vote(candidateid).send({from: currentAccount}).on('transactionhash', () => {
      console.log('successful ran');
    })
    setLoader(false);
  }

  if(loader) {
      return <div>
        Loading...
      </div>
  }

  return (
    <div>
      <Navbar account={currentAccount}></Navbar>
      <Body candidate1={candidate1} candidate2={candidate2} voteCandidate={voteCandidate} account={currentAccount}></Body>
    </div>
  );
}

export default App;
