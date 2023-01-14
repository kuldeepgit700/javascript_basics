let datas = [

  { name: "Ajay Singh", designation: "software engineer" },
  { name: "Sandeep Singh", designation: "software engineer" }
];


function getData() {
  setTimeout(() => {
    let output = "";
    datas.forEach((data, index) => {
      output += `<li>${data.name}</li>`;

    });
    console.log(output);
  }, 3000);


}


function createData(createdData, callback) {
 setTimeout(() => {
    datas.push(createdData);
    callback();
    //console.log(datas);
  }, 5000);
}




//getData();
createData({name:"vivek singh",designation:"software engineer"}, getData);