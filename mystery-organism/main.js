// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (specimen, dna) => {
  return {
    specimenNum: specimen,
    dna: dna,
    mutate() {
      currentBaseIndex = Math.floor(Math.random()*this.dna.length)
      currentBase = this.dna[currentBaseIndex]
      newBase = returnRandBase()
      while (newBase === currentBase){
        newBase = returnRandBase();
      }
      this.dna[currentBaseIndex] = newBase
      return this.dna;
    },
    compareDNA(pAequor) {
      let spec1dna = this.dna
      let spec2dna = pAequor.dna
      let samedna = 0
      for (let i = 0; i<15; i++){
        if (spec1dna[i] === spec2dna[i]){
          samedna++
        }
      }
      let percentdna = samedna/spec1dna.length*100
      console.log(`The two specimens have ${percentdna}% DNA in common.`);    
    },
    willLikelySurvive(){
      let goodDNA = 0
      for (let i=0; i<15; i++){
        if (this.dna[i] === 'C' || this.dna[i] === 'G'){
          goodDNA++
        }
      }
      return goodDNA/15*100 >= 60
    }
  }
};

let sample = []
for (i=0; i<30; i++){
  sample.push(pAequorFactory(i, mockUpStrand()))
};











