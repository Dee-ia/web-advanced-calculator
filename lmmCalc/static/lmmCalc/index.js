const createForm = () => {
  // debugger 

  // get alpha high value form form
  const alpha_high = document.getElementById('alpha-high').value

  // remove initial form content
  var initFormContent = document.getElementById("formInitialContent")
  initFormContent.parentNode.removeChild(initFormContent);

  var theForm = document.getElementById('form');
  var br = document.createElement("br"); 

  for (let i = 0; i < parseInt(alpha_high) + 1 ; i++) {
    var inputEl = document.createElement("input");
    inputEl.setAttribute("type", "number");
    inputEl.setAttribute("name", `alpha-${i}` );
    inputEl.setAttribute("placeholder", `alpha-${i}` );

    theForm.appendChild(inputEl);
    theForm.appendChild(br.cloneNode()); 
  }

  var submitButton = document.createElement("input");
  submitButton.setAttribute("type", "submit");
  submitButton.setAttribute("value", "Submit");
  theForm.appendChild(submitButton); 

}