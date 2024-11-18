const resumeForm = document.getElementById(`form`) as HTMLInputElement|null;
const resumeOutput = document.getElementById(`resumeOutput`) as HTMLInputElement|null;

// function to generate resume
    if(resumeForm && resumeOutput){
        resumeForm.addEventListener('submit',(event)=>{event.preventDefault();

    
            let myName:any=(document.getElementById(`name`)as HTMLInputElement).value;
            let myDesignation:any=(document.getElementById(`des`)as HTMLInputElement).value;
            let myPhone:any=(document.getElementById(`phone`)as HTMLInputElement).value;
            let myEmail:any=(document.getElementById(`email`)as HTMLInputElement).value;
            let myAddress:any=(document.getElementById(`add`)as HTMLInputElement).value;
            let myPassing_Years:any=(document.getElementById(`pss`)as HTMLInputElement).value;
            let myDegree:any=(document.getElementById(`degree`)as HTMLInputElement).value;
            let myBoard:any=(document.getElementById(`bu`)as HTMLInputElement).value;
            let myskill1:any=(document.getElementById(`skill`)as HTMLInputElement).value;
            let mylang1:any=(document.getElementById(`lang`)as HTMLInputElement).value;
            let mystartyear:any=(document.getElementById(`sy`)as HTMLInputElement).value;
            let myendingyear:any=(document.getElementById(`ey`)as HTMLInputElement).value;
            let myCompany:any=(document.getElementById(`comadd`)as HTMLInputElement).value;
            let myJob:any=(document.getElementById(`jobt`)as HTMLInputElement).value;
            let myReward1:any=(document.getElementById(`rew`)as HTMLInputElement).value;
            
            const resumeHTML =`
            <h2> Generate Resume </h2>
            <p> <storng> Name: </strong>${myName}</p>
            <p> <storng> Designation:</strong>${myDesignation}</p>
            <p> <storng> Phone No:</strong>${myPhone}</p>
            <p> <storng> Email:</strong>${myEmail}</p>
            <p> <storng> Address:</strong>${myAddress}</p>
            <p> <storng> Passing_Years:</strong>${myPassing_Years}</p>
            <p> <storng> Degree:</strong>${myDegree}</p>
            <p> <storng> Board:</strong>${myBoard}</p>
            <p> <storng> skill1:</strong>${myskill1}</p>
            <p> <storng> language:</strong>${mylang1}</p>
            <p> <storng> Admission :</strong>${mystartyear}</p>
            <p> <storng> Passing Year:</strong>${myendingyear}</p>
            <p> <storng> Company:</strong>${myCompany}</p>
            <p> <storng> Job:</strong>${myJob}</p>
            <p> <storng> Reward:</strong>${myReward1}</p>
            `;
            resumeOutput.innerHTML=resumeHTML            
        });
    }else{
            console.error("form of out put div not found in the DOM");
    }
        