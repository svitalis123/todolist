const falsetoggle = (mydata, s) => {
  for (let ite = 0; ite < mydata.length; ite += 1) {
    if (mydata[ite].index === s) {
      mydata[ite].completed = false;
    }
  }
};

export default falsetoggle;