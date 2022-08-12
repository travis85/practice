//Calculate the population of all the countries besides China
/**
 * data.map(({ 
  countryInMapScope: country = 0, 
  popInMapScope: pop = 0
}) => {
  // countryInMapScope and popInMapScope are
  available here. useful for when you have 
  naming conflicts
});
 */
let data = [
  {
    country: "China",
    pop: 1409517397
  },
  {
    country: "India",
    pop: 1339180127
  },
  {
    country: "USA",
    pop: 324459463
  },
  {
    country: "Indonesia",
    pop: 263991379
  }
]

//compare pop of chian indo

function compareCountries(data) {
    let china_Indo = 0
    let Usa_India = 0

    data.map(({country = '', pop = 0}) => {
        
         (country === "China" || country === "Indonesia") ? china_Indo += pop : Usa_India += pop
    })

   return (china_Indo > Usa_India) ?  china_Indo : Usa_India

}
console.log(compareCountries(data))



function allButChina(data){
    let total = 0
    data.map((country) => {
        if (country.country != "China") {
            return total += country.pop
        }
    })
    
    return total
}
// console.log(allButChina(data));
