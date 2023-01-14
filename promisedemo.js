let datas = [
  { name: "Ajay Singh", designation: "software engineer" },
  { name: "Sandeep Singh", designation: "software engineer" },
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

function createData(createdData) {
  return new Promise((resolve, reject) => {
    let error = false;
    if (!error) {
      setTimeout(() => {
        datas.push(createdData);
        resolve();
        //console.log(datas);
      }, 5000);
    } else {
      reject("Opps something went wrong!");
    }
  });
}

//getData();
createData({ name: "vivek singh", designation: "software engineer" })
  .then(getData)
  .catch((err) => {
    console.log(err);
  });
