// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0;

contract Election {
    struct Candidate {
        uint id;
        string name;
        uint voteCount;
    }

    mapping(address => bool) public votedornot;

    mapping(uint => Candidate) public candidates;

    uint public candidatesCount;

    event electionupdates (
        uint indexed _candidateId
    );

    constructor() {
        addCandidate("Donald");
        addCandidate("Barack");
    }

    function addCandidate (string memory name) private {
        candidatesCount ++;
        candidates[candidatesCount] = Candidate(candidatesCount, name, 0);
    }

    function vote (uint _candidateId) public {
        require(!votedornot[msg.sender]);

        require(_candidateId > 0 && _candidateId <= candidatesCount);

        candidates[_candidateId].voteCount ++;

        votedornot[msg.sender] = true;

        emit electionupdates(_candidateId);
    }
}