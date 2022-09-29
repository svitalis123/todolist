const tryr1 = (mydata, s) => {
  for (let ite = 0; ite < mydata.length; ite += 1) {
    if (mydata[ite].index === s) {
      mydata[ite].completed = true;
    }
  }
};

export default tryr1;