import './App.css';
import Organization from "./components/Organization.tsx";
import Sponsor from "./components/Sponsor.tsx"

const organizations = [
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6XyJ6eT1dpIOIMhLG4lBBEYxUZH9Xxnxn2Q&s",
        title: "Anna Community Library Foundation",
        description: "The Anna Community Library Foundation is a separate volunteer-run 501(c)(3) nonprofit focused on long-term support of the library through fundraising, grants and gifts. It operates independently to enhance library facilities and resources for the public.",
        ctalink: "https://annatx.aspendiscovery.org",
        ctatext: "Visit Website",
    },
    {
        image: "https://www.annatexas.gov/ImageRepository/Document?documentID=3892",
        title: "Friends of Anna Community Library",
        description: "The Friends of the Anna Community Library is a volunteer-led 501(c)(3) nonprofit that supports the library’s events, services, and programs. Donations and memberships help fund literacy initiatives, community outreach and special projects. The group operates independently under a Board of Directors.",
        ctalink: "",
        ctatext: "",
    },
    {
        image: "https://www.pngkey.com/png/full/125-1253363_http-www-richlandcreek-com-uploads-register-register-now.png",
        title: "Register to Volunteer",
        description: "Are you looking for a great way to connect with your neighbors and contribute to your community?  Become a volunteer with the City of Anna Community Library.",
        ctalink: "https://annatexas.galaxydigital.com/",
        ctatext: "Apply Now",
    }
];

const sponsors = [
    {
        image: "https://kairosllc.vercel.app/K%20LLC/KLLC-Mint-NoBg.png",
        title: "CLKairos",
        description: "Quality developmental services providing assistance quickly and effectively.",
        link: "https://kairosllc.org",
    }
];

function App() {
  return (
    <>
        <div className="header">
          <h1>Business Partners of Anna</h1>
         </div>
         <div className="card">
             <h1>Our Organizations</h1><br/><hr />
             {organizations.map((org, index) => (
                 <Organization key={index} {...org} />
             ))}
        </div>
        <div className="card">
            <h1>Our Sponsors</h1><br/><hr/>
            {sponsors.map((org, index) => (
                <Sponsor key={index} {...org} />
            ))}
        </div>
         <div className="read-the-docs">
          <img src={"https://placehold.co/600x400"}></img>
          <p>
              <b>City Directory</b><br />
              City of Anna<br/>
              P.O. Box 776<br/>
              120 W. 7th St.<br/>
              Anna, TX 75409<br/>
              Phone: 972-924-3325<br/>
              Email Us
          </p>
         </div>
    </>
  )
}

export default App
