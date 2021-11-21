import React, {useState} from "react";

const Body = ({candidate1, candidate2, voteCandidate, account}) => {

    const [Candidate, setCandidate] = useState('');
    const onchange = (e) => {
        setCandidate(e.target.value);
    }

    const onsubmit = (e) => {
        e.preventDefault();
        if(Candidate.id !== 0) voteCandidate(Number(Candidate));
        else window.alert('There is error in submission')
    }

    return (
        <div class="mt-4 text-center" style={{color: "#000000"}}>
            <h2>Election Result</h2>
                <hr 
                    style={{
                        width: '70%',
                        borderStyle: 'solid',
                        borderWidth: '2px',
                        borderColor: '#000000'
                    }}
                />
            <div className='p-3 ml-auto mr-auto' style={{width: '40%'}}>
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
                    <div className='col'>
                        <p>
                            Votes
                        </p>
                    </div>
                </div>
                <hr 
                style={{
                        width: '90%',
                        borderStyle: 'solid',
                
                        borderColor: '#000000'
                }}
                />
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
            <hr 
                style={{
                        width: '90%',
                        borderStyle: 'solid',
                
                        borderColor: '#000000'
                }}
                />
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
                    {''} {account}
                </span>
            </p>
        </div>
    )
}


export default Body;