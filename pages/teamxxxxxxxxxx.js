// import Footer from "../components/Footer";
// import Nav from "../components/Nav";
// import { useRouter } from "next/router";
// import { EN, ID } from "../translation";
// import { teamCards } from "../lib/teamCards";
// import Member from "../components/Member";

// export default function team() {
//   const router = useRouter();
//   const { locale } = router;
//   const t = locale === "ID" ? ID : EN;
//   return (
//     <main className="min-h-screen mx-auto border-t-2 border-white dark:bg-gray-bkg">
//       {/* Nav */}
//       <Nav title={` ${t.nav.team} ∙ AKA Trading Indonesia`}></Nav>

//       {/* Tulisan Team */}
//       <div className="z-10 w-full px-5 py-3 mx-auto mt-24 font-semibold text-center text-gray-600 dark:text-gray-500">
//         TEAM
//       </div>

//       {/* TeamCards */}
//       <div className="z-0 grid max-w-5xl grid-cols-1 gap-5 mx-auto sm:grid-cols-2 sm:justify-evenly md:grid-cols-3">
//         {teamCards.map((teamCard) => (
//           <Member
//             key={teamCard.id}
//             name={teamCard.name}
//             image={teamCard.image}
//             department={teamCard.department}
//             ig={teamCard.ig}
//             fb={teamCard.fb}
//             linkedIn={teamCard.linkedIn}
//             titleIg={teamCard.titleIg}
//             titleFb={teamCard.titleFb}
//             titleLinkedIn={teamCard.titleLinkedIn}
//           />
//         ))}
//       </div>
//       <Footer />
//     </main>
//   );
// }
