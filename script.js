const makeChange = (c) => {
  // your name here
	let m=c/100;
	let pn=0.01,ni=0.05,dime=0.1,qu=0.25;
	let c1=0,c2=0,c3=0,c4=0;
	while(m>=qu){
		c1++;
		m=m-qu;
	}
	while(m>=dime){
		c2++;
		m=m-dime;
	}
	while(m>=ni){
		c3++;
		m=m-ni;
	}
	while(m>=pn){
		c4++;
		m=m-pn;
		       if(m>=0.005 && m<=0.01) m=0.01;

	}
	let obj={
		q:c1,
		d:c2,
		n:c3,
		p:c4,
	}  
	return obj;
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
