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
    specimenNum: specimenNum,
    dna: dna,
    mutate: () => {
      currentBaseIndex = Math.floor(Math.random()*this.dna.length)
      currentBase = this.dna[currentBaseIndex]
      newBase = returnRandBase()
      while (newBase === currentBase){
        newBase = returnRandBase();
      }
      this.dna[currentBaseIndex] = newBase
      return this.dna;
    }
  }
};








