
export type GhgEmission = { 
    yearMonth : string // "2025-10" 
    source : string // gasoline, lpg, diesel, etc 
    emissions : number // tons 
  }
  
  export type Company = { 
    id : string
    name : string 
    country : string // Country.code 
    emissions : GhgEmission[] 
  }
  
  export type Post = { 
    id : string 
    title : string 
    resourceUid : string 
    dateTime : string 
    content : string 
  }