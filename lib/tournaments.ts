// mock/tournaments.ts
import { Tournament} from "@/Modals/allmodals";

export const tournaments: Tournament[] = [
  {
    slug: "national-cricket-championship-2024",
    name: "National Cricket Championship 2024",
    date: "Mar 15, 2024 - Mar 25, 2024",
    location: "Mumbai, Maharashtra",
    status: "upcoming",
    image:  "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1Z6Dt7.img?w=768&h=432&m=6&x=596&y=94&s=80&d=80",
    registrationDeadline: "Mar 10, 2024",
    entryFee: "Rs 500",
    prizePool: "Rs 10,000",
    description:
      "Welcome to the National Cricket Championship 2024! This is one of the most prestigious cricket tournaments in the region...",
  },
  {
    slug: "indian-premier-league-2026",
    name: "Indian Premier League 2026",
    date: "Mar 20, 2026 - May 30, 2026",
    location: "Mumbai, India",
    status: "upcoming",
    image: "https://th.bing.com/th?id=ORMS.742c81957ce43d207ac6c45c85c3446a&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1.5&p=0",
    registrationDeadline: "Mar 15, 2026",
    entryFee: "Rs 1000",
    prizePool: "Rs 50,00,000",
    description:
      "The Indian Premier League 2026 brings together the best cricket talent from around the world...",
  },
  {
    slug: "world-cup-2027",
    name: "Cricket World Cup 2027",
    date: "Oct 10, 2027 - Nov 25, 2027",
    location: "Sydney, Australia",
    status: "upcoming",
    image: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1Z6fSO.img?w=768&h=432&m=6&x=311&y=139&s=445&d=100",
    registrationDeadline: "Sep 30, 2027",
    entryFee: "USD 200",
    prizePool: "USD 1,000,000",
    description:
      "The ICC Cricket World Cup 2027 will showcase the best international teams competing for the ultimate prize in cricket...",
  },
  {
    slug: "asia-cup-2025",
    name: "Asia Cup 2025",
    date: "Aug 5, 2025 - Aug 20, 2025",
    location: "Colombo, Sri Lanka",
    status: "upcoming",
    image: "https://img.jagranjosh.com/images/2025/08/12/article/image/asia-cup-1754990931372.jpg",
    registrationDeadline: "Jul 25, 2025",
    entryFee: "Rs 750",
    prizePool: "Rs 20,00,000",
    description:
      "The Asia Cup 2025 will feature top Asian cricketing nations battling for continental supremacy...",
  },
  {
    slug: "champions-trophy-2028",
    name: "Champions Trophy 2028",
    date: "Jun 1, 2028 - Jun 18, 2028",
    location: "London, England",
    status: "upcoming",
    image: "https://d16f573ilcot6q.cloudfront.net/wp-content/uploads/2024/07/Champions-trophy.png",
    registrationDeadline: "May 20, 2028",
    entryFee: "GBP 100",
    prizePool: "GBP 500,000",
    description:
      "The ICC Champions Trophy 2028 will bring together the top eight cricketing nations in a thrilling short-format tournament...",
  },
  {
    slug: "ranji-trophy-2026",
    name: "Ranji Trophy 2026",
    date: "Jan 10, 2026 - Mar 5, 2026",
    location: "Delhi, India",
    status: "ongoing",
    image: "https://www.sportpreferred.com/wp-content/uploads/2026/01/kl-rahul-in-ranji-trophy-1.webp",
    registrationDeadline: "Jan 5, 2026",
    entryFee: "Rs 300",
    prizePool: "Rs 5,00,000",
    description:
      "The Ranji Trophy 2026 continues to be the premier domestic cricket competition in India, showcasing emerging talent...",
  },
];