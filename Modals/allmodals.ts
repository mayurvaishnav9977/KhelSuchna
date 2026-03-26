
export interface News {
  id: number;
  title: string;
  summary: string;
  imageUrl: string;
  publishedAt: string; // keep this
  source: string;
    category: "cricket" | "football" | "chess" | "vollyball" |"tennis"|"badminton" |"hockey " ; // <-- added category

   variant?: "hero" | "side" | "list";
}

export interface NewsArticle {
  id: number;
  title: string;
  author: string;
  publishedAt: string;
  imageUrl: string;
  content: string;
  
}
export interface Tournament {
 slug:string
  name: string;
  date: string; // pre-formatted for readability
  location: string;
  status: "upcoming" | "ongoing" | "completed";
  
  image: string;
  registrationDeadline: string;
  entryFee: string;
  prizePool: string;
  description: string;
}


