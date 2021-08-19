function Nyplaces(borough) {
  let limit = document.getElementById('txtbox').value||10

  fetch(`https://data.cityofnewyork.us/resource/erm2-nwe9.json?$limit=${limit}&borough=${borough.toUpperCase()}&agency=NYPD`)
      .then(response => response.json())
      .then(data => displayData(data))
      .catch(error => console.log(error))
}  
    function displayData(data){
      let reportList = document.getElementById('results')
      reportList.innerHTML = ' '
      for(let i = 0; i <=data.length; i++){
          let descriptor = data[i].descriptor
          let resolution = data[i].resolution_description
          reportList.innerHTML += `<li>${descriptor} : ${resolution}</li>`
      }
}