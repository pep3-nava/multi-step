
const optionOneButton =  document.querySelector("#option1");
const optionOne = optionOneButton.textContent;
const optionTwoButton = document.querySelector("#option2");
const optionTwo = optionTwoButton.textContent;
const optionThreeButton =  document.querySelector("#option3");
const optionThree = optionThreeButton.textContent;


const stepOneDisplay = document.querySelector(".step-one");
const stepTwoDisplay = document.querySelector(".step-two");
const stepThreeDisplay = document.querySelector(".step-three");

const stepOneDot = document.querySelector("#step1");
const stepTwoDot = document.querySelector('#step2');
const stepThreeDot = document.querySelector('#step3');

const stepCounter = document.querySelector(".step-counter");


const userInfo = {
    userName : '' ,
    userEmail : '' ,
    optionsSelected : []
}  


const buttonOne = document.querySelector("#step-one-button");
const stepOne = () =>{
        const nameEntered = document.querySelector("#name").value;
        const emailEntered = document.querySelector("#email").value;
        userInfo.userName = nameEntered;
        userInfo.userEmail = emailEntered;
        stepOneDisplay.style.display = "none" ;
        stepTwoDisplay.style.display = "inline" ;
        stepOneDot.style.boxShadow = "0 0 0 0 #fff";
        stepTwoDot.style.boxShadow = "0 0 0 2px #845EEE";
        stepCounter.innerHTML = "Step 2 of 3"
}

buttonOne.addEventListener('click' , stepOne);


const pushOption = (selectedOption) => {
    userInfo.optionsSelected.push(selectedOption);
    if(selectedOption === optionOne){
        optionOne.style.backgroundColor = "#652CD1";
        optionOne.style.color = "#fff" ;
    }
    else if(selectedOption === optionTwo){
        optionTwo.style.backgroundColor = "#652CD1";
        optionTwo.style.color = "#fff" ;
    }
    else if(selectedOption === optionThree){
        optionThree.style.backgroundColor = "#652CD1" ;
        optionThree.style.color = "#fff" ;
    } 
  };
  
  optionOneButton.addEventListener("click", () => pushOption(optionOne));
  optionTwoButton.addEventListener("click", () => pushOption(optionTwo));
  optionThreeButton.addEventListener("click", () => pushOption(optionThree));

  
const buttonTwo =  document.querySelector("#step-two-button");
const addName = document.querySelector("#add-name");
const addEmail = document.querySelector("#add-email");
const addTopicsOne = document.querySelector("#add-topic1");
const addTopicTwo = document.querySelector("#add-topic2");
const stepTwo = ()=>{
    stepTwoDisplay.style.display = "none";
    stepThreeDisplay.style.display = "inline" ;
    addName.innerHTML = userInfo.userName;
    addEmail.innerHTML = userInfo.userEmail;
    addTopicsOne.innerHTML = userInfo.optionsSelected[0];
    addTopicTwo.innerHTML = userInfo.optionsSelected[1];
    stepTwoDot.style.boxShadow = "0 0 0 0 #fff";
    stepThreeDot.style.boxShadow = "0 0 0 2px #845EEE";
    stepCounter.innerHTML = "Step 3 of 3"
}
buttonTwo.addEventListener("click" , stepTwo);