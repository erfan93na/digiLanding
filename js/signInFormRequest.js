//After Request >>> This Message Box Shows
let messageBox = document.createElement("div");
messageBox.style.color = "white";
messageBox.style.padding = "2rem";
messageBox.style.marginTop = "1rem";
messageBox.style.marginBottom = "3rem";
messageBox.style.borderRadius = "15px";

registrationForm.onsubmit = (e) => {
  e.preventDefault();
  axios
    .post("https://api.shadziclub.com/api/site/organizations/pre/subscribe", {
      organization: "digikala",
      personnel_code: personnelNum.value,
      mobile: mobileNum.value,
    })
    .then((res) => {
    
      messageBox.innerText = res.data.data.message;
      if (res.status === 200) {
        messageBox.style.backgroundColor = "#4BB543";
        formContainer.innerHTML = "";
      }
      else {
          // Other 2xx Errors
        messageBox.style.backgroundColor = "#ff6562";

      }
      formContainer.append(messageBox);
    }).catch(err=>{
        //3xx,4xx,5xx Errors
        messageBox.style.backgroundColor = "#ff6562";
        messageBox.innerText = "خطایی رخ داده است";
        formContainer.append(messageBox);

    });
};