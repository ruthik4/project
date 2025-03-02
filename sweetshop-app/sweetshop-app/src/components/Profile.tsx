import React from 'react';

const Profile: React.FC = () => {
  const handleLogout = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault(); // Prevent the default anchor behavior
    if (window.confirm('Are you sure you want to log out?')) {
      window.location.href = '/'; // Redirect to the logout URL
    }
  };

  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><a href="/Navbar">Home</a></li>
            <li><a href="/Products">Shop</a></li>
            <li><a href="/Categories">Categories</a></li>
           
            
            <li><a href="/Profile">Profile</a></li>
            <li><a href="/" onClick={handleLogout}>Logout</a></li>
            <li><a href="/Contactus">Contact Us</a></li>
          </ul>
        </nav>
      </header>
      <br/><br/><br/>


       <div className="mydiv" style={{ paddingLeft: 450 }}>
      <div className="card">
  <img src="https://preview.redd.it/instagram-default-user-profile-pic-flip-flops-v0-g983oflfeg4d1.jpg?width=262&format=pjpg&auto=webp&s=c6ec2305199c633fc6d460238d0409f41812fe75" className="card-img-top" alt="Profile Photo" />
  <div className="card-body">
    <h5 className="card-title">Nandu Mende</h5>
  </div>
  <ul className="list-group list-group-light">
    <li className="list-group-item px-3">Phone: +91 7013460109</li>
    <li className="list-group-item px-3">Alternate Phone: +91 7229684167</li>
    <li className="list-group-item px-3">Email: 22bk1a1269@stpetershyd.com</li>
    <li className="list-group-item px-3">
      Address: st peters college, HYD pin: 500043
    </li>
  </ul>
  <button onClick={handleLogout}>Logout</button>
</div>
</div>













     </div>
  );
};

export default Profile;