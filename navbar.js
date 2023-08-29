import React from 'react'

export default function Navbar() {
  return (
    /* navbar MENU  start FROM HERE*/
    <>
    <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">InfoElection</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-link ">
          <a className="nav-link " aria-current="page" href="/">Home</a>
        </li>
        {/* THIS ONE IS a indian politics  MENU  */}
        <li className="nav-item  dropdown">
          <a className="nav-link active dropdown-toggle" href="/" id="navbarDropdown" role="button" 
          data-bs-toggle="dropdown" aria-expanded="false">
            Indian Politics
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="/">Assembly Constituency</a></li>
            <li><a className="dropdown-item" href="/">Parliament Constituency</a></li>
            <li><a className="dropdown-item" href="/">Prominent Leaders</a></li>
            <li><a className="dropdown-item " href="/">Political Parties</a></li>
            <li><a className="dropdown-item" href="/">Top 10</a></li>
            <li><a className="dropdown-item" href="/">Cabinet & State Minister</a></li>
            <li><a className="dropdown-item" href="/">List of MP</a></li>
            <li><a className="dropdown-item" href="/">List of MLC</a></li>
            <li><a className="dropdown-item" href="/">List of MLA</a></li>
            <li><a className="dropdown-item" href="/">Municipal Corporations</a></li>
            <li><a className="dropdown-item" href="/">About Indian Politics</a></li>
            <li><a className="dropdown-item" href="/">Casete Wise Data</a></li>
            <li><a className="dropdown-item" href="/">Schemes</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
         {/* THIS ONE IS A ELECTION RESULT  MENU */}
        <li className="nav-item dropdown">
          <a className="nav-link active dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Election Result
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="/">Uttar Pradesh</a></li>
            <li><a className="dropdown-item" href="/">Andhra Pradesh</a></li>
            <li><a className="dropdown-item" href="/">Madhya Pradesh</a></li>
            <li><a className="dropdown-item" href="/">Bihar</a></li>
            <li><a className="dropdown-item" href="/">Delhi</a></li>
            <li><a className="dropdown-item"href="/">Maharstra</a></li>
            <li><a className="dropdown-item" href="/">Assam</a></li>
            <li><a className="dropdown-item" href="/">Goa</a></li>
            <li><a className="dropdown-item" href="/">Gujrat</a></li>
            <li><a className="dropdown-item" href="/">Haryana</a></li>
            <li><a className="dropdown-item" href="/">Himachal Pradesh</a></li>
            <li><a className="dropdown-item" href="/">Jharkhand</a></li>
            <li><a className="dropdown-item" href="/">Jammu & Kashmir</a></li>
            <li><a className="dropdown-item" href="/">Karnatka</a></li>
            <li><a className="dropdown-item" href="/">Kerala</a></li>
            <li><a className="dropdown-item" href="/">Punjab</a></li>
            <li><a className="dropdown-item" href="/">Odisha</a></li>
            <li><a className="dropdown-item" href="/">Rajasthan</a></li>
            <li><a className="dropdown-item" href="/">Telangana</a></li>
            <li><a className="dropdown-item" href="/">Tamil Nadu</a></li>
            <li><a className="dropdown-item" href="/">Uttarakhand</a></li>
            <li><a className="dropdown-item" href="/">West Bengal</a></li>
            <li><a className="dropdown-item" href="/">Union Territories</a></li>
            <li><a className="dropdown-item" href="/">NorthEast</a></li>
          </ul>
        </li>
         {/* THIS ONE IS a ELECTION UPDATES MENU */}
        <li className="nav-item dropdown">
          <a className="nav-link active dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Election Updates
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="/">Election Schedule</a></li>
            <li><a className="dropdown-item" href="/">Candidate List</a></li>
            <li><a className="dropdown-item" href="/">Opinion Poll</a></li>
            <li><a className="dropdown-item" href="/">Upcoming Election</a></li>
            <li><a className="dropdown-item" href="/">Election Facts</a></li>
          </ul>
        </li>
         {/* THIS ONE IS a STATE NEWS MENU */}
        <li className="nav-item dropdown">
          <a className="nav-link active dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            State News
          </a>
          
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          <li><a className="dropdown-item" href="/">Uttar Pradesh</a></li>
            <li><a className="dropdown-item" href="/">Andhra Pradesh</a></li>
            <li><a className="dropdown-item" href="/">Madhya Pradesh</a></li>
            <li><a className="dropdown-item" href="/">Bihar</a></li>
            <li><a className="dropdown-item" href="/">Delhi</a></li>
            <li><a className ="dropdown-item"href="/">Maharstra</a></li>
            <li><a className="dropdown-item" href="/">Assam</a></li>
            <li><a className="dropdown-item" href="/">Goa</a></li>
            <li><a className="dropdown-item" href="/">Gujrat</a></li>
            <li><a className="dropdown-item" href="/">Haryana</a></li>
            <li><a className="dropdown-item" href="/">Himachal Pradesh</a></li>
            <li><a className="dropdown-item" href="/">Jharkhand</a></li>
            <li><a className="dropdown-item" href="/">Jammu & Kashmir</a></li>
            <li><a className="dropdown-item" href="/">Karnatka</a></li>
            <li><a className="dropdown-item" href="/">Kerala</a></li>
            <li><a className="dropdown-item" href="/">Punjab</a></li>
            <li><a className="dropdown-item" href="/">Odisha</a></li>
            <li><a className="dropdown-item" href="/">Rajasthan</a></li>
            <li><a className="dropdown-item" href="/">Telangana</a></li>
            <li><a className="dropdown-item" href="/">Tamil Nadu</a></li>
            <li><a className="dropdown-item" href="/">Uttarakhand</a></li>
            <li><a className="dropdown-item" href="/">West Bengal</a></li>
            <li><a className="dropdown-item" href="/">Union Territories</a></li>
            <li><a className="dropdown-item" href="/">NorthEast</a></li>
          </ul>
        </li>
         {/* THIS ONE IS a POLITICAL SERVICES MENU */}
        <li className="nav-item dropdown">
          <a className="nav-link active dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Political Services
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="/">Home to win an election</a></li>
            <li><a className="dropdown-item" href="/">Constituency profiling</a></li>
            <li><a className="dropdown-item" href="/">Get Survey Done</a></li>
            <li><a className="dropdown-item" href="/">Campaign Mgmt</a></li>
            <li><a className="dropdown-item" href="/">Result Analysis</a></li>
            <li><a className = "dropdown-item" href="/">Social Media Mgmt</a></li>
          </ul>
        </li>
         {/* THIS ONE IS A CEO / VOTERLIST MENU */}
        <li className="nav-item dropdown">
          <a className="nav-link active  dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            CEO/VoterList
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="/">Voter ID CARD Registraion</a></li>
            <li><a className="dropdown-item " href="/">Election Commission</a></li>
            <li><a className="dropdown-item" href="/">Polling Booth</a></li>
          </ul>
        </li>
         {/* THIS ONE IS A MEDIA COVERAGE MENU */}
        <li className="nav-item dropdown">
          <a className="nav-link active dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Media Coverage 
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="/">Election Speeches</a></li>
          </ul>
        </li>
         {/* THIS ONE IS A CONTACT US MENU */}
        <li className="nav-item active">
        <a className="nav-link active "aria-current="page"href="/">Contact.Us</a>
        </li>
         {/* THIS ONE IS a FAQ MENU */}
        <li className="nav-item ">
        <a className="nav-link active" aria-current="page" href="/">FAQ</a>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</>
/* here navbar section end*/
  )
}
