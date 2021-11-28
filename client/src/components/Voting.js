import React, {useState} from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  
import {Bar} from 'react-chartjs-2';

import Vote from '../assets/4448.jpg';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Voting = ({candidate1, candidate2, voteCandidate, account}) => {

    const [Candidate, setCandidate] = useState('');
    const onchange = (e) => {
        setCandidate(e.target.value);
    }

    const onsubmit = (e) => {
        e.preventDefault();
        if(Candidate.id !== 0) voteCandidate(Number(Candidate));
        else window.alert('There is error in submission')
    }

    const data = {
        labels: [candidate1.name, candidate2.name],
        datasets:[{
            label: 'Voting chart',
            data: [candidate1.voteCount, candidate2.voteCount],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
            ],
            borderWidth: 1
        }]
    }

    return (
        <div class='container'>
            <div class='row my-5'>
                <div class='col'>
                    <img src={Vote} alt="Responsive" class="img-fluid" height='400'/>
                </div>
                <div class='col'>
                    <div class="mt-4 text-center" style={{color: "#000000"}}>
                    <h2>Election Result</h2>
                        <hr/>
                    <div className='p-3 ml-auto mr-auto'>
                        <div className='row ml-auto mr-auto mb-2' style={{width: '90%'}}>
                            <div className='col'>
                                <p>
                                    #
                                </p>
                            </div>
                            <div className='col'>
                                <p>
                                    Name
                                </p>
                            </div>
                            {/* <div className='col'>
                                <p>
                                    Votes
                                </p>
                            </div> */}
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
                            {/* <div className='col'>
                                <p>
                                    {candidate1.voteCount}
                                </p>
                            </div> */}
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
                            {/* <div className='col'>
                                <p>
                                    {candidate2.voteCount}
                                </p>
                            </div> */}
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
                            {''} {account}
                        </span>
                    </p>
                </div>
                </div>
            </div>
            <Bar
                data={data}
            
                height={800}
                width={1200}
                class='my-5'
            />
        </div>
        
    )
}


export default Voting;